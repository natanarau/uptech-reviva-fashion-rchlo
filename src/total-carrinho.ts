const carrinho = [39.9, 75.99, 24, 12, 109.99, 83.99];

const inicialValue = 0;
const sumValue = carrinho.reduce((a, b) => a + b, inicialValue);

const subTotal = sumValue.toFixed(2).replace('.', ',');
console.log(subTotal);
