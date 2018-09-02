var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));

consign()
    .include('src/routes')
    .then('config/Users.js')
    .then('config/Transactions.js')
    .then('src/models')
    .then('src/controllers')
    .into(app);

module.exports = app;