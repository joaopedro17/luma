# Automação do site Luma

Testes automatizados referentes a fluxos principais do website Luma

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.


### 📋 Pré-requisitos

Para conseguir rodar o projeto é necessário:

```
Versão estavel do Node
```

```
Chrome ou Mozila instalados
```

### 🔧 Instalação

Após clonar o projeto pelo comando:

```bash
git clone https://github.com/joaopedro17/luma.git
```

Execute o comando para instalar o Cypress na sua máquina

```bash
npm install cypress
```

Agora exeute o comando a seguir na pasta raiz do projeto para baixar todas as dependências

```bash
npm install
```

## ⚙️ Executando os testes

Os scripts execução estão localizados no [package.json](/package.json)

Para executar todos os testes:

```bash
npm run tests
```

Para executar somente um test:

```bash
npm run one:test <nome_da_classe_de_test>
```

## 🛠️ Construído com

* [Cypress](https://docs.cypress.io/guides/overview/why-cypress) - O framework de automação web
* [Node](https://nodejs.org/en) - Gerente de Dependência
* [Faker](https://fakerjs.dev) - Usada para gerar informação de usuário
* [JUnit Reporter for Mocha](https://www.npmjs.com/package/mocha-junit-reporter) - Usada para gerar relatórios de testes pela pipeline
