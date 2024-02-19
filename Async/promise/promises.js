// Promises - is an object representing the eventual completion or failure of an asynchronous operation

const request = fakeRequestPromise('yelp.com/api/coffee');

request.then(() => {
    console.log("PROMISE RESOLVED!"
}).catch(() => {
    console.log("oh no error, promise rejected")
})