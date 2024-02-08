setTimeout(() => {
    console.log("Hello")
}, 3000)

const id = setInterval(() => {
    console.log(Math.random())
}, 3000);

//filter - creates a new array wth all elements tha tpass the rest implemeneted by the provided function


const numbers = [1 , 2 , 3, 4, 5, 6, 7, 8, 9]
numbers.filter(n =>{
    return n < 10 
})

const movies1 = [
    {
        title: 'Amadaues',
        score: 99
    },
    {
        title: 'Stand by Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]
const goodMovies = movies.filter(movie => {
    return movie.score > 80
})

const badMovies = movies.filter(movie => movie.score < 70)
movies.filter(m => movie.score > 80).map(movie => movie.title);

/*
Write a function called validUserNames that accepts an array of usernames (strings).
It should return a new array, containing only the usernames that are less than 10 characters.
*/

function validUserNames(usernames) {
    return usernames.filter(name => name.length < 10);
}

//some - similar to every but return true if  ANY of the array elements pass the test fuction


const exams = [80, 70, 50, 45, 30, 90, 95, 94, 92]

exams.every(score => score >= 75) //result false

//some

exams.some(score => score >= 75) //result true


