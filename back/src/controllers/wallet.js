module.exports.getById = function(app, req, res) {
    var connection = app.config.dbConnection();
    var walletModel = new app.src.models.wallet(connection);
    var user_id = req.params.user_id;

    walletModel.getById(user_id, function(error, result){
        console.log(result);
       res.send(result);
    });
}