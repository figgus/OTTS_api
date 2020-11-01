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
    console.log(usuario);
    const resUsuarios = usuario.find({}).then(
        (result)=>{
            console.log(result);
            res.status(200).json(result);
        }
    ).catch((err)=>{
        res.status(500);
    });
    console.log(resUsuarios);
});

router.post('/api/usuarios',(req,res,next)=>{
    const usuarioCrear = new usuario({
        _id : new mongoose.Types.ObjectId(),
        username : req.body.username,
        password :  req.body.password,
    });
    console.log(usuarioCrear);
    usuarioCrear.save().then((result)=>{
        console.log(result);
        res.status(200).json({
            message:'usuario creado'
        });
    }).catch((err)=>{
        console.log(err);
    });


    
});


module.exports = router;