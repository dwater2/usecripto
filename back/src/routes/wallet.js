module.exports = function(app) {
    app.get('/wallet/getById/:user_id', function(req, res) {
        var data = app.src.controllers.wallet.getById(app, req, res);
        res.send(data);
    });
}