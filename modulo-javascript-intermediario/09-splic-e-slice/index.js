let frutas = ["Banana", "Maça", "Laranja", "Uva"];

// let frutasExtraidas = frutas.slice(1,3) // Começa na posição 1 é terminar na posição 3, ele e um caso excludente então ele vai do 1 ao 2, as outras posições não vão ser mostradas

// console.log(frutasExtraidas);

// console.log(frutas);

// let frutasExtraidas = frutas.splice(1, 2);

// console.log(frutasExtraidas);

//  console.log(frutas); // array original 


 let removeEAdicionaFrutas = frutas.splice(1, 2, 'Goiaba', 'Abacaxi', 'Pêra') // Adicionado e removendo elementos no array 
 
 console.log(frutas);