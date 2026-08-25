//  RETURN KEYWORDS

function sum(a, b){
    return (a+b);
}
console.log(sum(5,10));

//  Practice Question--CREAT A FUNCTION THAT RETURN THE SUM OF NUMBER FROM 1 TO N.
let sum = 54 ;
// Global Scope
function getSum(n){
    // Function Scope
    let sum = 0;
    for (let i = 1; i <= n; i++){
        sum = sum + i;
    }
    return sum; 
}
// Block Scope-Variable decleard inside the block cannot be accessed outside the block.

// Lexical Scope- Variable difined outside a function can be accessed inside another function defined after the variable declaration And the oppostie is not true.