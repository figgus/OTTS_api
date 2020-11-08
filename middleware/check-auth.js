const jwt = require('jsonwebtoken')
const globales = require('../VariablesGlobales/Globales')

module.exports = (req, res , next)=>{
    
    try{
        //console.log()
        const tokenRecibido = req.headers.authorization.split(" ")[1];
        if(!tokenRecibido){
            throw ('token vacio')
        }
        const docoded = jwt.decode(tokenRecibido, globales.GetSecretKey())
        if(!docoded){
            throw ('token invalido')
        }
        req.userData = docoded
        next()
    }catch(error){
        return res.status(401).json({
            message : 'Auth failed'
        })
    }

    
}