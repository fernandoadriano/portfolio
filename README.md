# Projeto do BOOTCAMP de JAMStack da Alura

## <ins>Desafio do módulo 01</ins>

Criado o projeto base e seu layout seguindo o criado para o projeto.

## <ins>Desafio do Módulo 02</ins>

- <ins>Componente _Modal_</ins>: criado um componente gerério de para gerenciar o comportamento de Modal para o projeto.

- <ins>Formulario de contato</ins>: ao clicar no menu Contato é aberto um formulário para preencher os dados de um contato e os mesmos são enviados para a api criada para o projeto (```https://contact-form-api-jamstack.herokuapp.com/message```).
Para deixar o formulário mais atrativo foram adicionadas animações para o sucesso e a falha na chamada da API.

## Como instalar e configurar o HUSKY

### Instalação

```bash
yarn add --dev husky
```

### Habilitar hooks para o husky

```bash
yarn husky install
```

Cria a estrutura de diretório (```.husky```) e o scripts para executar os comandos do lint junto ao YARN
### Instalar hook do do linter

```bash
yarn husky add .husky/pre-push "yarn lint"
```

Após este processo será criado dentro do diretório ```.husky``` o arquivo ```pre-push``` com o comando ```yarn lint``` para executar
o ESLint antes de cada push.

## Instalar e configurar o commitlint

### Instalar o conventional commit para o desenvolvimento
```bash
yarn add --dev @commitlint/{config-conventional,cli}
```

### Adicionar o hook no husky para garantir o convetional commit
```bash
yarn husky add .husky/commit-msg "yarn commitlint --edit $1"
```
