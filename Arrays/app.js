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
