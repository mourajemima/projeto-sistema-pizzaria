const { body } = require('express-validator');

module.exports = [
    body('pedido_id').isInt().withMessage('pedido_id deve ser um número inteiro'),
    body('pizza_id').isInt().withMessage('pizza_id deve ser um número inteiro'),
    body('quantidade').isInt({ gt: 0 }).withMessage('Quantidade deve ser maior que 0'),
    body('tamanho').notEmpty().withMessage('Tamanho é obrigatório'),
    body('preco_unitario').isFloat({ gt: 0 }).withMessage('Preço unitário deve ser maior que 0'),
];
