let express = require('express');
let router = express.Router();
const mutantesController = require('../controllers/mutantes-controller');
var bodyParser = require('body-parser')

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post("/mutant", jsonParser, async function (req, res, next) {
    await mutantesController.mutantes(req.body, res)
})
router.get("/stats", async function (req, res, next) {
    await mutantesController.estadisticas(req, res)
})

module.exports = router;