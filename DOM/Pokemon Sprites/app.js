const container = document.querySelector('#container');
const baseURL = 'https//:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for(let i = 0; i < 100; i++){
    const newImg = docuemnt.createElement('img');
    newImg.src = `${baseURL}${i}.png`
    container.appendChild(newImg)
}