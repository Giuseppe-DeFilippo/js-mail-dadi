/*Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente*/
//prompt numeri utente
//let numero = prompt("inserisci un numero")
//fare un ciclo for dove il numero inserito dall utente va dall 1 al nunmero scelto al cubo
console.clear(); 

let utente = prompt("inserisci numero");
for (let i=0; i<=utente; i++ ) {
    console.log(i**3)
}
