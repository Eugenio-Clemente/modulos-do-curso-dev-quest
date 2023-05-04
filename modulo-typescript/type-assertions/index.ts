const button = document.getElementById('button') as HTMLButtonElement; // as é expecifica o tipo do elemento no caso o button 

button.addEventListener('click', event => {
   const mouseEvent = event as MouseEvent; // especificando que vai ser do tipo MouseEvent 
});