const express = require("express");
const http = require("http");

const PORT = process.env.PORT || 5000;

app = express();
const server = http.createServer(app)
server.listen(PORT, function () {
    console.log("Server in ascolto sulla porta " + PORT);
    init();
});
function init(req, res) {
    app.response.log = function (err) {
        console.log(`*********** Error ********* ${err.message}`)
    }
}

/* --- MIDDLEWARE --- */

app.use("/", function (req, res, next) {
    console.log(req.method + " : " + req.originalUrl);
    next();
});
// ----- -> ACCESS CONTROL LIST <- ----- //
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', "*");

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
// ----- -> ACCESS CONTROL LIST <- ----- //


// route risorse statiche
app.use("/", express.static('./static'));

// routes di lettura dei parametri post

app.use(express.urlencoded({ extended: true }));
app.use(express.json()) // To parse the incoming requests with JSON payloads

// 6 - log dei parametri 
app.use("/", function (req, res, next) {
    if (Object.keys(req.query).length != 0)
        console.log("------> Parametri GET: " + JSON.stringify(req.query));
    if (Object.keys(req.body).length != 0)
        console.log("------> Parametri BODY: " + JSON.stringify(req.body));
    next();
});

/* --- REQUEST --- */

app.get('/api/testGet', (req, res, next) => {
    class jsonT{
        Nome;
        Cognome;
        Eta;

        constructor(nome,cognome,eta){
            this.Nome = nome;
            this.Cognome = cognome;
            this.Eta = eta
        }
    }
    let jsonTest = new jsonT("nome"+generaNumero(0,10),"test",generaNumero(10,90))
    res.json(jsonTest);
});

/* **********************  DEFAULT ROUTE  ************************* */

// default route
app.use('/', function (req, res, next) {
    res.status(404)
    if (req.originalUrl.startsWith("/api/")) {
        res.send("Risorsa non trovata");
    }
    else res.send("error");
});

// gestione degli errori
app.use(function (err, req, res, next) {
    console.log(err.stack);  // stack completo  
});


function generaNumero(a, b) {
    //estremi inlcusi
    return Math.floor((b - a + 1) * Math.random()) + a;
}