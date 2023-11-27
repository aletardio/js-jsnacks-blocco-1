// CREAZIONE DI DUE ARRAY CON NUMERO DI ELEMENTI DIVERSI
let first_arr = [22, 31, 8, 90, 51, 6];
let second_arr = [11, 63, 3, 1];

console.log(first_arr, second_arr);

// AGGIUNGERE NUOVI ELEMENTI ALL'ARRAY CON MENO ELEMENTI FINO A QUANDO NE AVRÀ TANTI QUANTI L'ALTRO
if(first_arr.length < second_arr.length){
    // AGGIUNTO ELEMENTI AL SECONDO ARRAY
    for (let i=first_arr.length - second_arr.length; i<first_arr.length;i++){
        let num = Math.floor(Math.random() * 100 + 1);
        second_arr.push(num);
    }
}
else {
    // AGGIUNTO ELEMENTI AL PRIMO ARRAY
}

console.log(first_arr);
console.log(second_arr);



