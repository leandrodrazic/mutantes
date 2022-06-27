const functions = require("firebase-functions");
const express = require('express');
const app = express();
const port = 5000;
exports.app = functions.https.onRequest(app);
mutantesRouter = require('./routes/mutantes-route');

app.use('/mutantes', mutantesRouter);

app.get('/', (req, res) => {
    res.send('Funcionando');
});

// app.listen(port, () => {
//     console.log(`Mutantes listening `);
// });
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
