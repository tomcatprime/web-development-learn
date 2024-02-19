// 2 pieces for ASYNC / AWAIT

// async - declare function always return a promise

async function hello() {

}

// arrow func
const sing = async () => {
    throw "oh no, problem"
    return 'text text text'
}

sing().then((data) => {
    
    console.log("Promise resolved with:", data)
})
.catch(err => {
    console.log("OH NO, Promise rejected")
    console.log(err)
})

const login = (username, password) => {
    if(!username || !password) throw 'Missing credentials'
    if(password === 'corgicute') return 'Welcome!'
    throw 'Invalid Password'
}

login('dsadsa', 'corgicute')
.then(msg => {
    console.log("logged IN")
})
.catch(err => {
    console.log("Error")
})



async function rainbow(){
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('yellow', 1000)
    return "All DONE"
}
    
// rainbow().then(() => console.log("End of colors"));

async function printRainbow() {
    await rainbow();
    console.log("End of colors.")
}

//handling error
async function makeTwoRequest() {
    try {
        let data1 = await fakeRequest('/page1');
        console.log(data1);
    }catch (e) {
        console.log("Error caught")
    } 
}