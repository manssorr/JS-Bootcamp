// Listener for the API

const getPuzzle = (wordNum) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', event => {
        if(event.target.readyState === 4 && event.target.status === 200) {
            const data = JSON.parse(event.target.responseText)
            resolve(data.puzzle)
        } else if (event.target.readyState === 4) {
            reject('Error has ben happend')
        }
    })

    request.open('GET', `https://puzzle.mead.io/puzzle?wordCount=${wordNum}`)
    request.send()
})



// Countries API

const getCountry = (countryCode) => new Promise((resolve, reject) => {
    const req = new XMLHttpRequest()

    req.addEventListener('readystatechange', e => {
        if(e.target.readyState === 4 && e.target.status === 200) {

            countriesJSON = JSON.parse(e.target.responseText)
            const countryFind = countriesJSON.find(country => country.alpha2Code === countryCode)
            resolve(countryFind.name)

        } else if (e.target.readyState === 4) {
            reject('An error has been happened', undefined)
        }
    })

    req.open('GET','https://restcountries.com/v2/all')
    req.send()
})