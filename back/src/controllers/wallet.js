module.exports.getById = function(application, req, res) {
    var connection = application.config.dbConnection();
    console.log(application.app);
    var walletModel = new application.models.wallet(connection);
    var user_id = req.param.user_id;

    walletModel.getById(user_id, function(error, result){
        res.send(result);
    });
}