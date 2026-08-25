let url = "https://catfact.ninja/fact";
fetch(url)
.then ((response) => {
    return response.json();
})
.then((data) => {
    console.log("data1=", data.fact);
    return fetch(url);
}
)
.then((response) => {
    return response.json();
}
)
.then((data2) => {
    console.log("data2=", data2.fact);
    console.log("data2=", data2.length);
})
.catch((err) =>{
    console.log("ERROR -", err);
});