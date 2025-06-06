const express = require('express');
const app = express();
const sequelize = require('./src/config/database');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./src/config/swagger.json');
const authRoutes = require('./src/routes/authRoutes');
const clienteRoutes = require('./src/routes/clienteRoutes');
const pizzaRoutes = require('./src/routes/pizzaRoutes');
const pedidoRoutes = require('./src/routes/pedidoRoutes');
const itemPedidoRoutes = require('./src/routes/itemPedidoRoutes');

app.use(express.json());

sequelize.authenticate().then(() => {
    console.log('Conexão com MySQL feita com sucesso');
}).catch((err) => {
    console.log('Erro ao conectar: ', err);
});

app.use('/auth', authRoutes);
app.use('/clientes', clienteRoutes);
app.use('/pizzas', pizzaRoutes);
app.use('/pedidos', pedidoRoutes);
app.use('/itenspedido', itemPedidoRoutes);


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(8000, () => {
    console.log('Servidor rodando em http://localhost:8000');
});