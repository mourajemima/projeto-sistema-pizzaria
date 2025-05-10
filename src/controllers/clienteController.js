const { validationResult } = require('express-validator');
const Cliente = require('../models/Cliente');

module.exports = { 
    async listar(req, res) {
        const clientes = await Cliente.findAll();
        return res.status(200).json(clientes);
    },

    async buscarPorId(req, res) {
        const cliente = await Cliente.findByPk(req.params.id);
        if (!cliente) {
            return res.status(404).json({ erro: 'Cliente não encontrado' });
        }
        return res.status(200).json(cliente);
    },

    async criar(req, res) {
        const erros = validationResult(req);
        if (!erros.isEmpty()) {
            return res.status(400).json({ erros: erros.array() });
        }

        try {
            const novoCliente = await Cliente.create(req.body);
            return res.status(201).json(novoCliente);
        } catch (err) {
            return res.status(500).json({
                erro: 'Erro ao criar cliente',
                detalhes: err.message
            });
        }
    },
    
    async atualizar(req, res) {
        const erros = validationResult(req);
        if (!erros.isEmpty()) {
            return res.status(400).json({ erros: erros.array() });
        }

        const cliente = await Cliente.findByPk(req.params.id);
        if (!cliente) {
            return res.status(404).json({ erro: 'Cliente não encontrado '});
        }

        try {
            await cliente.update(req.body);
            return res.status(200).json(cliente);
        } catch (err) {
            return res.status(500).json({
                erro: 'Erro ao atualizar cliente',
                detalhes: err.message
            });
        }
    },

    async deletar(req, res) {
        const cliente = await Cliente.findByPk(req.params.id);
        if (!cliente) {
            return res.status(404).json({ erro: 'Cliente não encontrado' });
        }

        try {
            await cliente.destroy();
            return res.status(204).send();
        } catch (err) {
            return res.status(500).json({
                erro: 'Erro ao deletar cliente',
                detalhes: err.message
            });
        }
    }
};
