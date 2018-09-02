module.exports.executeTransaction = function(app, req, res) {

    var de = '11111';
    var para = '22222';
    var valor = '500';
    var data = '02/09/2018';

    var transactionModel = new app.src.models.transaction();
    res.send(transactionModel.saveTransaction(app, de, para, valor, data));
}
