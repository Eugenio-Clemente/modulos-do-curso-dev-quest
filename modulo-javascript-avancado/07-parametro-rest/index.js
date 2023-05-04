// function(a, b, ....args) {
// ...
// }

function incentivarQuester(mensagem, teste, ...nomeQuesters) {
  console.log(teste);
  nomeQuesters.map((nomeQuester) => console.log(`${mensagem} ${nomeQuester}`));
}

incentivarQuester(
  "Parabéns, por ter chegado ao modulo javascript avançado",
  "Clemente",
  "Eugênio"
);
