// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = number1 => number1 * oneEuroIs["USD"];

const fromDollarToYen = number1 => (number1 * oneEuroIs["JPY"]) / oneEuroIs["USD"];

const fromYenToPound = number1 => (number1 / oneEuroIs["JPY"]) * oneEuroIs["GBP"];

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }