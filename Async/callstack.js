// JS is single Threaded

const multiply = (x, y) => x * y;
const square = (x) => (x, x);
const isRightTriangle = (a, b, c) => {
    return square(a) + square(b) === square(c)
}

isRightTriangle(3, 4, 5);


//setTimetout -browser itself does the work


console.log("Sending request to server")
setTimeout(() => {
    console.log(" Here is your data from the server...")
}, 3000)
console.log("I am at the end of the file")