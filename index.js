const express = require('express');
const app = express();
const port = 3000;

mutantesRouter = require('./routes/mutantes-route');
app.use('/mutantes', mutantesRouter);

app.get('/', (req, res) => {
    res.send('Funcionando');
});

app.listen(port, () => {
    console.log(`Mutantes listening at http://localhost:${port}`);
});