module.exports.getUser = function(app, req, res) {
    var userModel = new app.src.models.user();
    res.send(userModel.getUser(app, req.params.id));
}