var express = require('express');
var consign = require('consign');

var app = express();

consign()
    .include('src/routes')
    // .then('config/dbConnection.js')
    .then('src/models')
    .then('src/controllers')
    .into(app);

module.exports = app;