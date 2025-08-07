// Seu código vai aqui
let linhas = input.trim().split("\n");
let N = parseInt(linhas[0]);

let coposQuebrados = 0;
for(let i=1;i<=N;i++){
    let valores = linhas[i].trim().split(" ").map(Number);
    
    let L = valores[0];
    let C = valores[1];
        if(L>C){
            coposQuebrados += C;
        }
}
console.log(coposQuebrados);