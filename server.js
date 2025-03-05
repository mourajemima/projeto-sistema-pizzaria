const express = require('express');
const app = express();
const cardapioRoutes = require('./src/routes/cardapio');

app.use(cardapioRoutes);

app.listen(8000, () => {
    console.log('Servidor rodando em http://localhost:8000');
});