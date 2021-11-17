// Listener for the API

const getPuzzle = (wordNum, callBack) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', event => {
        if(event.target.readyState === 4 && event.target.status === 200) {
            const data = JSON.parse(event.target.responseText)
            callBack(undefined, data.puzzle)
        } else if (event.target.readyState === 4) {
            callBack('Error has ben happend', undefined)
        }
    })

    request.open('GET', `https://puzzle.mead.io/puzzle?wordCount=${wordNum}`)
    request.send()
}



// Countries API

const getCountry = (countryCode, callBack) => {
    const req = new XMLHttpRequest()

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