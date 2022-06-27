const mutantesService = require('../services/mutantes-service');

async function mutantes(body, res) {
    try {

        if (!body || !body.dna) {
            res.status(400).json("Body invalido")
        }
        const resultado = mutantesService.isMutant(body.dna)
        await mutantesService.escribirConsulta(resultado)
        if (resultado) {
            res.status(200).json({ msg: "OK" })
        } else {
            res.status(403).json({ msg: "FORBIDDEN" })
        }
    } catch (e) {
        res.status(500).json({ msg: "ERROR INTERNO: " + e })
    }
}
async function estadisticas(req, res) {
    try {
        const resultado = await mutantesService.obtenerEstadisticas()
        res.status(200).json(resultado)

    } catch (e) {
        res.status(500).json({ msg: e })
    }
}
module.exports.mutantes = mutantes;
module.exports.estadisticas = estadisticas;
