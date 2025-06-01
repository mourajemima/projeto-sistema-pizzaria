const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

const authValidator = require('../validators/authValidator');
const { validationResult } = require('express-validator');

router.post('/registrar', authValidator, (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ erros: errors.array() });
    }
    next();
}, authController.registrar);
router.post('/login', authController.login);


module.exports = router;
