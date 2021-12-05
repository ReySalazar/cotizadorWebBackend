const { Router } = require('express');
const router = Router();

const { informaDistancia } = require('../controllers/distancia.controller');
const { getClima } = require('../controllers/clima.controller')

router.route('/')

    .post(informaDistancia)
    .get(getClima);

module.exports = router;