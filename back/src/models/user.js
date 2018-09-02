function User(){
}

User.prototype.getUser = function(app, id){
    for (var d = 0, len = app.config.Users.length; d < len; d += 1) {
        if (app.config.Users[d].id === id) {
            return app.config.Users[d];
        }
    }
}

User.prototype.incrementaSaldo = function(app, carteira, valor){
    for (var d = 0, len = app.config.Users.length; d < len; d += 1) {
        if (app.config.Users[d].carteira === carteira) {
            var saldo_atual = Number(app.config.Users[d].saldo);
            saldo_atual+= Number(valor);

            app.config.Users[d].saldo = saldo_atual;
        }
    }
}

User.prototype.decrementaSaldo = function(app, carteira, valor){
    for (var d = 0, len = app.config.Users.length; d < len; d += 1) {
        if (app.config.Users[d].carteira === carteira) {
            var saldo_atual = Number(app.config.Users[d].saldo);
            saldo_atual-= Number(valor);

            app.config.Users[d].saldo = saldo_atual;
        }
    }
}

module.exports = function(){
    return User;
}