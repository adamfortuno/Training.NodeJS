const math = require('../math.js');

test("should convert 32 degress fahrenheit to 0 celsius", () => {
    let param = 32;
    let val = math.fahrenheitToCelsius(param);

    expect(val).toBe(0);
});

test("should convert 0 degress celsius to 32 degress fahrenheit", () => {
    let param = 0;
    let val = math.celsiusToFahrenheit(param);
    
    expect(val).toBe(32);
});