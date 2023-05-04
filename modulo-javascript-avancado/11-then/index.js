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
  
  let passarCafe = () => console.log("Passando café");

  ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado ).then(passarCafe)
  console.log("Fazendo café");