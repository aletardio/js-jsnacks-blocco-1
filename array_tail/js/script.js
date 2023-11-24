// CREAZIONE DI UN ARRAY
let array = [];

// CHIEDERE ALL'UTENTE QUANTI ELEMENTI DOVRÀ CONTENERE L'ARRAY
let numbers = parseInt(prompt('Quanti elementi deve contenere l/array'));

// GENERARE TANTI NUMERI CASUALI (INTERVALLO DA 1 A 100) PER QUANTI SONO GLI ELEMENTI DA INSERIRE
for(let i = 1; i <= numbers; i++) {
    array.push(parseInt(Math.random()*numbers));
}

// STAMPA DELL'ARRAY COMPLETO
console.log(array);

// STAMPARE GLI ULTIMI 5 ELEMENTI DELL'ARRAY
console.log(array.slice(-5).reverse());

