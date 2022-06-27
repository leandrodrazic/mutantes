const caracteresValidos = ["A", "T", "C", "G"]
const db = require('../dbfs');

function isMutant(cadena) {
    let flagMutante = false;
    const N = cadena.length;
    for (let i = 0; i < N; i++) {
        if (cadena[i].length != N) {
            throw "No respeta el formato de NxN"
        }
        for (let j = 0; j < N; j++) {
            if (!validaCaracter(cadena[i][j])) {
                throw "Gen invalido"
            }
            if (j < N - 3) {
                if (chequeaHorizontal(cadena, i, j)) {
                    flagMutante = true;
                }
            }
            if (i < N - 3) {
                if (chequeaVertical(cadena, i, j)) {
                    flagMutante = true;
                }
                if (j > 3) {
                    if (chequeaOblicuoIzquierda(cadena, i, j)) {
                        flagMutante = true;
                    }
                }
                if (j < N - 3) {
                    if (chequeaOblicuoDerecha(cadena, i, j)) {
                        flagMutante = true;
                    }

                }
            }
        }
    }
    return flagMutante;
}

function chequeaHorizontal(cadena, i, j) {
    if (cadena[i][j] !== cadena[i][j + 1]) {
        return false;
    }
    if (cadena[i][j] !== cadena[i][j + 2]) {
        return false;
    }
    if (cadena[i][j] !== cadena[i][j + 3]) {
        return false;
    }
    return true;
}
function chequeaVertical(cadena, i, j) {
    if (cadena[i][j] !== cadena[i + 1][j]) {
        return false;
    }
    if (cadena[i][j] !== cadena[i + 2][j]) {
        return false;
    }
    if (cadena[i][j] !== cadena[i + 3][j]) {
        return false;
    }
    return true;
}
function chequeaOblicuoIzquierda(cadena, i, j) {
    if (cadena[i][j] !== cadena[i + 1][j - 1]) {
        return false;
    }
    if (cadena[i][j] !== cadena[i + 2][j - 2]) {
        return false;
    }
    if (cadena[i][j] !== cadena[i + 3][j - 3]) {
        return false;
    }
    return true;
}
function chequeaOblicuoDerecha(cadena, i, j) {
    if (cadena[i][j] !== cadena[i + 1][j + 1]) {
        return false;
    }
    if (cadena[i][j] !== cadena[i + 2][j + 2]) {
        return false;
    }
    if (cadena[i][j] !== cadena[i + 3][j + 3]) {
        return false;
    }
    return true;
}
function validaCaracter(caracter) {
    if (!caracteresValidos.includes(caracter)) {
        return false;
    }
    return true;
}

async function escribirConsulta(mutante) {
    if (mutante) {
        await db.dbFS.collection(`mutantes`).add({
            timestamp: Date.now()
        })
    } else {
        await db.dbFS.collection(`personas`).add({
            timestamp: Date.now()
        })
    }
}

async function obtenerEstadisticas() {
    const mutantes = await db.dbFS.collection(`mutantes`).get()
    const personas = await db.dbFS.collection(`personas`).get()
    const count_mutant_dna = mutantes.docs.length;
    const count_human_dna = personas.docs.length;
    const ratio = count_mutant_dna / count_human_dna;
    return { count_mutant_dna, count_human_dna, ratio }
}
module.exports.isMutant = isMutant;
module.exports.obtenerEstadisticas = obtenerEstadisticas;
module.exports.escribirConsulta = escribirConsulta;
