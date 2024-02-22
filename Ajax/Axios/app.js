/*
axios.get("https://swapi.dev/api/people/1/")
.then(res => {
    console.log("Response: ", res);
})
.catch(e => {
    console.loh("Error:", e);
})
*/

//async
/*
const getStarWarsPerson = async (id) => {
    try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    console.log(res.data);
    } catch (e) {
        console.log("Error", e)
    }
}

getStarWarsPerson(1);
*/
const jokes = document.querySelector('#jokes');
const button = document.querySelector('button')


const addNewJoke = async () => {
    const jokeText = await getDadJoke()
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
}



const getDadJoke = async () => {
    try{
    const config = { headers: {Accept: 'application/json',} };
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    return res.data.joke;
    } catch (e) {
        return "No jokes available"
    }
}

button.addEventListener('click', addNewJoke)
