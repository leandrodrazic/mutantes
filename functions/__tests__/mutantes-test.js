//concat.test.js
const mutantes = require("../services/mutantes-service");
const muestras = {
  1: ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"],
  2: ["ATGCCA", "CAGTGC", "TTATGT", "AGACGG", "CCCGTA", "TCACTG"],
  3: ["TTGCGA", "CAGTCC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"],
  4: ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCACTA", "TCACTG"],
  5: ["ATGCGA", "CGGTAC", "TTAAGT", "AGAAGG", "CCACTA", "TCACTG"]
}
test("Consultar ADN mutante 1", () => {
  expect(mutantes.isMutant(muestras[1])).toBe(true)
});
test("Consultar ADN mutante 2", () => {
  expect(mutantes.isMutant(muestras[2])).toBe(false);
});
test("Consultar ADN mutante 3", () => {
  expect(mutantes.isMutant(muestras[3])).toBe(true);
});
test("Consultar ADN mutante 4", () => {
  expect(mutantes.isMutant(muestras[4])).toBe(true);
});
test("Consultar ADN mutante 5", () => {
  expect(mutantes.isMutant(muestras[5])).toBe(true);
});
