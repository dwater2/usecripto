function wallet(connection){
    this._connection = connection;
}

wallet.prototype.getById = function(user_id, callback){
    this._connection.query('SELECT * FROM carteiras WHERE id_usuario = '+ user_id, callback);
}

module.exports = function(){
    return wallet;
}