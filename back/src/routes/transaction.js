module.exports = function(app) {
    app.get('/transaction/:hash', function(req, res) {
        app.src.controllers.transactions.getTransaction(app, req, res);
    });

    app.post('/transaction', function(req, res) {
        app.src.controllers.transactions.executeTransaction(app, req, res);
    });
}