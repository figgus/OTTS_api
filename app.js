'use strict';
var express = require('express');
var app = express();
var PORT = 3001;
var bodyParser=require('body-parser');

app.use((req,res,next)=>{
   res.header('Access-Control-Allow-Origin','*');
   res.header('Access-Control-Allow-Headers'
   ,'Origin,X-Requested-With,Content-Type,Authorization');
   if(req.method==='OPTIONS'){
      res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
      return res.status(200).json({});
   }
   next();
});

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/OTTS', {useUnifiedTopology: true,useNewUrlParser: true});
const routesUsuarios = require('./routes/usuario');
app.use(routesUsuarios);


app.listen(PORT, function () {
   console.log('ejecutando');
});
