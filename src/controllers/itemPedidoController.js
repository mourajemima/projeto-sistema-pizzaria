const { validationResult } = require('express-validator');
const ItemPedido = require('../models/ItemPedido');
const Pedido = require('../models/Pedido');
const Pizza = require('../models/Pizza');

module.exports = {
    async listar(req, res) {
        const itens = await ItemPedido.findAll({ include: [Pedido, Pizza] });
        return res.status(200).json(itens);
    },

    async buscarPorId(req, res) {
        const item = await ItemPedido.findByPk(req.params.id, { include: [Pedido, Pizza] });
        if (!item) return res.status(404).json({ erro: 'Item de pedido não encontrado' });
        return res.status(200).json(item);
    },

    async criar(req, res) {
        const erros = validationResult(req);
        if (!erros.isEmpty()) {
            return res.status(400).json({ erros: erros.array() });
        }

        const pedido = await Pedido.findByPk(req.body.pedido_id);
        const pizza = await Pizza.findByPk(req.body.pizza_id);

        if (!pedido) return res.status(404).json({ erro: 'Pedido não encontrado' });
        if (!pizza) return res.status(404).json({ erro: 'Pizza não encontrada' });

        try {
            const novoItem = await ItemPedido.create(req.body);
            return res.status(201).json(novoItem);
        } catch (err) {
            return res.status(500).json({ 
                erro: 'Erro ao criar item de pedido', 
                detalhes: err.message 
            });
        }
    },

    async atualizar(req, res) {
        const erros = validationResult(req);
        if (!erros.isEmpty()) {
            return res.status(400).json({ erros: erros.array() });
        }

        const item = await ItemPedido.findByPk(req.params.id);
        if (!item) return res.status(404).json({ erro: 'Item de pedido não encontrado' });

        try {
            await item.update(req.body);
            return res.status(200).json(item);
        } catch (err) {
            return res.status(500).json({ 
                erro: 'Erro ao atualizar item de pedido', 
                detalhes: err.message 
            });
        }
    },

    async deletar(req, res) {
        const item = await ItemPedido.findByPk(req.params.id);
        if (!item) return res.status(404).json({ erro: 'Item de pedido não encontrado' });

        try {
            await item.destroy();
            return res.status(204).send();
        } catch (err) {
            return res.status(500).json({ 
                erro: 'Erro ao deletar item de pedido', 
                detalhes: err.message 
            });
        }
    }
};
