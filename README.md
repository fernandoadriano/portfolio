# Projeto do BOOTCAMP de JAMStack da Alura

## Desafio do Módulo 03
## Desafio do Módulo 02

- <ins>Componente _Modal_</ins>: criado um componente genérico de para gerenciar o comportamento de Modal para o projeto.

- <ins>Formulario de contato</ins>: ao clicar no menu Contato é aberto um formulário para preencher os dados de um contato e os mesmos são enviados para a api criada para o projeto (```https://contact-form-api-jamstack.herokuapp.com/message```).
Para deixar o formulário mais atrativo foram adicionadas animações para o sucesso e a falha na chamada da API.

- <ins>CI</ins>: adicionado ao suporte a um _workflow_ de CI/CD com o uso do GutHub Actions e utilizando o [husky](https://github.com/typicode/husky) e o [commitlint](https://github.com/conventional-changelog/commitlint) para garantir que as mensagens de push sigam o padrão do [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), além de aplicar o ESLINT para garantir que o código esteja aderente ao estilo do AirBnB, impedindo _pushes_ caso não esteja aderente.

> Como ação complementar foi adicionado ao processo de CI a validação de código com o uso da ferramenta [SKEN.AI](https://sken.ai/). Este processo busca identificar falhas de segurança que possam vir a ocorrer no software.

### <ins>Como instalar e configurar o HUSKY</ins>

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

### <ins>Instalar e configurar o commitlint</ins>

### Instalar o conventional commit para o desenvolvimento
```bash
yarn add --dev @commitlint/{config-conventional,cli}
```

### Adicionar o hook no husky para garantir o convetional commit
```bash
yarn husky add .husky/commit-msg "yarn commitlint --edit $1"
```

## Desafio do módulo 01

Criado o projeto base e seu layout seguindo o criado para o projeto.
