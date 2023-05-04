"use strict";
// console.log(this);
//  console.log(window);
// console.log(window === this);

// this.name = "Clemente"

// function saudar() {
//     console.log('This contexto da função', this);
//     console.log('Olá',this.name);
// }

// saudar()

// let usuario = {
//     nome: 'Clemente',
//     saudar: function (){
//     console.log('This no contexto de metodo', this);

//     console.log('This no contexto de metodo', this.nome);
//     }
// }

// usuario.saudar()

// let comida = {
//     nome: 'feijão',
//     temperatura: 0
// }

// comida.cozinhar = function(temperaturaDeCozimento) {
//     console.log('This contexto do objeto comida', this);
//     this.temperatura = temperaturaDeCozimento
// }

// comida.cozinhar(100);

// console.log(comida);

let comida = {
  nome: "feijão",
  temperatura: 0,
   cozinhar: function (temperaturaDeCozimento) {
    console.log("This contexto do objeto comida", this);
    this.temperatura = temperaturaDeCozimento;
  }
};

console.log(comida);

comida.cozinhar(100);

console.log(comida);