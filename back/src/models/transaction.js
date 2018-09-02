function Transaction(connection){
    this._connection = connection;
}

Transaction.prototype.saveTransaction = function(transaction, callback){
    this._connection.query('INSERT INTO transacoes SET ? ', transaction, callback);
}

module.exports = function(){
    return Transaction;
}