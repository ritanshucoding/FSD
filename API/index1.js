// JSON.parse()--
//  The JSON.parse() method parses a string as JSON, optionally transforming the value produced by parsing.
let jsonRes = 
'{"fact":"Kittens who are taken along on short, trouble-free car trips to town tend to make good passengers when they get older. They get used to the sounds and motions of traveling and make less connection between the car and the visits to the vet.","length":239}';
let validRes = JSON.parse(jsonRes);
console.log(validRes);
console.log(validRes.fact);


// JSON.stringify()--
//  The JSON.stringify() method converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified, or including only the specified properties if a replacer array is specified.
let student = {
    name: "john",
    age: 20,
};

// Ajax--
//  Ajax is a set of web development techniques using many web technologies on the client side to create asynchronous web applications. The term is also used to refer to the XMLHttpRequest object used in the process.
