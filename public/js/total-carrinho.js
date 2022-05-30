"use strict";
const cartTotal = [39.9, 75.99, 24, 12, 109.99, 83.99];
function calcTutal(cartTotal) {
    const sumValue = cartTotal.reduce((a, b) => a + b, 0);
    return sumValue;
}
console.log('Total:', calcTutal(cartTotal));
