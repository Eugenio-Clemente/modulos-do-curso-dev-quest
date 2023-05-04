/*
switch(parametro){
 case valor1:
    <bloco de declaração>
 case valor2:
    <bloco de declaração>       
}
*/

// let nomeFilme = "batman vs superman";

// switch (nomeFilme) {
//   case "Milagres do amanhã":
//     console.log(nomeFilme);
//     break;

//   case "batman vs superman":
//     console.log("batman vs superman");
//     break;

//   case "vingadores":
//     console.log("vingadores");
//     break;

//   default:
//     console.log("Não é o filme");
//     break;
// }

let avaliacao = 7;

switch (avaliacao) {
  case 1:
  case 2:
    console.log("Filme ruim");
    break;

  case 3:
  case 4:
    console.log("Filme mediano");
    break;

  case 5:
    console.log("Filme execelente");
    break;

    default: 
    console.log("Nota invalida!");
    break;
}

