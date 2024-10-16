test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar, fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be 149.77 yens", function() {
    const { fromDollarToYen } = require('./app.js');

    const yen = fromDollarToYen(3.5);

    const expected = 3.5 * 149.77;

    expect(fromDollarToYen(3.5)).toBe(524.195); 
})

test("One yen should be 0.0051 pounds", function() {
    const { fromYenToPound } = require('./app.js');

    const yen = fromYenToPound(3.5);

    const expected = 3.5 * 0.0051;

    expect(fromYenToPound(3.5)).toBe(0.01785); 
})