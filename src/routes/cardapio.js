const express = require('express'); 
const router = express.Router(); 

const pizzas = [
    {
        "id": 1,
        "nome": "Margherita",
        "preco": 35.90,
        "ingredientes": [
            "Molho de tomate",
            "Mussarela",
            "Manjericão",
            "Azeite"
        ]
    },
    {
        "id": 2,
        "nome": "Calabresa",
        "preco": 38.90,
        "ingredientes": [
            "Molho de tomate",
            "Mussarela",
            "Calabresa",
            "Cebola"
        ]
    },
    {
        "id": 3,
        "nome": "Quatro Queijos",
        "preco": 42.90,
        "ingredientes": [
            "Molho de tomate",
            "Mussarela",
            "Parmesão",
            "Gorgonzola",
            "Provolone"
        ]
    }
];

// rota raiz
router.get('/', (req, res) =>{
    res.status(200).send('<h1>Bem-vindo ao Sistema da Pizzalab</h1>');
});

// rota para o cardapio
router.get('/pizzas', (req, res) =>{
    res.status(200).json(pizzas);
});

// rota para uma pizza especifica
router.get('/pizzas/:id', (req, res) =>{
    const pizzaId = parseInt(req.params.id);
    const pizza = pizzas.find(p => p.id === pizzaId);

    if(pizza) {
        res.status(200).json(pizza);
    } else {
        res.status(404).json({"mensagem": "pizza não encontrada"});
    }
});

// rota para adicionar pizza
router.post('/pizzas', (req, res) => {
    const novaPizza = {
        id: pizzas.length + 1,
        nome: req.body.nome,
        preco: req.body.preco,
        ingredientes: req.body.ingredientes
    };
    pizzas.push(novaPizza);
    res.status(201).json(novaPizza);
});

// rota para alterar algum informacao sobre a pizza
router.put('/pizzas/:id', (req, res) => {
    const pizzaId = parseInt(req.params.id);
    const pizza = pizzas.find(p => p.id === pizzaId);

    if(!pizza) {
        res.status(404).json({"mensagem": "pizza não encontrada"});
    } else {
        pizza.nome = req.body.nome || pizza.nome;
        pizza.ingredientes = req.body.ingredientes || pizza.ingredientes;
        pizza.preco = req.body.preco || pizza.preco; 
        res.status(201).json(pizza);
    }
});

// rota para deletar uma pizza
router.delete('/pizzas/:id', (req, res) => {
    const pizzaId = parseInt(req.params.id);
    const indexDaPizza = pizzas.findIndex(p => p.id === pizzaId);

    if(indexDaPizza === -1) {
        res.status(404).json({"mensagem": "pizza não encontrada"});
    } else {
        pizzas.splice(indexDaPizza, 1);
        res.status(204).send();
    }
});


module.exports = router;
