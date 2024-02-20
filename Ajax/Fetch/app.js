/*
fetch("https://swapi.dev/api/people/1/")
.then(res => {
    console.log("Resolved", res);
    return res.json();
})
.then((data) => {
    console.log(data);
})
.catch(e => {
    console.log("Time out", e);
})


fetch("https://swapi.dev/api/people/2/")
.then(res => {
    console.log("Resolved", res);
    return res.json();
})
.then((data) => {
    console.log(data);
})
.catch(e => {
    console.log("Time out", e);
})


*/
console.log("Async function")

//async function

const loadStarWarsPeople = async () => {
    try {
    console.log("Async functions");
    const res = await fetch("https://swapi.dev/api/people/1/");
    const data = await res.json();
    console.log(data);

    console.log("Async functions");
    const res1 = await fetch("https://swapi.dev/api/peodasdasple/1/");
    const data1 = await res1.json();
    console.log(data1);
    } catch (e) {
        console.log("Error!!", e)
    }
}

loadStarWarsPeople();