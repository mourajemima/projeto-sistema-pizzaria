const express = require('express');
const router = express.Router();
const pizzaController = require('../controllers/pizzaController');
const pizzaValidator = require('../validators/pizzaValidator');

router.get('/', pizzaController.listar);
router.get('/:id', pizzaController.buscarPorId);
router.post('/', pizzaValidator, pizzaController.criar);
router.put('/:id', pizzaValidator, pizzaController.atualizar);
router.delete('/:id', pizzaController.deletar);

module.exports = router;