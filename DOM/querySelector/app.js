document.querySelector('#banner')

document.querySelector('.square')  //by class


//example of selecting with css selector 
const checkbox = document.querySelector("input[type='checkbox']")


//manipulating

const allLinks = document.querySelectorAll('a');

for (let link of allLinks){
    link.innerText = 'I am a link !!!!'
}

//manipulating text example
document.querySelector('span').innerHTML = "<span>Good</span>"


///manipulate DOM
/*
Let's get some practice working with DOM element attributes. I've provided you with some very basic markup.  Please select the image element and:

change its source to this url: https://devsprouthosting.com/images/chicken.jpg

change its alt text to be "chicken"
*/
const eggImg = document.querySelector('img');

eggImg.src = 'https://devsprouthosting.com/images/chicken.jpg';
eggImg.alt = 'chicken';


/*
use JavaScript to make the following changes:

Select the div with the id of container.  Using JavaScript, set it's text alignment to 'center';

Select the image and use JavaScript to give it a width of 150px and a border radius of 50%

Remember to use camelCased property names in JavaScript! (backgroundColor, not background-color, etc.)*/
const container = document.querySelector('#container');
container.style.textAlign = 'center';

const image = document.querySelector("img");
image.style.width = '150px';
image.style.borderRadius = '50%';


/*
Please write some JavaScript to make them rainbow-colored! 

In app.js you'll find an array of color names called colors.  It looks like: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
*/

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
const word = document.querySelectorAll('span');
for (let i = 0; i < word.length; i++){
    word[i].style.color = colors[i];
}

