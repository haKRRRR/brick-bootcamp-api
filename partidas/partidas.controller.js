const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const authorize = require('_middleware/authorize')
const partidasService = require('./partidas.service');

// routes
router.get('/', authorize(), getAll);

module.exports = router;


function getAll(req, res, next) {
    partidasService.getAll()
        .then(partidas => res.json(partidas))
        .catch(next);
}