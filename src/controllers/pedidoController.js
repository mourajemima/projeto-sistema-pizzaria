const { validationResult } = require('express-validator');
const Pedido = require('../models/Pedido');
const Cliente = require('../models/Cliente');

module.exports = {
    async listar(req, res) {
        const pedidos = await Pedido.findAll({ include: Cliente });
        return res.status(200).json(pedidos);
    },

    async buscarPorId(req, res) {
        const pedido = await Pedido.findByPk(req.params.id, { include: Cliente });
        if (!pedido) return res.status(404).json({ erro: 'Pedido não encontrado' });
        return res.status(200).json(pedido);
    },

    async criar(req, res) {
        const erros = validationResult(req);
        if (!erros.isEmpty()) {
            return res.status(400).json({ erros: erros.array() });
        }

        const cliente = await Cliente.findByPk(req.body.cliente_id);
        if (!cliente) return res.status(404).json({ erro: 'Cliente não encontrado' });

        try {
            const novoPedido = await Pedido.create(req.body);
            return res.status(201).json(novoPedido);
        } catch (err) {
            return res.status(500).json({ 
                erro: 'Erro ao criar pedido', 
                detalhes: err.message 
            });
        }
    },

    async atualizar(req, res) {
        const erros = validationResult(req);
        if (!erros.isEmpty()) {
            return res.status(400).json({ erros: erros.array() });
        }

        const pedido = await Pedido.findByPk(req.params.id);
        if (!pedido) return res.status(404).json({ erro: 'Pedido não encontrado' });

        try {
            await pedido.update(req.body);
            return res.status(200).json(pedido);
        } catch (err) {
            return res.status(500).json({ 
                erro: 'Erro ao atualizar pedido', 
                detalhes: err.message 
            });
        }
    },

    async deletar(req, res) {
        const pedido = await Pedido.findByPk(req.params.id);
        if (!pedido) return res.status(404).json({ erro: 'Pedido não encontrado' });

        try {
            await pedido.destroy();
            return res.status(204).send();
        } catch (err) {
            return res.status(500).json({ 
                erro: 'Erro ao deletar pedido', 
                detalhes: err.message 
            });
        }
    }
};
