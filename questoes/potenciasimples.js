// Seu código vai aqui
let valoresFormatados = input.trim().split(" ").map(parseFloat);
let N = valoresFormatados[0];
let P = valoresFormatados[1];

let resultado = Math.pow(N, P);

console.log(resultado.toFixed(4));