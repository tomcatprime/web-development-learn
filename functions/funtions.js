// define fuctnions

// function funcName(){
    // do something
// }

function singSong(){
    console.log("Test");
}

// function with arguments

function gret(firstName){
    console.log(`first name is: ${firstName}`)
}
gret('Elvis')


function repeat(str, numTimes){
    let result = '';
    for (let i = 0; i < numTimes; i++){
        result += str;
    }
    console.log(result)
}



////
// define isSnakeEyes below:
function isSnakeEyes(number1, number2){
    if(number1 === 1 && number2 === 1){
        console.log('Snake Eyes!');
    }else {
        console.log('Not Snake Eyes!');
    }
    
}

///return function

function add(x, y){
    let sum = x + y;
    return sum;  //return stop executing code 
}


///Please write a function called lastElement which accepts a single array argument.  The function should return the last element of the array (without removing the element).  If the array is empty, the function should return null.

function lastElement(arr){
    if(arr.length === 0){
        return null;
    } else {
        return arr[arr.length - 1];
    }
}

//

//Define a function called capitalize that accepts a string argument and returns a new string with the first letter capitalized (but the rest of the string unchanged). 
function capitalize(text){
    let firstLetter = text.charAt(0).toUpperCase();
    let restOfText = text.slice(1);
    let result = firstLetter + restOfText;
    return result
    
}

//Write a function called sumArray which accepts a single argument: an array of numbers.  It should return the sum of all the numbers in the array.

function sumArray(number){
    let sum = 0;
    for(let i = 0; i < number.length; i++){
        sum += number[i];
    }
    return sum;
}

//returning functions
function makeBetweenFunc(min, max) {
    return function(num){
        return num >= min && num <= max;
    }
}