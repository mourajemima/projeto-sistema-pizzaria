const { body } = require('express-validator');

const clienteValidationRules = [
    body('nome').notEmpty().withMessage('Nome é obrigadtório'),
    body('email').isEmail().withMessage('Email inválido'),
    body('telefone').notEmpty().withMessage('Telefone é obrigatório'),
    body('endereco').notEmpty().withMessage('Endereço é obrigatório')
];

module.exports = clienteValidationRules;