const Temperature = {
  toFahrenheit (celsius) {
    return celsius * (9/5) + 32
  },
  toCelsius (fahrenheit) {
    return (fahrenheit - 32) * (5/9)
  }
}

const tempToday = 82

const tempInCelsius = Math.round(Temperature.toCelsius(tempToday))

const message = `Today's temperature is ${tempToday} °F, which is ${tempInCelsius} °C.`

console.log(message)