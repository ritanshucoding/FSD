//  PROMISES--
//  Then()& Catch()--

let request = saveToDBPromise("apna collage");
request
    .then(() => {
        console.log("Promise resolved");
    })
    .catch(() => {
        console.log("Promise rejected"); 
    }); 