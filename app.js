require('dotenv').config()
const Server = require ('./models/server')
const server = new server ();
server.listen();
app.get('/',function(req,res){
res.send('Hell World')

})
app.listen(process.env.PORT, () =>
console.log("El puerto esta corriendo el puerto TCP"+process.env.PORT)
)
