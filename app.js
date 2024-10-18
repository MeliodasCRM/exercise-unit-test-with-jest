// One euro is:
let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87
  };
  
  const fromEuroToDollar = number1 => number1 * oneEuroIs["USD"];
  const fromDollarToYen = number1 => (number1 / oneEuroIs["USD"]) * oneEuroIs["JPY"];
  const fromYenToPound = number1 => (number1 / oneEuroIs["JPY"]) * oneEuroIs["GBP"];
  
  module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound, oneEuroIs };
  