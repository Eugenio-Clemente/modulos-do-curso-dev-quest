/* 
Pendente que é quando a Promises foi cria mais ainda não foi executada 
Realizada que é quando teve sucesso na execução RESOLVE 
Recusada que é quando houve falha na execução da Promises REJECT 
Estabelecida que é quando Realizada ou Recusada 
*/

// classe no javacript se escreve com a primeira letra maiúscula
// new Promise((resolve, reject) => {
// });


let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
  return new Promise((resolve, reject) => {
    if (chaleiraEstaNoFogao && fogaoEstaLigado) {
      console.log("Começando o processo de ferver água");
      resolve();
    } else {
      console.log(
        "É necessario ligar o fogão e colocar a chaleira no fogão para fever a água "
      );
      reject();
    }
  });
};

let chaleiraEstaNoFogao = true;
let fogaoEstaLigado = true;

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado );
console.log("Fazendo café");
