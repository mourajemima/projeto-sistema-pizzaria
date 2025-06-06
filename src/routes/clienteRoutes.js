const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const clienteValidator = require('../validators/clienteValidator');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, clienteController.listar);
router.get('/:id', clienteController.buscarPorId);
router.post('/', clienteValidator, clienteController.criar);
router.put('/:id', clienteValidator, clienteController.atualizar);
router.delete('/:id', clienteController.deletar);

module.exports = router;