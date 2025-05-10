const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');
const pedidoValidator = require('../validators/pedidoValidator');

router.get('/', pedidoController.listar);
router.get('/:id', pedidoController.buscarPorId);
router.post('/', pedidoValidator, pedidoController.criar);
router.put('/:id', pedidoValidator, pedidoController.atualizar);
router.delete('/:id', pedidoController.deletar);

module.exports = router;
