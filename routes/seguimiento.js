const {Router}=require(`express`);
const {
    getseguimiento,
    postseguimiento,
    putseguimiento,
    deleteseguimiento


} = require (`../controllers/seguimiento`);

const router = Router();



router.get(`/`,GetdetallesEnvios)
router.post(`/`,(req,res)=> res.send(`POST Endpoint para seguimiento`))
router.put(`/`,(req,res)=> res.send(`PUT Endpoint para seguimiento`))
router.delete(`/`,(req,res)=> res.send(`DELETE Endpoint para seguimiento`))
module.exports = router