const {Router}=require(`express`);
const {
    getenvios,
    postenvios,
    putenvios,
    deleteenvios


} = require (`../controllers/envios`);

const router = Router();



router.get(`/`,Getenvios)
router.post(`/`,(req,res)=> res.send(`POST Endpoint para Envios`))
router.put(`/`,(req,res)=> res.send(`PUT Endpoint para Envios`))
router.delete(`/`,(req,res)=> res.send(`DELETE Endpoint para Envios`))
module.exports = router