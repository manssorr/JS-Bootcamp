const req = new XMLHttpRequest()
const countryCode = 'EG'

let countries = []

req.addEventListener('readystatechange', e => {
    if(e.target.readyState === 4 && e.target.status === 200) {
        console.log('All Well')
        countriesJSON = JSON.parse(e.target.responseText)
        const countryFind = countriesJSON.find(country => country.alpha2Code === countryCode)
        const countryFilter = countriesJSON.filter(country => country.alpha2Code === countryCode)
        console.log(countryFind.name)
        console.log(countryFilter)
        console.log(countryFilter[0])
        console.log(countryFilter[0].name)

    } else if (e.target.readyState === 4) {
        console.log('An error has been happened')
    }
})

req.open('GET','https://restcountries.com/v2/all')
req.send()

