// A variável input contém a entrada descrita no exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

// Seu código vai aqui
let linhas = input.trim().split("\n");
let X = parseInt(linhas[0]);
let Y = parseInt(linhas[1]);

function quadrante(x,y){
    if(x > 0 && y > 0){
        console.log("Q1");
    }else if(x < 0 && y > 0){
        console.log("Q2");
    }else if(x < 0 && y < 0){
        console.log("Q3");
    }else if(x > 0 && y < 0){
        console.log("Q4");
    }else{
        console.log("eixos");
    }
}

quadrante(X,Y);