const {Router}=require(`express`);
const {
    getdetallesEnvios,
    postdetallesEnvios,
    putdetallesEnvios,
    deletedetallesEnvios


} = require (`../controllers/detalleEnvios`);

const router = Router();



router.get(`/`,GetdetallesEnvios)
router.post(`/`,(req,res)=> res.send(`POST Endpoint para Detalles Envios`))
router.put(`/`,(req,res)=> res.send(`PUT Endpoint para Detalles Envios`))
router.delete(`/`,(req,res)=> res.send(`DELETE Endpoint para Detalles Envios`))
module.exports = router