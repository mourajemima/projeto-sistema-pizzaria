const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const Cliente = require('./Cliente');

const Pedido = sequelize.define('Pedido', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    cliente_id: { type: DataTypes.INTEGER },
    data_pedido: DataTypes.DATE,
    horario_retirada: DataTypes.TIME,
    status: DataTypes.STRING,
    prioridade: DataTypes.STRING,
    total: DataTypes.FLOAT,
    metodo_pagamento: DataTypes.STRING
}, {
    tableName: 'pedidos', 
    timestamps: false
});

Pedido.belongsTo(Cliente, { foreignKey: 'cliente_id' });
Cliente.hasMany(Pedido, { foreignKey: 'cliente_id' })

module.exports = Pedido;