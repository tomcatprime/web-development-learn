//forEach - accepts a callback function
//calls the function once per element in the arrays

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

numbers.forEach(function (el){
    if(el % 2 == 0){
    console.log(el);
    }
})


const movies = [
    {
        title: 'Amdaues',
        score: 99
    }
    {
        title: 'Stand by Me',
        score: 85
    }
    {
        title: 'Parasite',
        score: 95
    }
    {
        title: 'Alien',
        score: 90
    }
]

movies.forEach(funtion (movie){
    console.log(movie);
})