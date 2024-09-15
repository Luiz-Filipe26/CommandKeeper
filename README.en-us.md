# CommandKeeper 📝

The **CommandKeeper** is a tool for managing and executing custom commands from the command line. Here are the instructions to set up and use the `command_keeper.js` script.

## Requirements

![Nodejs](https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png)

- **Node.js**: Minimum recommended version is **v14.x**, although it should work from **v10.x**. Install Node.js from the [official site](https://nodejs.org/) 🌐 or using a version manager like `nvm`.

## Setup 🛠️

To use CommandKeeper, you'll need to add some settings to your `.bashrc` file. Follow these steps:

1. **Define the `COMMANDKEEPER_HOME` environment variable** 🌍
   
   Open the `.bashrc` file in your preferred text editor:
   
   `nano ~/.bashrc`
   
   Add the following line to set the directory where `command_keeper.js` is located:
   
   `export COMMANDKEEPER_HOME="$HOME/CommandKeeper"`

2. **Add an alias to run the script** 🎯
   
   Still in `.bashrc`, add an alias to make it easier to run the script:
   
   `alias cmdj="node $COMMANDKEEPER_HOME/command_keeper.js"`

3. **Update the Bash history command** ⏳
   
   To ensure that the command history is saved correctly, add or update the following line in `.bashrc`:
   
   `PROMPT_COMMAND='history -a'`

4. **Apply the changes** 🔄
   
   After editing `.bashrc`, apply the changes with the command:
   
   `source ~/.bashrc`
   
   This will reload `.bashrc` and apply the new settings.

## Usage

With `COMMANDKEEPER_HOME` and the alias set up, you can start using `CommandKeeper` directly from the command line.

### Available Commands

Here are the commands available for use:

- **Save a command** 💾
  
  `cmdj save [command_name] [optional:command]`
  
  Example:
  
  `cmdj save list "ls -la"`

- **Edit an existing command** ✏️
  
  `cmdj edit [command_name] [optional:command]`

- **Run a saved command** ▶️
  
  `cmdj run [command_name] [optional:arguments...]`
  
  Example:
  
  `cmdj run list`

- **List all saved commands** 📜
  
  `cmdj list`

- **Delete a saved command** 🗑️
  
  `cmdj delete [command_name]`

- **Print a saved command** 🖨️
  
  `cmdj print [command_name]`

- **Save the last command from history** ⏲️
  
  `cmdj save last [command_name]`
  
  Use the `-f` argument to force overwrite:
  
  `cmdj save last [command_name] -f`

## Usage Examples

- **Save a command** 💾
  
  `cmdj save "listFiles" "ls -l"`

- **Edit a command** ✏️
  
  `cmdj edit "listFiles"`

- **Run a command** ▶️
  
  `cmdj run "listFiles"`

- **List commands** 📜
  
  `cmdj list`

- **Delete a command** 🗑️
  
  `cmdj delete "listFiles"`

- **Print a command** 🖨️
  
  `cmdj print "listFiles"`

- **Save the last command from history** ⏲️
  
  `cmdj save last "lastCommand"`

## Notes

- Ensure that the `$HOME/CommandKeeper` directory contains the `command_keeper.js` file and that you have the appropriate permissions to read and execute the script. 🔍

- The tool has been developed and tested on Unix-like systems 🐧, but should work on other environments with Node.js installed, except for the save last command functionality.

---

Back to the [main page](README.md)
