
const {Router}=require(`express`);
const {
    getprecios,
    postprecios,
    putprecios,
    deleteprecios


} = require (`../controllers/precios`);

const router = Router();



router.get(`/`,Getprecios)
router.post(`/`,(req,res)=> res.send(`POST Endpoint para precios`))
router.put(`/`,(req,res)=> res.send(`PUT Endpoint para precios`))
router.delete(`/`,(req,res)=> res.send(`DELETE Endpoint para precios`))
module.exports = router
    modules.exports = router