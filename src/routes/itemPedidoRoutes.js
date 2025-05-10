const express = require('express');
const router = express.Router();
const itemPedidoController = require('../controllers/itemPedidoController');
const itemPedidoValidator = require('../validators/itemPedidoValidator');

router.get('/', itemPedidoController.listar);
router.get('/:id', itemPedidoController.buscarPorId);
router.post('/', itemPedidoValidator, itemPedidoController.criar);
router.put('/:id', itemPedidoValidator, itemPedidoController.atualizar);
router.delete('/:id', itemPedidoController.deletar);

module.exports = router;
