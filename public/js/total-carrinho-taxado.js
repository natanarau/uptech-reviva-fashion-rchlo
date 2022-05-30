"use strict";
const carrinhoTaxado = [39.9, 75.99, 24, 12, 109.99, 83.99];
function totalCartTaxa(carrinhoTaxado) {
    const checkTaxed = carrinhoTaxado.filter((e) => e > 70);
    const checkNotTaxed = carrinhoTaxado.filter((e) => e <= 70);
    const sumValueNotTaxed = checkNotTaxed.reduce((a, b) => a + b, 0);
    if (checkTaxed.length > 0) {
        const percentageTaxed = 7;
        const sumValueTaxed = checkTaxed.reduce((a, b) => a + b, 0);
        const valuePercentage = (percentageTaxed / 100) * sumValueTaxed;
        return valuePercentage + sumValueTaxed + sumValueNotTaxed;
    }
}
console.log('Total Carrinho', totalCartTaxa(carrinhoTaxado));
