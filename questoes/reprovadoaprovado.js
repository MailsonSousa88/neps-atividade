//logica necessaria para a formatacao dos numeros para a media!
let valoresFormatados = input.trim().split(" ").map(parseFloat);
let A = valoresFormatados[0];
let B = valoresFormatados[1];

// Seu código vai aqui
function checaMedia(notaA,notaB){
    let mediaDoAluno = (notaA+notaB)/2;
    if(mediaDoAluno >= 7){
        return "Aprovado";
    }else if(mediaDoAluno >= 4 && mediaDoAluno < 7){
        return "Recuperacao";
    }else if(mediaDoAluno < 4){
        return "Reprovado"
    }
    
}

let resultado = checaMedia(A,B);
console.log(resultado);