module.exports.saveTransaction = function(application, req, res) {
    var connection = application.config.dbConnection();
    var transactionModel = new application.app.models.Transaction(connection);

    transactionModel.saveTransaction(function(error, result){
        res.send(result);
    });
}
