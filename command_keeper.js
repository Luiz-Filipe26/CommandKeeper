const fs = require('fs');
const path = require('path');
const os = require('os');
const { spawn } = require('child_process');

// Determine the base directory for commands
const baseDir = process.env.COMMANDKEEPER_HOME || path.join(process.env.HOME, 'CommandKeeper');
const COMMAND_FILE = path.join(baseDir, 'commands.txt');

if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
}

class FileManager {
  constructor(filePath) {
    this.filePath = filePath;
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, '');
    }
  }

  readLine(criteria) {
    const lines = fs.readFileSync(this.filePath, 'utf8').split('\n');
    return lines.find(line => line.startsWith(criteria)) || null;
  }

  appendLine(line) {
    fs.appendFileSync(this.filePath, `${line}\n`);
  }

  writeFile(data) {
    fs.writeFileSync(this.filePath, data.join('\n') + '\n');
  }

  readAllLines() {
    return fs.readFileSync(this.filePath, 'utf8').split('\n').filter(line => line.trim() !== '');
  }
}

const fileManager = new FileManager(COMMAND_FILE);

// Save a command
function saveCommand(cmdName, command = null, force = false) {
  const existingCommand = fileManager.readLine(`${cmdName}:`);

  if (existingCommand && !force) {
    console.log(`Command '${cmdName}' already exists. Use the "edit" command to modify it or pass the "-f" argument to force overwrite.`);
    return;
  }

  if (existingCommand && force) {
    console.log(`Command '${cmdName}' already exists and '-f' option was provided. Deleting existing command.`);
    deleteCommand(cmdName); // Delete the existing command
  }

  if (command) {
    if (force && existingCommand) {
      console.log(`Overwriting command '${cmdName}'.`);
    }
    fileManager.appendLine(`${cmdName}:${command}`);
    console.log(`Command '${cmdName}' saved successfully.`);
    return;
  }

  const tempFile = path.join(os.tmpdir(), `cmd-${cmdName}.sh`);
  fs.writeFileSync(tempFile, `# Write the command on the line below and save the file. Exit the editor to save.\n`);

  const editor = process.env.EDITOR || 'vim';
  const child = spawn(editor, [tempFile], { stdio: 'inherit' });

  child.on('exit', (code) => {
    if (code === 0) {
      const commandFromEditor = fs.readFileSync(tempFile, 'utf8').split('\n')[1].trim();
      if (commandFromEditor) {
        if (force && existingCommand) {
          console.log(`Overwriting command '${cmdName}'.`);
        }
        fileManager.appendLine(`${cmdName}:${commandFromEditor}`);
        console.log(`Command '${cmdName}' saved successfully.`);
      } else {
        console.log('No command was saved.');
      }
    } else {
      console.log('Editing canceled.');
    }
    fs.unlinkSync(tempFile);
  });
}

// Save the last command from the history file
function saveLastCommand(cmdName, command = null, force = false) {
  const historyFile = path.join(process.env.HOME, '.bash_history');

  try {
    if (fs.existsSync(historyFile)) {
      const history = fs.readFileSync(historyFile, 'utf8').trim().split('\n');
      const lastCommand = history[history.length - 1].trim();

      if (lastCommand) {
        // If no command is provided, use the last command from history
        saveCommand(cmdName, command || lastCommand, force);
      } else {
        console.log('No command found in the history.');
      }
    } else {
      console.log(`History file '${historyFile}' not found.`);
    }
  } catch (error) {
    console.error('Error accessing history file:', error);
  }
}

// Function to edit an existing command without opening an editor
function editCommand(cmdName, newCommand) {
  const existingCommand = fileManager.readLine(`${cmdName}:`);

  if (!existingCommand) {
    console.log(`Command '${cmdName}' not found. Use the "save" command to create it.`);
    return;
  }

  // Delete the existing command line
  deleteCommand(cmdName);

  // Save the new command
  saveCommand(cmdName, newCommand);
}

// Execute a command by replacing placeholders
function runCommand(cmdName, ...args) {
  if (!cmdName) {
    console.log("Command name is required.");
    return;
  }
  
  let cmdContent = fileManager.readLine(`${cmdName}:`);
  
  if (!cmdContent) {
    console.log(`Command '${cmdName}' not found.`);
    return;
  }

  cmdContent = cmdContent.split(':').slice(1).join(':');
  
  args.forEach((arg, i) => {
    const placeholder = `__ARG${i + 1}__`;
    while (cmdContent.includes(placeholder)) {
      cmdContent = cmdContent.replace(placeholder, arg);
    }
  });

  const [command, ...commandArgs] = cmdContent.split(' ');
  console.log(`Executing command: ${command} ${commandArgs.join(' ')}`);
  
  const child = spawn(command, commandArgs, { shell: true });

  child.stdout.on('data', (data) => {
    console.log(`stdout:\n${data}`);
  });

  child.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  child.on('error', (error) => {
    console.error(`Error: ${error.message}`);
  });

  child.on('close', (code) => {
    console.log(`Process exited with code ${code}`);
  });
}

// List all saved commands
function listCommands() {
  const commands = fileManager.readAllLines();
  if (commands.length === 0) {
    console.log("No commands saved yet.");
    return;
  }

  console.log(commands.join('\n'));
}

// Delete a command
function deleteCommand(cmdName) {
  const commands = fileManager.readAllLines().filter(line => !line.startsWith(`${cmdName}:`));
  fileManager.writeFile(commands);
  console.log(`Command '${cmdName}' deleted successfully.`);
}

// Print a command
function printCommand(cmdName) {
  const cmdContent = fileManager.readLine(`${cmdName}:`);
  
  if (!cmdContent) {
    console.log(`Command '${cmdName}' not found.`);
    return;
  }

  console.log(cmdContent.split(':').slice(1).join(':'));
}

// Process arguments
const [,, action, ...args] = process.argv;

switch (action) {
  case 'save':
    if (args[0] === 'last') {
      saveLastCommand(args[1], args[2], args.includes('-f'));
    } else {
      const force = args[0] === '-f' ? true : false;
      const cmdName = force ? args[1] : args[0];
      const command = force ? args[2] : args[1];
      saveCommand(cmdName, command, force);
    }
    break;

  case 'edit':
    const [editCmdName, editCommand] = args;
    editCommand(editCmdName, editCommand);
    break;

  case 'run':
    const [runCmdName, ...cmdArgs] = args;
    runCommand(runCmdName, ...cmdArgs);
    break;

  case 'list':
    listCommands();
    break;

  case 'delete':
    deleteCommand(args[0]);
    break;

  case 'print':
    printCommand(args[0]);
    break;

  default:
    console.log('Invalid command. Use "save", "edit", "run", "list", "delete", or "print".');
}
