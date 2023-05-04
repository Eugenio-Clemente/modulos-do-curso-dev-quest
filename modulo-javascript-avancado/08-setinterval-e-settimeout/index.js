// setTimeout(() => {
//     alert("Olá, Mundo!")
// }, 3000);

// setInterval(() => {
//   alert("Executando a cada 2 seguindos");
// }, 2000);

//  setTimeout(() => {
//    console.log("Console dentro do setTimeout");
//  }, 4000);

// console.log("Console fora do setTimeout");

const idDoIntervalo = setInterval(() => {
                        alert("Executando a cada 2 segundos");
                        }, 2000);

console.log(idDoIntervalo);
clearInterval(idDoIntervalo);
clearTimeout()
