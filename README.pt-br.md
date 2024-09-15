# CommandKeeper 📝

O **CommandKeeper** é uma ferramenta para gerenciar e executar comandos personalizados a partir da linha de comando. Aqui estão as instruções necessárias para configurar e usar o script `command_keeper.js`.

## Requisitos

<img src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" title="" alt="Nodejs" width="94">

- **Node.js**: Versão mínima recomendada é **v14.x**, embora a partir da versão **v10.x** já deve funcionar. Instale o Node.js a partir do [site oficial](https://nodejs.org/) 🌐 ou utilizando um gerenciador de versões como `nvm`.

## Configuração 🛠️

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

## Uso

Com o `COMMANDKEEPER_HOME` e o alias configurados, você pode começar a usar o `CommandKeeper` diretamente da linha de comando.

### Comandos Disponíveis

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

## Exemplos de Uso

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

## Notas

- Certifique-se de que o diretório `$HOME/CommandKeeper` contém o arquivo `command_keeper.js` e que você tem permissões adequadas para ler e executar o script. 🔍

- A ferramenta foi desenvolvida e testada em sistemas Unix-like 🐧, mas deve funcionar em outros ambientes com Node.js instalado, excetuando a funcionalidade de salvar o último comando executado.
  
  ---
  
  Voltar para a [página principal](README.md)
