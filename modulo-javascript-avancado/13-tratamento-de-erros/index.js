let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
  return new Promise((resolve, reject) => {
     
    if (typeof chaleiraEstaNoFogao != 'boolean') throw "Somente o tipo booleano é aceito"

    if (chaleiraEstaNoFogao && fogaoEstaLigado) {
      console.log("Começando o processo de ferver água");
      resolve();
    } else {
      const mensagemDeErro =
        "É necessario ligar o fogão e colocar a chaleira com agua se não o teu cafézinho não vai ficar pronto nunca";
      reject(mensagemDeErro);
    }
  });
};

let passarOCafe = (aguaFervida) => {
  return new Promise((resolve) => {
    console.log("Passo 2 finalizado: café foi passado");
    resolve(true);
  });
};

let tomarCafe = (cafePassado) => {
  return new Promise((resolve) => {
    console.log("Passo 3 finalizado: café foi passado");
    resolve(true);
  });
};

let lavarXicar = (cafeTomando) => {
  return new Promise((resolve) => {
    console.log("Passo 4 finalizado: café foi passado");
    resolve(true);
  });
};

let chaleiraEstaNoFogao = 'teste';
let fogaoEstaLigado = false;

async function iniciarProcessoDeFazerCafe() {

  try { // tente executar esse bloco de código 
    const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado);
    const cafePassado = await passarOCafe(aguaFervida);
    const cafeTomando = await tomarCafe(cafePassado);
    const xicaraLavada = await lavarXicar(cafeTomando);

    throw "Mensagem de erro ";

  } catch (err) { // seria pegar os erros que o try nós manda
    console.log(err);
  } finally {
    console.log("Finalizado o café, bora trabalhar");
  }
}

iniciarProcessoDeFazerCafe();