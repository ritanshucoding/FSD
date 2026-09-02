// Timers

setTimeout(function(){
    console.log("Hello")
},3000); // Set a timeout to log "Hello" after 3000 milliseconds (3 seconds)

setInterval(function(){
    console.log("Hello")
},3000); // Set an interval to log "Hello" every 3000 milliseconds (3 seconds)

//  Nested Callbacks (Callback Hell)
setTimeout(function(){
    console.log("Hello")
    setTimeout(function(){
        console.log("Hello")
        setTimeout(function(){
            console.log("Hello")
            setTimeout(function(){
                console.log("Hello")
                setTimeout(function(){
                    console.log("Hello")
                },1000)
            },2000)
        },3000)
    },4000)
},5000) // Set a series of nested timeouts to log "Hello" every 3 seconds, creating a callback hell scenario