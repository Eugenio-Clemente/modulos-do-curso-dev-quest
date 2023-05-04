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

let chaleiraEstaNoFogao = true;
let fogaoEstaLigado = true;

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
.then(() => {
  return passarOCafe();
})
.then(() => {
    return tomarCafe();
  })
  .then(() => {
    return lavarXicar();
  })
  .then(() => {
    console.log("Finalizado o café, bora trabalhar");
  })

  