const mongoose = require('mongoose');


const usuarioSchema = mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    username:String,
    password:String,
    fechaNacimiento:     {type: Date, default: Date.now },
    primerNombre:   {type: String },
    segundoNombre:   {type: String },
    apellidoPaterno:   {type: String },
    apellidoMaterno:   {type: String },
    Descripcion:String
});

module.exports = mongoose.model('Usuario',usuarioSchema);