const express = require('express');
const sequelize = require('./src/config/database');
const app = express();

app.use(express.json());

sequelize.authenticate().then(() => {
    console.log('Conexão com MySQL feita com sucesso');
}).catch((err) => {
    console.log('Erro ao conectar: ', err);
});

app.listen(8000, () => {
    console.log('Servidor rodando em http://localhost:8000');
});