// new Promise((resolve, reject) => {
//     resolve();
// })


const fakeRequest = (url) => {
    new Promise(resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if(rand < 0.7){
                resolve("You fake data");
            }

            reject("Request error!");
        },1000)
    }
}

fakeRequest('/dogs/1')
.then(() => {
    console.log("DONE WITH REQUEST")
    console.log('data is: ', data)
})
.catch((err) => {
    console.log("Oh NO", err)
})