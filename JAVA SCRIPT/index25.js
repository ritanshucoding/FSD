//  SPREAD--
//  Expand an iteable into multiple values.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArr = [...arr];
console.log(newArr);

let char = [..."Hello"];
console.log(char);

let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];
let all = [...odd, ...even];
console.log(all);

function sum(...args){
    for(let i =0; i<args.length; i++){
        console.log(args[i]);
    }
}
function min(){
    console.log(arguments);
    console.log(arguments.length)
    arguments.push(1);
}