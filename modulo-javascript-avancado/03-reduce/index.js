let ordens = [
{ cliente: "Roberto", tipo: "compra", quntidade: 56, ativo:"NFL34"},
{ cliente: "Ricardo", tipo: "compra", quntidade: 76, ativo:"AAPF34"},
{ cliente: "Raphael", tipo: "venda", quntidade: 21, ativo:"GOGL34"}
];

// let quntidadeDeOrdens = 0

// for (let i = 0; i < ordens.length; i++) {
//     quntidadeDeOrdens += ordens[i].quntidade
// }

// console.log(quntidadeDeOrdens);

let quntidadeDeOrdens = ordens.reduce((somaOrdens, ordem) => { console.log(somaOrdens, ordem);   return somaOrdens + ordem.quntidade}, 0);

console.log(quntidadeDeOrdens);
