//  Loops with Arrays.
let fruit = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];
for(let i = 0; i<fruit.length; i++){
    console.log(i , fruit[i]);
}


// For of loops.
let fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];
for(i of fruits){
    console.log(i);
}


// NESTED FOR OF LOOPS.
let heroes = [["superman" , "Batman" , "wonder women"],["Spiderman","ironman","thor"]];
for(list of heroes){
    for(hero of list){
        console.log(hero);
    }
}