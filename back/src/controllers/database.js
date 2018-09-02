module.exports.createDatabase = function(app, req, res){
    var connection = app.config.dbConnection();
    var database = new application.app.models.Database(connection);

    database.createDatabase(function(error, result){
        res.render('noticias/noticias', { noticias : result });
    });

}