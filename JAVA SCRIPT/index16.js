function printInfo(name,age){
    console.log(`${name} is ${age} years old`);
}
printInfo("Ritanshu", 18);

// FUNCTION TO SUM OF TWO NUMBERS.
function sum (a,b){
    console.log(a+b);
}
sum(5,10);
sum(20,30);

// Practice Question-- Creat a functionthat give us the average of 3 numbers.
function average(a,b,c){
    let avg = (a+b+c)/3;
    console.log(avg);
}
average(10,20,30);

//  Practice Question-- Creat a function that print the multiplication table of a number.
function multiplicationtbale(n){
    for(let i = 1; i<=10; i++){
        console.log(i*n);
    }

}
multiplicationtbale(5);
