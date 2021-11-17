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