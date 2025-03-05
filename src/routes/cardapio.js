const express = require('express'); 
const router = express.Router(); 

const pizzas = [
    {
        "id": 1,
        "nome": "Margherita",
        "tamanhos": {
            "pequena": 25.90,
            "media": 35.90,
            "grande": 45.90
        },
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
        "tamanhos": {
            "pequena": 28.90,
            "media": 38.90,
            "grande": 48.90
        },
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
        "tamanhos": {
            "pequena": 32.90,
            "media": 42.90,
            "grande": 52.90
        },
        "ingredientes": [
            "Molho de tomate",
            "Mussarela",
            "Parmesão",
            "Gorgonzola",
            "Provolone"
        ]
    }
];

router.get('/', (req, res) =>{
    res.status(200).send('<h1>Bem-vindo ao Sistema da Pizzalab</h1>');
});

router.get('/pizzas', (req, res) =>{
    res.status(200).json(pizzas);
});

router.get('/pizzas/:id', (req, res) =>{
    const pizzaId = parseInt(req.params.id);
    const pizza = pizzas.find(p => p.id === pizzaId);

    if(pizza){
        res.status(200).json(pizza);
    } else {
        res.status(404).send('<h1>Pizza não encontrada</h1>');
    }
});

module.exports = router;
