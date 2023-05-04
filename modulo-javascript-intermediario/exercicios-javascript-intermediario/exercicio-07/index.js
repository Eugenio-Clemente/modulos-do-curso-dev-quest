const formulario = document.querySelector(".formulario");

const input = document.querySelectorAll(".input-texto");

formulario.addEventListener("change", verificacao);

function verificacao() {
  input.forEach((campoInput) => {
    if (campoInput.value === "") {
      campoInput.classList.add("preenchido");
    }else if (campoInput.value != "") {
      campoInput.classList.add("input-texto");
      campoInput.classList.remove("preenchido");
    }
  });
}
