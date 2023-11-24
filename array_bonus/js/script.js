// CREAZIONE DI DUE ARRAY CON NUMERO DI ELEMENTI DIVERSI
let first_arr = [22, 31, 8, 90, 51, 6];
let second_arr = [11, 63, 3, 1];

console.log(first_arr, second_arr);

// AGGIUNGERE NUOVI ELEMENTI ALL'ARRAY CON MENO ELEMENTI FINO A QUANDO NE AVRÀ TANTI QUANTI L'ALTRO
for(let i = 1; i<=2; i++) {
    second_arr.push(parseInt(Math.random()*100)+ 2);
    
    if(second_arr < first_arr){

    }
}
console.log(first_arr, second_arr)



