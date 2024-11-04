/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Non è necessario provvedere alla validazione delle email */

//prompt per chiedere email
//creare array per le email
console.clear();


const lista = [
"pippo@gmail.com",
"giovanni@gmail.com",
"andrea@gmail.com",
];

let email = prompt("inserisci la tua email");
if (lista.includes(email) ){
console.log(email + " " + "l email è nella lista");

} else  {
    console.log("non sei in lista ");
} 