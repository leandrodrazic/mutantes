const functions = require("firebase-functions");
const express = require('express');
const app = express();
const port = 5000;

exports.app = functions.runWith({
    timeoutSeconds: 15,
    maxInstances: 20, //0 es ilimitado
}).https.onRequest(app);

mutantesRouter = require('./routes/mutantes-route');

app.use('/mutantes', mutantesRouter);

app.get('/', (req, res) => {
    res.send('Funcionando');
});

