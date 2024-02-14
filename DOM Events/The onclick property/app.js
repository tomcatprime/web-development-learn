const btn = document.querySelector('#v2')

btn.onclick = function(){
    console.log('you clicked me!');
}

function scream(){
    console.log('aaaaaaaahhhhhhhhhhh!!!')
}
btn.onmouseenter = scream;