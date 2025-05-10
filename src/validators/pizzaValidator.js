const { body } = require('express-validator');

module.exports = [
    body('nome').notEmpty().withMessage('Nome da pizza é obrigatório'),
    body('descricao').notEmpty().withMessage('Descrição é obrigatória'),
    body('preco_base').isFloat({ gt: 0 }).withMessage('Preço base deve ser maior que 0')
];