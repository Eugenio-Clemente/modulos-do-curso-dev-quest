// const calculadoraAnoDeNascimento = function (idade, mesDeNascimento, imprimir) {
//     const mesAtual = 2
//     let anoDeNascimento = 2021 - idade
//     if (mesDeNascimento > mesAtual) anoDeNascimento --
//     imprimir(anoDeNascimento)
// }

// let imprimirAnoDeNascimento = anoDeNascimento => {
//     console.log('seu ano de nascimento é: ' + anoDeNascimento);
// }

// calculadoraAnoDeNascimento(33, 3, imprimirAnoDeNascimento)

function multiplicar(multiplicar) {
  return function (numero) {
    return numero * multiplicar;
  };
}

let dobrar = multiplicar(2)
let triplicar = multiplicar(3)
let quadruplicar = multiplicar(4)

console.log(dobrar(3));
console.log(triplicar(3));
console.log(quadruplicar(3));


