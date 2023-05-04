const botao = document.getElementById("botao");
console.log(botao);

const primeiroQuadro = document.querySelector(".primeiro-quadro-azul");
console.log(primeiroQuadro);

 botao.addEventListener("click", trocarCor);

 function trocarCor() {
   primeiroQuadro.classList.add("primeiro-quadro-amarelo");
   primeiroQuadro.classList.remove("primeiro-quadro-azul");
 }
