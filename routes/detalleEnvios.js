const {Router} = require('express');
const {getDetallesEnvios, postDetallesEnvios, putDetallesEnvios, deleteDetallesEnvios} 
= require('../controllers/detallesEnvios');

const router = Router();

router.get('/', getDetallesEnvios)
router.post('/', postDetallesEnvios)
router.put('/:id', putDetallesEnvios)
router.delete('/:id', deleteDetallesEnvios)

module.exports = router