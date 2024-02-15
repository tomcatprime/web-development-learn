// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const ul = document.querySelector('#list');
 
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const qty = form.elements.qty.value;
  const product = form.elements.product.value;
  const li = document.createElement('li');
  li.innerText = `${qty} ${product}`;
  ul.appendChild(li);
  form.reset();
});