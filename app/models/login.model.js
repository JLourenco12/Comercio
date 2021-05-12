const sql = require("./db.js");

const Login = function(login) {
    this.nome_usuario = login.nome_usuario;
    this.senha = login.senha;
}


Login.login = (login, result) => {
    sql.query(
        "SELECT * FROM accounts WHERE username = ? AND password = ?",
        [login.nome_usuario, login.senha],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found encomenda with the id
                result({ kind: "not_found" }, null);
                return;
            }

            //console.log("login sucess: ", { id: id, ...encomenda });
            result(null, { id: id, ...login });

        }
    )
}
