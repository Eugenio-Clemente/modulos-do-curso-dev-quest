// let jogo2 = {
//   nome: "Falloyt",
// };

// let videogame = {
//   nome: "Xbox",
//   valor: 3000,
//   jogos: [
//     {
//       nome: "Final fantasy", // Objeto
//     },
//     jogo2,
//   ],
// };

// let jogo3 = {
//   nome: "Fifa",
// };

// videogame.jogos.push(jogo3);

// console.log(videogame);

let cliente = {
    nome: 'Clemente',
    ultimoPedido: {
      produto: 'Xbox',
      valor: 3000,
      jogos: [
          {nome: 'Fifa'}
      ]  
    }
}

console.log(cliente.ultimoPedido.jogos[0]);