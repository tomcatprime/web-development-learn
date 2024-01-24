let maximum = parseInt(prompt("Enter your maximum number"));
while (!maximum) {
  maximum = parseInt(prompt("Enter your maximum number"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = prompt("Enter your first guess");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
  if (guess === "q") break;
  guess = parseInt(guess);
  if (guess > targetNum) {
    guess = parseInt(prompt("Too high, Enter a new guess:"));
    attempts++;
  } else if (guess < targetNum) {
    guess = parseInt(prompt("Too low, Enter a new guess:"));
    attempts++;
  } else {
    guess = prompt("Invalid guess. PLease enter a number or 'q' to quit");
  }
}
if (guess === "q") {
  console.log("Ok, YOU QUIT");
} else {
  console.log(`you got it! It took you ${attempts} guesses`);
}
