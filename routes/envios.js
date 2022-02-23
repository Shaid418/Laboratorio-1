const {Router} = require('express');
const {getEnvios, postEnvios, putEnvios, deleteEnvios} = require('../controllers/envios')

const router = Router();

router.get('/', getEnvios)
router.post('/', postEnvios)
router.put('/:id', putEnvios)
router.delete('/:id', deleteEnvios)

module.exports = router