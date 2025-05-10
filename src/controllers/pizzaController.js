const { validationResult } = require('express-validator');
const Pizza = require('../models/Pizza');

module.exports = {
    async listar(req, res) {
        const pizzas = await Pizza.findAll();
        return res.status(200).json(pizzas);
    },

    async buscarPorId(req, res) {
        const pizza = await Pizza.findByPk(req.params.id);
        if (!pizza) return res.status(404).json({ erro: 'Pizza não encontrada' });
        return res.status(200).json(pizza);
    },

    async criar(req, res) {
        const erros = validationResult(req);
        if (!erros.isEmpty()) {
            return res.status(400).json({ erros: erros.array() });
        }

        try {
            const novaPizza = await Pizza.create(req.body);
            return res.status(201).json(novaPizza);
        } catch (err) {
            return res.status(500).json({ 
                erro: 'Erro ao criar pizza', 
                detalhes: err.message 
            });
        }
    },

    async atualizar(req, res) {
        const erros = validationResult(req);
        if (!erros.isEmpty()) {
            return res.status(400).json({ erros: erros.array() });
        }

        const pizza = await Pizza.findByPk(req.params.id);
        if (!pizza) return res.status(404).json({ erro: 'Pizza não encontrada' });

        try {
            await pizza.update(req.body);
            return res.status(200).json(pizza);
        } catch (err) {
            return res.status(500).json({ 
                erro: 'Erro ao atualizar pizza', 
                detalhes: err.message 
            });
        }
    },

    async deletar(req, res) {
        const pizza = await Pizza.findByPk(req.params.id);
        if (!pizza) return res.status(404).json({ erro: 'Pizza não encontrada' });

        try {
            await pizza.destroy();
            return res.status(204).send();
        } catch (err) {
            return res.status(500).json({ 
                erro: 'Erro ao deletar pizza', 
                detalhes: err.message 
            });
        }
    }
};