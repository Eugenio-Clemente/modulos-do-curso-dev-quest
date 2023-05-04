type Customer = {
    firstName: string;
    lastName?: string;
    age: number;
 }
 
 const newCustomer: Customer = {
    firstName: 'João',
    age: 34
 }
 
 console.log(newCustomer)
 
 function printName(first: string, last?: string) {
    console.log(`O primeiro nome é : ${first}`)
    console.log(`O ultimo nome é : ${last}"`)
 }
 
 // agora eu posso chamar a função passando só um argumento pq o outro é opcional
 printName("Ricardo");
 
 // mas se eu quiser passar os dois eu posso também
 printName("Ricardo", "Silva");