const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const usuario = require('../models/usuarios');

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

router.post('/api/usuarios',(req,res,next)=>{
    const usuarioCrear = new usuario({
        _id : new mongoose.Types.ObjectId(),
        username : req.body.username,
        password :  req.body.password,
    });
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


module.exports = router;