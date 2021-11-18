'use strict'

// Callback normal function
const getDataCallback = (callback) => {
    setTimeout(() => {
        callback(undefined, 'This is dummy data')
    }, 2000);
}

getDataCallback((err, data)=>{
    if(data){
        console.log(data);
    } else if(err){
        console.log('Err');
    }
})


// Promise
getDataPromise = (data) => new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve(`My data is: ${data}`)
        reject('didnt work')
    }, 2000);
})


const myPromise = getDataPromise(123)

myPromise.then((data)=>{
    console.log(data)
},(err)=>{
    console.log(err)
})

// Promise
const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
    }, 2000)
})

getDataPromise(2).then((data) => {
    getDataPromise(data).then((data) => {
        console.log(`Promise data: ${data}`)
    }, (err) => {
        console.log(err)
    })
}, (err) => {
    console.log(err)
})

getDataPromise(10).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    return 'this is some test data'
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})


//Fetch API 
// A fetch() promise only rejects when a network error is encountered 
// (which is usually when there’s a permissions issue or similar). 
// A fetch() promise does not reject on HTTP errors (404, etc.). 
// Instead, a then() handler must check the Response.ok and/or Response.status properties.
fetch('https://puzzle.mead.io/puzzle',{}).then((response) => {
    if(response.status === 200) {
        return response.json()
    } else {
        throw new Error (`There are proplem`)
    }
}).catch((error) => {
    console.log(error);
})