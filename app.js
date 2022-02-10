require('dotenv').config()
const express= require ('express')
const app= express()
app.get('/',function(req,res){
res.send('Hell World')

})
app.listen(process.env.PORT, () =>
console.log("El puerto esta corriendo el puerto TCP"+process.env.PORT)
)
