# Desafio Front-End

Este projeto, intitulado "desafio-front-end", é uma implementação do desafio proposto utilizando React com TypeScript.

O desafio é desenvolver uma aplicação que exibe uma tabela de dados, fornecidos por uma API simulada com json-server. A aplicação deve ser responsiva e permitir a pesquisa na tabela através de um input.

# A tabela deve exibir:

Imagem (thumbnail do usuário)
Nome
Cargo
Data de admissão
Telefone
O input de pesquisa deve permitir filtrar dados por cargo, nome e telefone. As datas e telefones devem ser formatados no front-end, não na API.

## Pré-requisitos

Antes de começar, certifique-se de ter Node.js e npm instalados em sua máquina.

Para acessar os dados da API simulada, siga as instruções fornecidas neste README. É importante manter o json-server rodando no terminal para visualizar os dados no projeto.

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando no terminal:

```bash
npm install
```

## Acesso aos dados da API simulada

Para ter acesso aos dados que alimentarão o projeto, faça o seguinte:

Entre na pasta do projeto, em sua máquina, e, por meio da linha de comando, execute o comando `json-server --watch db.json`, para consumir a API simulada;

```bash
json-server --watch db.json || npx json-server db.json
```

É necessário deixar o json-server rodando no terminal para que os dados sejam visualizados no projeto.

Caso você tenha problemas com o json-server, tente rodá-lo com `npx json-server db.json` ou
com `yarn json-server <path>/db.json`, em que `<path>` é o caminho completo até o diretório em que o arquivo db.json está localizado. Se mesmo assim não funcionar, busque ajuda na web.

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm run dev`

Executa o aplicativo em modo de desenvolvimento. Abra [http://localhost:5173](http://localhost:5173) para visualizá-lo no navegador.

### `npm run build`

Compila o aplicativo para produção na pasta `dist`.

## Dependências

Este projeto usa várias dependências, incluindo:

- `react` e `react-dom`
- `react-router-dom`
- `styled-components`
- `react-lazy-load`
- `json-server`

## Dependências de Desenvolvimento

As dependências de desenvolvimento incluem:

- `typescript` para adicionar tipos estáticos ao JavaScript.
- `eslint` e vários plugins para linting.
- `vite` para um ambiente de desenvolvimento mais rápido e produção mais eficiente.
