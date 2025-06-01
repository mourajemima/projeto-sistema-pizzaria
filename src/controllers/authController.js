const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');
const Cliente = require('../models/Cliente');

module.exports = {
    async registrar(req, res) {
        const { nome, email, senha, telefone, endereco } = req.body;

        try {
            const usuarioExistente = await Usuario.findOne({ where: { email } });
            if (usuarioExistente) {
                return res.status(400).json({ erro: 'Email já cadastrado' });
            }
            
            const cliente = await Cliente.create({
                nome, email, telefone, endereco, data_cadastro: new Date()
            });

            const senhaCriptografada = await bcrypt.hash(senha, 10);

            const usuario = await Usuario.create({
                email,
                senha: senhaCriptografada,
                clienteId: cliente.id
            });

            return res.status(201).json({ mensagem: 'Registrado com sucesso', usuario });
        } catch (err) {
            // Mostra o erro completo do Sequelize para entender melhor
            console.error('Erro no registro:', err);
            return res.status(500).json({ erro: 'Erro no registro', detalhes: err.message, errors: err.errors });
        }
    },

    async login(req, res) {
        const { email, senha } = req.body;

        try {
            const usuario = await Usuario.findOne({ where: { email } });
            if (!usuario) {
                return res.status(401).json({ erro: 'Credenciais inválidas' });
            }

            const senhaValida = await bcrypt.compare(senha, usuario.senha);
            if (!senhaValida) {
                return res.status(401).json({ erro: 'Credenciais inválidas' });
            }

            const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

            return res.status(200).json({ token });
        } catch (err) {
            return res.status(500).json({ erro: 'Erro no login', detalhes: err.message });
        }
    }
};
