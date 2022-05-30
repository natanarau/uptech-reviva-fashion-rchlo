"use strict";
const carrinhoTaxado = [39.9, 75.99, 24, 12, 109.99, 83.99];
const inicialValues = 0;
const checkTaxed = carrinhoTaxado.filter((e) => e > 70);
const checkNotTaxed = carrinhoTaxado.filter((e) => e <= 70);
const sumValueNotTaxed = checkNotTaxed.reduce((a, b) => a + b, inicialValues);
if (checkTaxed.length > 0) {
    const percentageTaxed = 7;
    const sumValueTaxed = checkTaxed.reduce((a, b) => a + b, inicialValues);
    const valuePercentage = (percentageTaxed / 100) * sumValueTaxed;
    const valueTotalTaxed = valuePercentage + sumValueTaxed;
    console.log('Valor total de taxas:', valuePercentage);
    console.log('Total carrinho:', valueTotalTaxed + sumValueNotTaxed);
}
else {
    console.log('Total carrinho:', sumValueNotTaxed);
}
