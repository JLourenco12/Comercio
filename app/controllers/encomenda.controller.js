const Encomenda = require("../models/encomenda.model.js");

// Create and Save a new Encomenda
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Encomenda
  const encomenda = new Encomenda({
    nome: req.body.nome,
    email: req.body.email,
    telefone: req.body.telefone,
    preco: req.body.preco,
    nome_produto: req.body.nome_produto
  });

  // Save Encomenda in the database
  Encomenda.create(encomenda, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Encomenda."
      });
    //else res.send(data);
    else res.render('index', {flag: true});
  });
};

// Retrieve all Encomendas from the database.
exports.findAll = (req, res) => {
  Encomenda.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving encomendas."
      });
    else {
      console.log('YES');
      res.render('encomenda', {data});

    }
  });
};

// Find a single Encomenda with a encomendaId
exports.findOne = (req, res) => {
  Encomenda.findById(req.params.encomendaId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Encomenda with id ${req.params.encomendaId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Encomenda with id " + req.params.encomendaId
        });
      }
    } else res.send(data);
  });
};

// Update a Encomenda identified by the encomendaId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Encomenda.updateById(
    req.params.encomendaId,
    new Encomenda(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Encomenda with id ${req.params.encomendaId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Encomenda with id " + req.params.encomendaId
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Encomenda with the specified encomendaId in the request
exports.delete = (req, res) => {
  Encomenda.remove(req.params.encomendaId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Encomenda with id ${req.params.encomendaId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Encomenda with id " + req.params.encomendaId
        });
      }
    } else res.send({ message: `Encomenda was deleted successfully!` });
  });
};

// Delete all Encomendas from the database.
exports.deleteAll = (req, res) => {
  Encomenda.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all encomenda."
      });
    else res.send({ message: `All Encomenda were deleted successfully!` });
  });
};