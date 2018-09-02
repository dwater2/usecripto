function Wallet(connection){
    this._connection = connection;
}

Wallet.prototype.getById = function(user_id, callback){
    console.log('SELECT * FROM carteiras WHERE id_usuario = '+ user_id);
    this._connection.query('SELECT * FROM carteiras', callback);
}

module.exports = function(){
    return Wallet;
}