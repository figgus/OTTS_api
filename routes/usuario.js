const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const usuario = require('../models/usuarios');
console.log(mongoose.modelNames());
router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'get usuarios'
    });
});

router.get('/api/usuarios',(req,res,next)=>{
    const resUsuarios = usuario.find({}).then(
        (result)=>{
            res.status(200).json(result);
        }
    ).catch((err)=>{
        res.status(500);
    });
});

router.get('/api/getConductores',(req,res,next)=>{
    const resUsuarios = usuario.find({"tipoUsuario.descripcion":'conductor'}).then(
        (result)=>{
            res.status(200).json(result);
        }
    ).catch((err)=>{
        res.status(500);
    });
});

router.post('/api/usuarios',(req,res,next)=>{
    
    var model = {
        _id : new mongoose.Types.ObjectId(),
        username : req.body.username,
        password :  req.body.password,
        primerNombre: req.body.primerNombre,
        segundoNombre: req.body.segundoNombre,
        apellidoPaterno: req.body.apellidoPaterno,
        apellidoMaterno: req.body.apellidoMaterno,
        Descripcion: req.body.Descripcion
    }
    const usuarioCrear = new usuario(model);
    

    usuarioCrear.save().then((result)=>{
        res.status(200).json({
            message:'usuario creado'
        });
    }).catch((err)=>{
        console.log(err);
    });

});

router.post('/api/LoginUsuarios',(req,res,next)=>{
    const nombre = req.body.username;
    const password = req.body.password;
    const resUsuario = usuario.find({username:nombre,password:password}).then(
        (result)=>{
            res.status(200).json(result);
        }
    ).catch((err)=>{
        res.status(500).json(err);
    });
});

router.delete('/api/usuarios/:usuarioID',(req,res,next)=>{
    const userId = mongoose.Types.ObjectId(req.params.usuarioID);
    console.log(userId);
    usuario.deleteOne({'_id':userId}).then((result)=>{
        res.status(200).json(result);
    }).catch((err)=>{
        res.status(500).json({
            error:err
        });
    });
    res.status(500);
});


module.exports = router;