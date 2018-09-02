module.exports = function(app) {
    app.get('/saveTransaction', function(req, res) {
        var data = app.src.controllers.transactions.saveTransaction(app, req, res);
        res.send(data);
    });

    app.post('/transaction', function(req, res) {
        app.src.controllers.transactions.executeTransaction(app, req, res);
    });
}