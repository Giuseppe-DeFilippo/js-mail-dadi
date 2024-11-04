/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
 */
//Math.floor(Math.random() * 7);
//variabile per il computer e per l utente
console.clear();

let computer = Math.floor(Math.random() * 7);
console.log(computer);
let player = Math.floor(Math.random() * 7);
console.log(player);

if( computer > player ){
    console.log(computer+ " " + "ha vinto il computer");

} else if(computer < player){
    console.log(player + " " + "ha vinto il player");
}
else {
    console.log("il risultato è pari");
}