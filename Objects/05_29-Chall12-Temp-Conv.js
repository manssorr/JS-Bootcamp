const fahrebheitConv = function (fahrebheit) {
    let toCelsius = (fahrebheit - 32)     * (5/9);
    let toKelvin  = (fahrebheit - 459.67) * (5/9);
    return {
        fahrebheit: `${fahrebheit} fahrebheit`,
        Celsius:    `${fahrebheit} fahrebheit is ${toCelsius} in Celsius`,
        Kelvin:     `${fahrebheit} fahrebheit is ${toKelvin} in Kelvin`
        }
    }




let TempInAllForms = fahrebheitConv(100)
console.log(TempInAllForms.fahrebheit)
console.log(TempInAllForms.Celsius)
console.log(TempInAllForms.Kelvin)