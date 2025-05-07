const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Pedido = require('./Pedido');
const Pizza = require('./Pizza');

const ItemPedido = sequelize.define('ItemPedido', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, 
    pedido_id: { type: DataTypes.INTEGER },
    pizza_id: { type: DataTypes.INTEGER },
    quantidade: DataTypes.INTEGER,
    tamanho: DataTypes.STRING,
    preco_unitario: DataTypes.FLOAT
}, {
    tableName: 'itens_pedido',
    timestamps: false
});

ItemPedido.belongsTo(Pedido, { foreignKey: 'pedido_id' });
ItemPedido.belongsTo(Pizza, { foreignKey: 'pizza_id' });

Pedido.hasMany(ItemPedido, { foreignKey: 'pedido_id' });
Pizza.hasMany(ItemPedido, { foreignKey: 'pizza_id' });

module.exports = ItemPedido;