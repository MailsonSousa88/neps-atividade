// A variável input contém a entrada descrita no exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

// Seu código vai aqui
let N = parseInt(input.trim());

function loop(valor){
    for(let i=1;i<=valor;i++){
        console.log("NepsAcademy eh Sucesso\n");
    }
}

loop(N);