const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Cliente = require('./Cliente');

const Usuario = sequelize.define('Usuario', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    senha: { type: DataTypes.STRING, allowNull: false },
    clienteId: { type: DataTypes.INTEGER, allowNull: false }
}, {
    tableName: 'usuarios',
    timestamps: false
});

Usuario.belongsTo(Cliente, { foreignKey: 'clienteId', as: 'cliente' });

module.exports = Usuario;
