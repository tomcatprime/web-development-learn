console.log("Hello from JS file")
let rand = Math.random()
if (rand < 0.5){
    console.log("Your number  is lest than 0.5!!!")
}
console.log("After Conditional")



//else if
let rating = parseInt(prompt("enter a number"));
if (rating === 3){
    console.log("YOu are good")
}
else if (rating === 2){
    console.log("This is else if statement", "color: green");
    console.warn("This is else if statement");
}
else {
    console.log("You typed unknown number!!")
}

//ask user for password

const password = prompt("please enter a new password")

//password must be 6+ characters
if(password.length >= 6) {
    //password cannot include space
    if (password.indexOf(' ') === -1 ) {
        console.log("Valid password")
    } else {
        console.log("Password cannot contain sapces!")
    }
    console.log("LONG ENOUGH PASSWORD!")
}else{
    console.log("PASSWORD TOO SHORT! Must be 6+ characters")
}


const password1 = prompt("Eneter your password")
if(password1.length >= 6 && password.indeOf(' ') === -1){
    console.log("Valid password")
} else {
    console.log("Incorrect format for password")
}

//operator and &&
const mystery = 'Pasdfgh7'; 
if(mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1){
    console.log("YOU GOT IT!!!");
}

//operator OR ||
const age = 90;
if(age >= 0 && age < 5 || age >= 65){
    console.log("free")
} else if (age >= 5 && age < 10){
    console.log("$10")
} else if (age >= 10 && age < 65){
    console.log("$20")
}else {
    console.log("Invalid Age")
}


//operator NOT !
let firstName = prompt("enter your name")
if(!firstName) {
    firstName = prompt("Enter Valid name")
}



//switch case
const day = 2;

switch (day) {
    case 1:
        console.log("MONDAY");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("I don't know that");

}
