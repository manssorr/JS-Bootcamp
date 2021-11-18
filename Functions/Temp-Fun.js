let toCelsius = function (fahrebheit) {
    let temp = (fahrebheit - 32)     * (5/9);
    return temp;
}

let toKelvin = function (fahrebheit) {
    let temp = (fahrebheit - 459.67) * (5/9);
    return temp;
}

let Celsius = toCelsius(32)
console.log(Celsius)

Celsius = toCelsius(68)
console.log(Celsius)

let Kelvin = toKelvin(495.67)
console.log(Kelvin)

Kelvin = toKelvin(459.67)
console.log(Kelvin)