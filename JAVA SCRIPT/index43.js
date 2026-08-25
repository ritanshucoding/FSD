 async function greet(){
    //  Through the random error.
    return "Hello, World!";
 }
 greet()
 .then((result)=>{
     console.log(result);
    console.log("Promice was resolved");
    console.log("Promise was    ;",result);
 })
 .catch ((error)=>{
        console.log("Promise was rejected");
        console.log("Promise was rejected",error);
    })