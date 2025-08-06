let linhas = input.trim().split("\n");
let N = parseInt(linhas[0]);
let botoes = linhas[1].split(" ").map(Number);

let A = 0;
let B = 0;

for(let i=0;i<N;i++){
    if(botoes[i] === 1){
            if(A === 1){
                A = 0;
                    }else{
                        A = 1;
                    }
            
    }else if(botoes[i] === 2){
            if(A === 0){
                    A = 1;
                    }else{
                        A = 0;
                    }

            if(B === 1){
                    B = 0;
                    }else{
                        B = 1;
                    }
        }
}
console.log(A);
console.log(B);