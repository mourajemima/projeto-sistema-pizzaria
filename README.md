# 🍕 API Pizzalab | Sistema para pizzaria 

![Node.js](https://img.shields.io/badge/Node.js-%2368A063)
![Express](https://img.shields.io/badge/Express-%23e6e8e3)
![Sequelize](https://img.shields.io/badge/Sequelize-%23327ebb)
![MySQL](https://img.shields.io/badge/MySQL-%2300758F)
![API REST](https://img.shields.io/badge/API-RESTful-%234a92d4)

---

## 📋 Índice
- [Descrição](#descrição)
- [Status](#status)
- [Funcionalidades](#funcionalidades)
- [Rotas da API](#rotas-da-api)
- [Como executar](#como-executar)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Autor](#autor)

---

## 📝 Descrição
**Pizzalab** é uma API RESTful desenvolvida em **Node.js** utilizando o framework **Express** e ORM **Sequelize** com banco de dados **MySQL**.

Ela permite gerenciar:
- Clientes
- Pizzas
- Pedidos
- Itens dos pedidos

Com suporte completo a operações **CRUD** e **validações de entrada**, seguindo boas práticas de retorno com **status HTTP**.

---

## 🚧 Status
✅ Projeto em fase final de desenvolvimento — pronto para testes.

---

## ✅ Funcionalidades
- Cadastro, atualização, listagem e remoção de **clientes**
- Gerenciamento de **pizzas** no cardápio
- Criação e controle de **pedidos**
- Associação de pizzas aos pedidos via **itens do pedido**
- Validação de entradas com respostas claras de erro e sucesso

---

## 📌 Rotas da API

### Clientes
| Método | Rota | Descrição |
|--------|------|-----------|
| GET    | `/clientes`         | Lista todos os clientes |
| GET    | `/clientes/:id`     | Retorna um cliente por ID |
| POST   | `/clientes`         | Cria um novo cliente |
| PUT    | `/clientes/:id`     | Atualiza um cliente existente |
| DELETE | `/clientes/:id`     | Remove um cliente |

### Pizzas
| Método | Rota | Descrição |
|--------|------|-----------|
| GET    | `/pizzas`           | Lista todas as pizzas |
| GET    | `/pizzas/:id`       | Retorna uma pizza por ID |
| POST   | `/pizzas`           | Cria uma nova pizza |
| PUT    | `/pizzas/:id`       | Atualiza uma pizza existente |
| DELETE | `/pizzas/:id`       | Remove uma pizza do cardápio |

### Pedidos
| Método | Rota | Descrição |
|--------|------|-----------|
| GET    | `/pedidos`          | Lista todos os pedidos |
| GET    | `/pedidos/:id`      | Retorna um pedido por ID |
| POST   | `/pedidos`          | Cria um novo pedido |
| PUT    | `/pedidos/:id`      | Atualiza um pedido |
| DELETE | `/pedidos/:id`      | Remove um pedido |

### Itens do Pedido
| Método | Rota | Descrição |
|--------|------|-----------|
| GET    | `/itenspedido`         | Lista todos os itens dos pedidos |
| GET    | `/itenspedido/:id`     | Retorna um item do pedido por ID |
| POST   | `/itenspedido`         | Adiciona uma pizza a um pedido |
| PUT    | `/itenspedido/:id`     | Atualiza um item do pedido |
| DELETE | `/itenspedido/:id`     | Remove um item do pedido |

---

## 🚀 Como executar

1. Tenha o **Node.js** e o **MySQL** instalados
2. Clone este repositório:
   ```bash
   git clone https://github.com/mourajemima/pizzalab.git
   cd pizzalab
   ```
3. Instale as dependências:
    ```bash
    npm install
    ```
4. Configure o banco de dados em src/config/database.js
5. Execute o servidor:
    ```bash
    node server.js
    ```
6. Teste as rotas no Postman ou outro cliente HTTP

---

## Tecnologias utilizadas
* Node.js
* Express
* Sequelize
* MySQL
* Postman

# Autores
<p>
  <img src="https://github.com/mourajemima.png" width="100"> <br>
  <a href="https://github.com/mourajemima">Jemima Moura</a>
</p>