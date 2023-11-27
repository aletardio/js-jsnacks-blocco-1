// CREAZIONE DI UN ARRAY CON LA FRUTTA DEL FRIGORIFERO
let fruits = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 
'mandarino', 'cocomero', 'limone', 'fragola'];

// DEFINIZIONE DELLA VARIABILE PESCA
let peach = 'pesca';

// AGGIUNGERE LA PESCA ALL'INTERNO DELL'ARRAY FRUITS
fruits.push(peach);

// DICHIARAZIONE DI UNA VARIABILE PER LA VALIDITÀ
let isValid = false;

// REALIZZAZIONE DI UN CICLO FRO PER VERIFICARE SE ALL'INTERNO DELL'ARRAY È PRESENTE IL COCOMERO
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === 'cocomero') {
        isValid = true;
    }
}

let validation = document.getElementById('fruits');

//CICLO IF PER VERIFICARE SE IL COCOMERO È ALL'INTERNO DELL'ARRAY FRUITS
if(isValid == true) {
    validation.innerHTML = 'Trovato! Devo solo preparare il cocktail.';
    console.log('Trovato! Devo solo preparare il cocktail.');
}
else {
    validation.innerHTML = 'Oh no, devo uscire a comprare il cocomero!';
    console.log('Oh no, devo uscire a comprare il cocomero!');
}