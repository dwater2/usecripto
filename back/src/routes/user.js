module.exports = function(app) {
    app.get('/user/:id', function(req, res) {
        app.src.controllers.users.getUser(app, req, res);
    });
}