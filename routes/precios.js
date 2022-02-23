
const {Router} = require('express');
const { getPrecios, postPrecios, putPrecios, deletePrecios } = require('../controllers/precios');

const router = Router();

router.get('/', getPrecios)
router.post('/', postPrecios)
router.put('/:id', putPrecios)
router.delete('/:id', deletePrecios)

module.exports = router