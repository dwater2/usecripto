module.exports = function(app) {
    app.get('/database/create', function(req, res) {
        app.src.controllers.database.createDatabase(app, req, res);
    });
}