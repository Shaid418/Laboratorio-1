const {Router}=require(`express`);
const {
    getpaquetes,
    postpaquetes,
    putpaquetes,
    deletepaquetes


} = require (`../controllers/paquetes`);

const router = Router();



router.get(`/`,Getpaquetes)
router.post(`/`,(req,res)=> res.send(`POST Endpoint para paquetes`))
router.put(`/`,(req,res)=> res.send(`PUT Endpoint para paquetes`))
router.delete(`/`,(req,res)=> res.send(`DELETE Endpoint para paquetes`))
module.exports = router