'use strict';
var express = require('express');
var app = express();
var PORT = 3001;
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/OTTS', {useUnifiedTopology: true,useNewUrlParser: true});
const routesUsuarios = require('./routes/usuario');
app.use(routesUsuarios);





//REST API




app.listen(PORT, function () {
   console.log('ejecutando');
});
