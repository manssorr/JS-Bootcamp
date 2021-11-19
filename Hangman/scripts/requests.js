'use strict'

// Puzzle the API Setup
const getPuzzle = async (wordNum) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordNum}`,{})
    if(response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Error has ben happend')
    }
}

// Countries API Setup
const getCountry = async (countryCode) => {
    const response = await fetch('//restcountries.com/v2/all',{})
    if(response.status === 200){
        const data = await response.json() 
        return data.find(country => country.alpha2Code === countryCode).name
    } else {
        throw new Error('Error to fetch Countries') 
    }
}

// Location from IP API Setup
const getLocation = async () => {
    const response = await fetch('//ipinfo.io/?token=2932d1baf8b7c9', {})
    if(response.status === 200) {
        return response.json()
    } else {
        throw new Error('Cant get your IP')
    }
}

// Get current country object with out chaining
const getCurrentCountry = async () => {
        const response = await getLocation()
        return getCountry(response.country)
}