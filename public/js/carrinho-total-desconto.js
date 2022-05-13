const carrinho = [25.99, 27.83, 35.8, 35.8, 35.8, 44, 53.9, 25.99];
const discount = 0.9;
const productDiscount = [];
const calculator = (acc, valueCurrent) => acc + valueCurrent;

const noDiscount = carrinho
  .map((valueProduct, indexCurrent) => {
    if (
      !productDiscount.includes(valueProduct) &&
      carrinho.includes(valueProduct, indexCurrent + 1)
    ) {
      productDiscount.push(valueProduct);
    }
    return valueProduct;
  })
  .reduce(calculator, 0);

const productToHaveDiscounted = productDiscount.reduce(calculator, 0);

const totalDiscountedProducts = productDiscount.reduce(
  (acc, valueCurrent) => calculator(acc, valueCurrent * discount),
  0,
);

const totalToBePaid =
  noDiscount - productToHaveDiscounted + totalDiscountedProducts;

console.log(productDiscount, 'Produtos com descontos');
console.log(noDiscount, 'Total sem desconto');
console.log(productToHaveDiscounted, 'Valores a ter 10% de desconto');
console.log(totalDiscountedProducts, 'Valor com 10% de desconto');
console.log(totalToBePaid, 'Total com desconto');
