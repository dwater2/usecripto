function Transaction(){
}

Transaction.prototype.saveTransaction = function(app, de, para, valor, data){
    var userModel = new app.src.models.user();
    userModel.incrementaSaldo(app, de, valor, data);
    userModel.decrementaSaldo(app, para, valor, data);

    var item = {
        "de": de,
        "para": para,
        "valor": valor,
        "data": data
    };

    app.config.Transactions.push(item);
}

Transaction.prototype.getTransactions = function(app, carteira) {
    var retorno = [];
    for (var d = 0, len = app.config.Transactions.length; d < len; d += 1) {
        if (app.config.Transactions[d].de === carteira) {
            retorno.push(app.config.Transactions[d]);
        }

        if (app.config.Transactions[d].para === carteira) {
            retorno.push(app.config.Transactions[d]);
        }
    }

    return retorno;
}

module.exports = function(){
    return Transaction;
}