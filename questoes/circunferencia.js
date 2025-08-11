// A variável input contém a entrada descrita no exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

// Seu código vai aqui
let valor = input.trim().split("\n");
let raio = parseFloat(valor[0]);

let area = 3.1416 * (raio * raio);
console.log(area.toFixed(2));