const express = require('express');
const router = express.Router();
const Trade = require('../src/models/Trade');

router.get('/', async function(req, res, next) {
    try {
        let result = await Trade.find();
        console.log(result);
        return res.send(result);
    }catch(err){
        return res.status(404).send('Not Found')
    }

});

router.post('/save', async function(req, res, next) {
    try {

        let pokeLeft = req.body.pokeLeft;
        let pokeRight = req.body.pokeRight;
        console.log(req.body);
        if (Array.isArray(pokeLeft)){
            pokeLeft = pokeLeft.toString();
        }

        if (Array.isArray(pokeRight)){
            pokeRight = pokeRight.toString();
        }

        const trade = new Trade({
            pokeLeft: pokeLeft,
            pokeRight: pokeRight,
            tradedAt: new Date()
        })

        await trade.save();

        return res.send(trade);
    }catch(err){
        return res.status(400).send('Wrong parameters')
    }

});

module.exports = router;
