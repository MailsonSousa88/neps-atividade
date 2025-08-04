// A variável input contém a entrada descrita no exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

// Seu código vai aqui

let meta = 1000000;
let linhas = input.trim().split("\n"); 

let N = parseInt(linhas[0]);
let soma = 0;
let dia = 0;

for (let i = 1; i <= N; i++) {
    let acessos = parseInt(linhas[i]);
    soma += acessos;
    dia++;

    if (soma >= meta) {
        console.log(dia);
        break;
    }
}
