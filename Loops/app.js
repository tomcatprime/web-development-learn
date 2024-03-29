// for loop

for (let i = 1; i <= 10; i++ ) {
    console.log(i);
}


for(let i = 0; i <= 20; i+=2){
    console.log(i)
}

for(let i = 100; i >= 0; i-=10){
    console.log(i);
}


// looping over Arrays

const animals = [ 'lions', 'tigers', 'bears'];
for (let i = 0; i < animals.length; i++){
    console.log(i, animals[i]);
}2

// looping over arrays returning string Capitalized
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!
for(let i = 0; i < people.length; i++){
    console.log(people[i].toUpperCase());
}

//nested for loop

for(let i = 1; i <= 10; i++){
    console.log(`i is ${i}`)
    for(let j = 1; j < 4; j++){
        console.log(`  j is ${j}`)
    }
}

const seatingChart = [
    ['Kristen', 'Szejk']
    ['John', 'Draco']
    ['Erika', 'Jack']
]

fot (i = 0; i < seatingChart.length; i++){
    const row = seatingChart[i];
    console.log(`Row #${ i + 1}`);
    for(let j = 0; j < row.length; j++){
        console.log(j);
    }
}

//while loops

let num = 0;
while (num < 10){
    console.log(num);
    num++
}



const SECRET = "KeySecret";

let guess = prompt("Enter the secret code...")
while(guess !== SECRET){
    guess = prompt("Enter the secret code...")
}
console.log("CONGRATS you got the secret")


///break keyword
let input = prompt("Hey, say something!")
while(true){
    input = prompt(input);
    if(input.toLowerCase() === "stop"){
        break;
    }
        console.log("OK YOU WIN!")
}


// for..Of loop

const reddits = ['cringe', 'books', 'chickens', ' funny']

for (let sub of reddits){
    console.log(sub)
}


//Iterating over Objects
const testScores = {
    keenan: 80,
    karol: 100,
    kim: 89,
    marlon: 89,
    nadia: 29,
    diedra: 81
}
for (let person in testScores){
    console.log(`#{person} scored ${testScores[person]}`);
}
//iterating over object with method Object.

const scoreTest = {
    keenan: 80,
    karol: 100,
    kim: 89,
    marlon: 89,
    nadia: 29,
    diedra: 81
}
let total = 0;
let scores = Object.values(scoreTest);
for(let score of scores){
    total += scored;
}
console.log(total/scores.lenght)



// Functions

