document.querySelector('button').addEventListener('click', function(evt){
    console.log(evt)
})

const input = document.querySelector('input');
input.addEventListener('keydown', function() {
    console.log('KEYDOWN')
})

input.addEventListener('keyup', function() {
    console.log('KEYUP')
})

input.addEventListener('keyup', function(e) {
    console.log(e.key);
    console.log(e.code)
})



window.addEventListener('keydown', function(e){
    console.log(e.code)
})