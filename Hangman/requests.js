// // Listener for the API
// const request = new XMLHttpRequest()

// request.addEventListener('readystatechange', event => {
//     if(event.target.readyState === 4 && event.target.status === 200) {
//         const data = JSON.parse(event.target.responseText)
//     } else if (event.target.readyState === 4) {
//     }
// })

// request.open('GET', 'https://puzzle.mead.io/puzzle?wordCount=1')
// request.send()


// Countries API

const getCountry = (countryCode, callBack) => {
    const req = new XMLHttpRequest()
    
    console.log('------------------------------------');
    console.log();
    console.log('------------------------------------');

    req.addEventListener('readystatechange', e => {
        if(e.target.readyState === 4 && e.target.status === 200) {

            countriesJSON = JSON.parse(e.target.responseText)
            const countryFind = countriesJSON.find(country => country.alpha2Code === countryCode)
            callBack(undefined, countryFind.name)

        } else if (e.target.readyState === 4) {
            callBack('An error has been happened', undefined)
        }
    })

    req.open('GET','https://restcountries.com/v2/all')
    req.send()
}