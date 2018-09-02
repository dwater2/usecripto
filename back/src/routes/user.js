module.exports = function(app) {
    app.get('/users', function(req, res) {
        app.src.controllers.users.getAllUsers(app, req, res);
    });

    app.get('/user/:id', function(req, res) {
        app.src.controllers.users.getUser(app, req, res);
    });
}