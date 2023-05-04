const botao = document.querySelector(".botao");

botao.addEventListener("click", verificacao);

function verificacao() {
  botaoAzul = botao.classList.contains("azul");
  if (botaoAzul) {
    botao.classList.remove("azul");
  } else {
    botao.classList.add("azul");
    alert("Esse quadrado TEM a classe azul!");
  }
}
