const express = require('express');
const bodyParser = require("body-parser");
const bigRoutes = require("./app/routes/encomenda.routes.js");
const port = 3000;

const app = express();


// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));


// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) =>{
    res.render('index');
});

//app.use('bigRoutes',bigRoutes);

require("./app/routes/encomenda.routes.js")(app);

// 404 Page
app.use((req, res) => {
    res.status(404).render('404');
});

// listen for request
app.listen(process.env.PORT || port);

// set port, listen for requests
/*const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor está executando na porta ${PORT}.`);
});*/