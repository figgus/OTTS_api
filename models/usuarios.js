const mongoose = require('mongoose');


const usuarioSchema = mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    username:String,
    password:String,
});

module.exports = mongoose.model('Usuario',usuarioSchema);