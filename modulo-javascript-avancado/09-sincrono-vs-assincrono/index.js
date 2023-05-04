function colocarAguaPraFerver() {
    console.log("Colocar água pra ferver");

    setTimeout(() => {
        console.log("Água ferveu");
        passarOCafe()
    }, 5000);
}

function prepararPraPassarOCafe() {
    console.log("Pegar o pó de café");
    console.log("Pegar o filtro de café");
    console.log("Colocar o café no filtro");
    console.log("Colocar o filtro em cima da xicara");
}

function passarOCafe() {
    console.log("Passando o café");
}

colocarAguaPraFerver()
prepararPraPassarOCafe() 
// passarOCafe()

