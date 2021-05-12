module.exports = app => {
    const encomendas = require("../controllers/encomenda.controller.js");
    
    // Create a new Encomenda
    app.post("/encomendas", encomendas.create);
  
    // Retrieve all encomendas
    app.get("/encomendas", encomendas.findAll);
  
    // Retrieve a single Encomenda with encomendaId
    app.get("/encomendas/:encomendId", encomendas.findOne);
    

    // Update a Encomenda with encomendaId
    app.put("/encomendas/:encomendId", encomendas.update);
  
    // Delete a Encomenda with encomendaId
    app.delete("/encomendas/:encomendId", encomendas.delete);
  
    // Create a new Encomenda
    app.delete("/encomendas", encomendas.deleteAll);

    let query = '/formPagamento';
    query = encodeURI(query);
    query = decodeURI(query);
    
    app.get(query, (req, res) =>{
        console.log(req);
        const {preco, nome_produto } = req.query;
        console.log(preco, nome_produto);
        res.render('form-pagamento', {preco, nome_produto});
    });

    app.get('/login', (req, res) => {
        res.render('login');
    })

    app.get('/listaEncomendas', (req, res) => {
        res.render('encomenda');
    })
  };