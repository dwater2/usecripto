function User(connection){
    this._connection = connection;
}

User.prototype.teste = function(params, callback){
    this._connection.query('INSERT INTO transacoes', callback);
}

module.exports = function(){
    return User;
}