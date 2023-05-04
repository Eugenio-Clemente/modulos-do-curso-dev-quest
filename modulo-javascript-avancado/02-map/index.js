let pessoas = [
  { nome: "Ricardo", idade: 33 },
  { nome: "Roberto", idade: 33 },
  { nome: "Raphael", idade: 27 },
];

// let nomeDasPessoas = [];

// for (let i = 0; i < pessoas.length; i++) {
//   if (pessoas[i].idade === 33) {
//     nomeDasPessoas.push(pessoas[i].nome);
//   }
// }

// console.log(nomeDasPessoas);

let nomeDasPessoas = pessoas.map((pessoa) => pessoa.nome + " têm " + pessoa.idade + " anos de idade ");

console.log(nomeDasPessoas);
