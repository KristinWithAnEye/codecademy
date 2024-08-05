// Declare Kelvin variable
const kelvin = 0;

// Declare Celsius variable
const celsius = kelvin - 273;

// Declare Newton variable
const newton = Math.floor(celsius * (33/100));

// Declare Fahrenheit variable & round down Fahrenheit temp
let fahrenheit = Math.floor(celsius * (9/5) + 32);

// Log temp in F
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Log temp in Newton
console.log(`The temperature is ${newton} degrees Newton.`);