module.exports = function(app) {
    app.post('/transaction', function(req, res) {
        app.src.controllers.transactions.executeTransaction(app, req, res);
    });

    app.get('/transactions/:carteira', function(req, res) {
        app.src.controllers.transactions.getTransactions(app, req, res);
    });
}