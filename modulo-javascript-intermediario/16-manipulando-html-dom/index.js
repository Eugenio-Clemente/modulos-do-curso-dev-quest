function adicionarComentario() {
  let inputComentario = document.getElementsByName("novo-comentario");

  let textoDigitado = inputComentario[0].value;
  console.log(textoDigitado);

  let novoscomentarios = document.getElementById("novos-comentarios");

  novoscomentarios.innerHTML += `<p> Novo Comentário: ${textoDigitado} </p>`;
}
