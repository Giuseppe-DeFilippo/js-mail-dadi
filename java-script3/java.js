/*Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array*/

console.clear(); 

const vuoto = []


for (let i = 0; i<6; i++) {
    let numero = prompt("inserisci un numero");
    if(numero % 2 !== 0 ){
        vuoto.push(numero); 
    }
}
console.log(vuoto); 
