# Descrição

Esse projeto consiste em uma API utilizando expressjs + typescript.

## Instalação

Na pasta do projeto, faça a instalção utilizando o gerenciador de pacotes NPM

```bash
npm install
```

Para iniciar o projeto em modo de desenvolvimento, utilize o comando:
```bash
npm run watch
```

## Funcionamento da API:


``` javascript
GET /123
// retornará o resultado
//  { "extenso": "cento e vinte e três" }


GET /-10
// retornará o resultado
//  { "extenso": "menos dez" }
```

É possível efetuar as requisições acessando a documentação que foi criada com o swagger. A mesma encontra-se disponível em /api-docs

# Testes da API

Testes de integração

```bash
npm test
```

Testes unitários

```bash
npm run test:unit
```
