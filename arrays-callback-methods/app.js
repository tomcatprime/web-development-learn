//forEach - accepts a callback function
//calls the function once per element in the arrays

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

numbers.forEach(function (el){
    if(el % 2 == 0){ //even numbers
    console.log(el);
    }
})


const movies = [
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

movies.forEach(function (movie) {
    console.log(`${movie.title} - ${movie.score}/100`)
})


//MAP - Creates a new array with the results of calling a callback on every element in the array.

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const doubles = numbers1.map(function (num){
    return num * 2;
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

const titles = movies1.map(function(movie){
    return movie.title;
})


//default params
function rollDie(numSides) {
    if (numSides === undefined) {
        numSides = 6
    }
    return Math.floor(Math.random() * numSides) + 1
}