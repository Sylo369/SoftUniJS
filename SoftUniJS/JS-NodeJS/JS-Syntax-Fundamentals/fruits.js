function fruits(fruitType, kilograms, pricePerKilo) {
let multiplier = kilograms / 1000;
let sum = pricePerKilo * multiplier;

console.log(`I need $${sum.toFixed(2)} to buy ${multiplier.toFixed(2)} kilograms ${fruitType}.`);
}

