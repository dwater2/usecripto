function Database(connection){
    this._connection = connection;
}

Database.prototype.createDatabase = function(callback) {
    var sql = 'create table usuarios (id int not null primary key auto_increment, nome varchar(255) not null);' +
              'create table carteiras (hash varchar(42) not null primary key, id_usuario int not null ,saldo float(8,2) not null, foreign key (id_usuario) references usuarios(id));' +
              'create table transacoes (id int primary key auto_increment, valor float(8,2) not null, hash_remetente varchar(42) not null, hash_destinatario varchar(42) not null, data datetime not null default now());';
    this._connection.query(sql, callback);
}

module.exports = function(){
    return Database;
}