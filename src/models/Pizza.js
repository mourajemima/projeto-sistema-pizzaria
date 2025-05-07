const { DataTypes } = require('sequelize');
const sequelize = require ('../config/database');

const Pizza = sequelize.define('Pizza', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    preco_base: DataTypes.FLOAT
}, {
    tableName: 'pizzas',
    timestamps: false
});

module.exports = Pizza;