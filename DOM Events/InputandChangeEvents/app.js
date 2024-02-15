const input = document.querySelector('input');
const h1 = document.querySelector('h1');


input.addEventListener('change', function(){
    console.log("text");
    console.log()
})


input.addEventListener('input', function(e){
    h1.innerText = `Welcome, ${input.value}`
    if (input.value.length === 0){
        h1.innerText = "Enter your username"
    }
})