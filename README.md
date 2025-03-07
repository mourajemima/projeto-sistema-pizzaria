# API Pizzalab | Sistema para pizzaria 

![Static Badge](https://img.shields.io/badge/Node.js-%2368A063)
![Static Badge](https://img.shields.io/badge/Express-%23e6e8e3)
![Static Badge](https://img.shields.io/badge/API-RESTful-%234a92d4)

# Índice
* [Descrição](#descrição)
* [Status](#status)
* [Funcionamento da API](#funcionamento-da-api)
    * [Rotas](#rotas)
* [Acessando a API](#acessando-a-api)
* [Tecnologias utilizadas](#tecnologias-utilizadas)
* [Autores](#autores)

# Descrição
Pizzalab é uma API simples desenvolvida em Node.js com Express para gerenciar um cardápio de pizzas. O sistema permite visualizar, adicionar, atualizar e remover pizzas de um cardápio.

# Status 
:construction: API em construção :construction:

# Funcionamento da API
## Rotas 
* **GET (/)**:  
Exibe uma mensagem de boas-vindas.
* **GET (/pizzas)**:  
Retorna a lista de pizzas disponíveis.
* **GET (/pizzas/:id)**:  
Retorna os detalhes de uma pizza específica pelo ID.
* **POST (/pizzas)**:  
Adiciona uma nova pizza
    * Enviar no corpo da requisição um json:
    ``` json
    {
        "nome": "nome da pizza",
        "preco": 40.00,
        "ingredientes": ["ingrediente1", "ingrediente2"]
    }
    ```
* **PUT (/pizzas/:id)**:  
Atualiza uma pizza existe.
* Enviar no corpo da requisição um json:
    ``` json
    {
        "nome": "novo da pizza",
        "preco": 41.50,
        "ingredientes": ["novo ingrediente1", "novo ingrediente2"]
    }
    ```
* **DELETE (/pizzas/:id)**:  
Remove uma pizza do cardápio

# Acessando a API
1. Tenha o Node.js na sua máquina
2. Clone este repositório ou baixe 
3. Dê preferência por abrir no Visual Studio Code
4. Instale as dependências que encontram-se no arquivo package.json
5. Execute o servidor no diretório do projeto com o comando node server.js

# Tecnologias utilizadas
* Node.js
* Express

# Autores
<p>
  <img src="https://github.com/mourajemima.png" width="100"> <br>
  <a href="https://github.com/mourajemima">Jemima Moura</a>
</p>