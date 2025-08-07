// Seu código vai aqui
let X = parseInt(input.trim());
let valores = [1];
for(let i=2;i<=X;i++){
    if(X % i === 0){
        valores.push(i);
    }
}
console.log(valores.join(" "));