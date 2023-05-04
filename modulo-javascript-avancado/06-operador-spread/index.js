const pessoa = ["Eugênio", "Clemente", "Souza"];

// console.log(...pessoa);

/*CONCATENAR DOIS ARRAYS*/

// let pessoa1 = ["Eugênio", "Clemente", "Souza"];
// let pessoa2 = ["Pedro", "Mario", "Paulo"];

// // pessoa1 = pessoa1.concat(pessoa2)

// pessoa1 = [...pessoa1, ...pessoa2]

// console.log(pessoa1);

// CLONAR OBJETO

 let pessoa1 = { nome: "Eugênio", idade:24};
 let pessoa2 = { nome: "Clemente", idade:24};
console.log(pessoa1);

 const objetoColonado = {...pessoa1}
 console.log(objetoColonado);