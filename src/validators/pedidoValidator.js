const { body } = require('express-validator');

module.exports = [
    body('cliente_id').isInt().withMessage('cliente_id deve ser um número inteiro'),
    body('data_pedido').isDate().withMessage('Data do pedido inválida'),
    body('horario_retirada').notEmpty().withMessage('Horário de retirada obrigatório'),
    body('status').notEmpty().withMessage('Status é obrigatório'),
    body('prioridade').notEmpty().withMessage('Prioridade é obrigatória'),
    body('total').isFloat({ gt: 0 }).withMessage('Total deve ser maior que 0'),
    body('metodo_pagamento').notEmpty().withMessage('Método de pagamento é obrigatório'),
];
