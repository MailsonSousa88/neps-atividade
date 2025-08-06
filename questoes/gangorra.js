//Solução da questão "Gangorra"
let fs = require("fs");
let input = fs.readFileSync(0, "utf8");

let valores = input.trim().split(" ");

let P1 = parseInt(valores[0]);
let C1 = parseInt(valores[1]);
let P2 = parseInt(valores[2]);
let C2 = parseInt(valores[3]);

let torqueEsquerda = P1 * C1;
let torqueDireita = P2 * C2;

if (torqueEsquerda === torqueDireita) {
    console.log(0);
} else if (torqueEsquerda > torqueDireita) {
    console.log(-1);
} else {
    console.log(1);
}
