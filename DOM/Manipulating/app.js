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


