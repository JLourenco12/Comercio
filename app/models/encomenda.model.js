const sql = require("./db.js");

// constructor
const Encomenda = function(encomenda) {
    this.nome = encomenda.nome;
    this.email = encomenda.email;
    this.telefone = encomenda.telefone;
    this.preco = encomenda.preco;
    this.nome_produto = encomenda.nome_produto;
};



Encomenda.create = (newEncomenda, result) => {
  sql.query("INSERT INTO encomenda SET ?", newEncomenda, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created encomenda: ", { id: res.insertId, ...newEncomenda });
    result(null, { id: res.insertId, ...newEncomenda });
  });
};

Encomenda.findById = (encomendaId, result) => {
  sql.query(`SELECT * FROM encomenda WHERE id = ${encomendaId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found encomenda: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found encomenda with the id
    result({ kind: "not_found" }, null);
  });
};

Encomenda.getAll = result => {
  sql.query("SELECT * FROM encomenda", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("encomenda: ", res);
    result(null, res);
  });
};



Encomenda.updateById = (id, encomenda, result) => {
  sql.query(
    "UPDATE encomenda SET nome = ?, email = ?, telefone = ? WHERE id = ?",
    [encomenda.nome, encomenda.email, encomenda.telefone, id],
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

      console.log("updated encomenda: ", { id: id, ...encomenda });
      result(null, { id: id, ...encomenda });
    }
  );
};

Encomenda.remove = (id, result) => {
  sql.query("DELETE FROM encomenda WHERE id = ?", id, (err, res) => {
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

    console.log("deleted encomenda with id: ", id);
    result(null, res);
  });
};

Encomenda.removeAll = result => {
  sql.query("DELETE FROM encomenda", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} encomendas`);
    result(null, res);
  });
};

module.exports = Encomenda;