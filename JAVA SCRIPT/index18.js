//  HIGH ORDER FUNCTION .
//  TAKE ONE OR A MULTIPLE FUNCTION AS A AGRGUMENT .

function multipleGreet(func, count){ // HIGHER ORDER FUNCTION
    for (let i = 1; i <= count; i++){
        func();
    }
}
let greet =  function(){
    console.log("Hello");
}
multipleGreet(greet, 5);


// HIGHER ORDER FUNCTION
// Return a function.
function oddorEvenFactory(request){
    if(request == "odd"){
        let odd = function(n){
            console.log(!(n%2 ==0));
        }
        return odd;
    }else if (request == "even"){
        let even = function(n){
            console.log(n%2 ==0);
        }
        return even;
}else{
    console.log("Invalid Request");
}
}
let request = "odd";