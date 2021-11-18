'use strict'

// Puzzle the API Setup
const getPuzzle = (wordNum) => 
fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordNum}`,{})
.then((response)=>{
    if(response.status === 200) {
        return response.json()
    } else {
        throw new Error('Error has ben happend')
    }
}).then((dataJSON)=>{
    return dataJSON.puzzle
}).catch((error)=>{
    console.log(error)
})

// Countries API Setup
const getCountry = (countryCode) => 
    fetch('https://restcountries.com/v2/all',{}).then((response)=>{
        if(response.status === 200){
            return response.json()
        } else {
            throw new Error('Error to fetch Countries') 
        }
    })
    .then((data)=> data.find(country => country.alpha2Code === countryCode))
    .then((data)=> data.name)

// Location from IP API Setup