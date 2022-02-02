const express = require("express");
const http = require("http");

const PORT = process.env.PORT || 5000;

app=express();
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
// route risorse statiche
app.use("/", express.static('./static'));

// routes di lettura dei parametri post

app.use(express.urlencoded({extended: true}));
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

//
//
//

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

