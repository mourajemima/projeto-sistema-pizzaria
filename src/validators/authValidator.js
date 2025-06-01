const { body } = require('express-validator');

const authValidationRules = [
    body('nome').notEmpty().withMessage('Nome é obrigatório'),
    body('email').isEmail().withMessage('Email inválido'),
    body('senha').isLength({ min: 6 }).withMessage('Senha deve ter pelo menos 6 caracteres'),
    body('telefone').notEmpty().withMessage('Telefone é obrigatório'),
    body('endereco').notEmpty().withMessage('Endereço é obrigatório'),
];

module.exports = authValidationRules;
