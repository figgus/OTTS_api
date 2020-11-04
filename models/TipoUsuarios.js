const mongoose = require('mongoose');


const TipoUsuarioSchema = mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    Descripcion:String,
    
});

module.exports = mongoose.model('TipoUsuarios',TipoUsuarioSchema);