const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}


const h2 = document.querySelectorAll('h2')
h2.setAttribute('class', 'purple')

/*
In index.html, you'll find 6 <li> elements, two of which have the 'highlight' class applied to them. 

Please use JavaScript and the classList property to invert which elements have the highlight class. 

Basically iterate over all the <li> elements and toggle the class of 'highlight' on each one.   Your end result should look like this:
*/
const lis = document.querySelectorAll('li');
 
for (let li of lis) {
  li.classList.toggle('highlight');
}


/*
Without touching index.html, please use JavaScript to create exactly 100 new button elements! Add each new button inside the container element provided in index.html.  Unfortunately, Udemy's exercise tool does not support to the append method, so you will need to use appendChild.  Here are the steps:

Create exactly 100 new button elements

Each button must have some text inside of it (it doesn't matter what)

Each button must be appended inside the container div.
*/




// WRITE YOUR CODE IN HERE:
const container = document.querySelector('div');
for (let i = 0; i < 100; i++){
    let shape = document.createElement("button");
    shape.innerText = 'Hey!';
    container.appendChild(shape);
}


