function Transaction(){
}

Transaction.prototype.saveTransaction = function(app, de, para, valor, data){
    var userModel = new app.src.models.user();
    userModel.incrementaSaldo(app, de, valor, data);
    userModel.decrementaSaldo(app, para, valor, data);
}

module.exports = function(){
    return Transaction;
}