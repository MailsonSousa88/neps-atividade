//A variável input contém a entrada descrita no exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

//seu código vai aqui 
let N = parseInt(input);

for (let i = 1; i <= 10; i++) {
    process.stdout.write(`${N} * ${i} = ${N * i}`);
    if (i !== 10) {
        process.stdout.write('\n'); 
    }
}