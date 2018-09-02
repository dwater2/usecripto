var express = require('express');

var app = express();

var mysql = require('mysql');
var port = 8080;

app.listen(port);


var connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '1234',
   database: 'usecripto'
});


app.get('/',function(req,res){
    res.send({msg: 'Teste'});
});

var createDataBase = function(){
    var query = 'create database cripto;';
    query += 'use cripto;';
    query += 'create table usuarios (id int not null primary key auto_increment, nome varchar(255) not null);';
    query += 'create table carteiras (hash varchar(42) not null primary key, id_usuario int not null ,saldo float(8,2) not null, foreign key (id_usuario) references usuarios(id));';
    query += 'create table transacoes (id int primary key auto_increment, valor float(8,2) not null, hash_remetente varchar(42) not null, hash_destinatario varchar(42) not null, data datetime not null default now());';
    connection.query(query, function( error, result){
        if(error){
            console.log('erro ao criar o banco de dados.');
        }
    });
};



