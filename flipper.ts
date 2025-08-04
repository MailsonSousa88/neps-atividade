//solução da questão "Flipper"
let input = "1 0"
let valores = input.split(" ")
let P = parseInt(valores[0]!)
let R = parseInt(valores[1]!)

if (P == 0) {
    console.log("C")
} else if (P == 1 && R == 0) {
    console.log("B")
} else if (P == 1 && R == 1) {
    console.log("A")
}