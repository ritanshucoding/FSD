//  Write an arrow that return the square of a anumber of an a number 'n'.

const square = (n) => n * n;
console.log(square(4));

//  Write a function that print "Hello world" 5 times at interval of 2s each.
 let id = setInterval(() => {
    console.log("Hello world");
}, 2000);
setTimeout(() => {
    clearInterval(id);
}
, 10000);