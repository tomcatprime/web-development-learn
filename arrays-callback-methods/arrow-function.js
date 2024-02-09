//arrow function

const add = (x,y) => {
    return x + y;
}

const square = (x) => {
    return x * x;
}

//arrow function without argument
const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1
}

//pass name and return greeting

const greet = (name) => {
    return `Hey ${name}!`
}

//implicit return - used to shorten code - used for single expression
//instead of {} we use () 
const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)

const add = (a,b) => a + b  //example of one-line


const newMovies = movies.map(movie => (
    `${movie.title} - ${movie.score}/100`
))

/*
Define a function called allEvens that accepts a single array of numbers.
  If the array contains all even numbers, return true.  Otherwise, return false.
*/
function allEvens(arr) {
    return arr.every(function (num) {
      return num % 2 === 0;
    });
  }


// Concise full arrow function syntax approach:
const allEvens = arr => arr.every(num => num % 2 === 0);

//reduce - executes a reducer fuctnion on each element of the array resulting in a single value

const prices = [9.99, 1.50, 19.99, 49.99, 30.50]

const total = prices.reduce((total, price) => {
    return total + price
})

const minPrice = prices.reduce((min, price) => {
    if(price < min){
        return price;
    }
    return min;
})

const evens = [2, 4, 6, ,8, 10]
evens.reduce((sum, num) => sum + number, 100) //second argument - 100, starting at 100


const person = {
    firstName: 'virgo',
    lastName: 'mortensen',
    fullName function(){
        return `${this.firstName} ${this.lastName}`
    }
}


//default params