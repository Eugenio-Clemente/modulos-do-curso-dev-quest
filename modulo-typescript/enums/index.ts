// enum Colors {
//     Red,
//     Blue,
//     Green
// }

// podemos percorrer o enum usando o for 
//  for(const key in Colors){
//      console.log(key);
//  }

//  function showColor(color){
//  console.log(color);
//  }

//  showColor(Colors.Green) //Exibe "Vermelho" 

//  showColor(Colors.Green) //Exibe "Vermelho" 

// enum UserResponse{
//      No = 0,
//      Yes = 1,
// }

//  function respondedEmail(recipient: string, userResponse: UserResponse): void{
//      //... salvar no banco se o usário respondeu ou não 
// }

// respondedEmail('Clemente', UserResponse.Yes)


// enum TradeType{
// ACAO = 9281,
// TESOURO_DIRETO = 3221,
// TESOURO_SELIC = 6554,
// }

// saveTrade(TradeType.TESOURO_DIRETO)

// enum StatusCodes{
//     OK = 200,
//     BadRequest = 400,
// }

// StatusCodes.OK

// enum Gender{
//     M = 'Masculino',
//     F = 'Feminino'
// }

enum StatusCodes {
    OK = 200,
    BadRequest = 400,
}

const ok = StatusCodes.OK;
const indiceOk = StatusCodes["OK"];
const stringBadRequest = StatusCodes[400];




