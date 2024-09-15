# CommandKeeper 📝

[PT-BR] O **CommandKeeper** é uma ferramenta para gerenciar e executar comandos personalizados a partir da linha de comando. Aqui estão as instruções para configurar e usar o script `command_keeper.js`.

[EN-US] The **CommandKeeper** is a tool for managing and executing custom commands from the command line. Here are the instructions to set up and use the `command_keeper.js` script.

## Choose your language:

- [Português (PT-BR)](#português-pt-br)
- [English (EN-US)](#english-en-us)

---

## Português (PT-BR) <a name="português-pt-br"></a>

O **CommandKeeper** é uma ferramenta para gerenciar e executar comandos personalizados a partir da linha de comando. Aqui estão as instruções necessárias para configurar e usar o script `command_keeper.js`.

### Requisitos

<img src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" title="" alt="Nodejs" width="95">

- **Node.js**: Versão mínima recomendada é **v14.x**, embora a partir da versão **v10.x** já deve funcionar. Instale o Node.js a partir do [site oficial](https://nodejs.org/) 🌐 ou utilizando um gerenciador de versões como `nvm`.

### Configuração 🛠️

Para usar o CommandKeeper, você precisará adicionar algumas configurações ao seu arquivo `.bashrc`. Siga os passos abaixo:

1. **Definir a variável de ambiente `COMMANDKEEPER_HOME`** 🌍
   
   Abra o arquivo `.bashrc` no seu editor de texto preferido:
   
   `nano ~/.bashrc`
   
   Adicione a seguinte linha para definir o diretório onde o `command_keeper.js` está localizado:
   
   `export COMMANDKEEPER_HOME="$HOME/CommandKeeper"`

2. **Adicionar um alias para executar o script** 🎯
   
   Ainda no `.bashrc`, adicione um alias para facilitar a execução do script:
   
   `alias cmdj="node $COMMANDKEEPER_HOME/command_keeper.js"`

3. **Atualizar o comando do histórico do Bash** ⏳
   
   Para garantir que o histórico de comandos seja salvo corretamente, adicione ou atualize a linha a seguir no `.bashrc`:
   
   `PROMPT_COMMAND='history -a'`

4. **Aplicar as mudanças** 🔄
   
   Após editar o `.bashrc`, aplique as alterações com o comando:
   
   `source ~/.bashrc`
   
   Isso recarregará o `.bashrc` e aplicará as novas configurações.

### Uso

Com o `COMMANDKEEPER_HOME` e o alias configurados, você pode começar a usar o `CommandKeeper` diretamente da linha de comando.

#### Comandos Disponíveis

Aqui estão os comandos disponíveis para uso:

- **Salvar um comando** 💾
  
  `cmdj save [nome_comando] [opcional:comando]`
  
  Exemplo:
  
  `cmdj save listar "ls -la"`

- **Editar um comando existente** ✏️
  
  `cmdj edit [nome_comando] [opcional:comando]`

- **Executar um comando salvo** ▶️
  
  `cmdj run [nome_comando] [opcional:argumentos...]`
  
  Exemplo:
  
  `cmdj run listar`

- **Listar todos os comandos salvos** 📜
  
  `cmdj list`

- **Excluir um comando salvo** 🗑️:
  
  `cmdj delete [nome_comando]`

- **Imprimir um comando salvo** 🖨️
  
  `cmdj print [nome_comando]`

- **Salvar o último comando do histórico** ⏲️
  
  `cmdj save last [nome_comando]`
  
  Use o argumento `-f` para forçar a sobreposição:
  
  `cmdj save last [nome_comando] -f`

### Exemplos de Uso

- **Salvar um comando** 💾
  
  `cmdj save "listFiles" "ls -l"`

- **Editar um comando** ✏️
  
  `cmdj edit "listFiles"`

- **Executar um comando** ▶️
  
  `cmdj run "listFiles"`

- **Listar comandos** 📜
  
  `cmdj list`

- **Excluir um comando** 🗑️
  
  `cmdj delete "listFiles"`

- **Imprimir um comando** 🖨️
  
  `cmdj print "listFiles"`

- **Salvar o último comando do histórico** ⏲️
  
  `cmdj save last "lastCommand"`

### Notas

- Certifique-se de que o diretório `$HOME/CommandKeeper` contém o arquivo `command_keeper.js` e que você tem permissões adequadas para ler e executar o script. 🔍

- A ferramenta foi desenvolvida e testada em sistemas Unix-like 🐧, mas deve funcionar em outros ambientes com Node.js instalado, excetuando a funcionalidade de salvar o último comando executado.

---

Voltar para a [página principal](#commandkeeper-)

---

## English (EN-US) <a name="english-en-us"></a>

The **CommandKeeper** is a tool for managing and executing custom commands from the command line. Here are the instructions to set up and use the `command_keeper.js` script.

### Requirements

<img src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" title="" alt="Nodejs" width="94">

- **Node.js**: Minimum recommended version is **v14.x**, although it should work from **v10.x**. Install Node.js from the [official site](https://nodejs.org/) 🌐 or using a version manager like `nvm`.

### Setup 🛠️

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

### Usage

With `COMMANDKEEPER_HOME` and the alias set up, you can start using `CommandKeeper` directly from the command line.

#### Available Commands

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

### Usage Examples

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

### Notes

- Ensure that the `$HOME/CommandKeeper` directory contains the `command_keeper.js` file and that you have the appropriate permissions to read and execute the script. 🔍

- The tool has been developed and tested on Unix-like systems 🐧, but should work on other environments with Node.js installed, except for the save last command functionality.

---

Back to the [main page](#commandkeeper-)
