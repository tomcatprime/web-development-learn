//empty array
let students = [];

//mix arrays can contain stings, integers, booleans

//an array of string
let arrayOfString = ['kar', 'strings', 'indexos']

//push - add to array to the end
let movieLine = ['tom', 'nancy']
movieLine.push('oliver')
console.log(movieLine)
movieLine.push('Eva')
console.log(movieLine)
movieLine.push('hernandez', 'draco')
console.log(movieLine)

//pop - remove from array from the end
movieLine.pop() //by default removing last object
console.log(`the new movie line array is ${movieLine}.`)

// shift - remove from the start

movieLine.shift()
console.log(`the new movie line array is ${movieLine}.`)


//unshift add to start

movieLine.unshift()
console.log(`the new movie line array is ${movieLine}.`)

// array concat()
let cats = ['tom', 'nancy', 'animal']
let dogs = ['opel', 'audo', 'bmw']
let concating = dogs.concat(cats)
console.log(concating)

// array.include()


// slice  -getting a copy of an array

let colors = ['red', 'orange', 'blue', 'yellow', 'black', 'grey', 'indigo', 'violet']
console.log(colors)
let newcolors = colors.slice(4) //just start point
console.log(newcolors)
let newColors2 = colors.slice(1,5) //start and end point index