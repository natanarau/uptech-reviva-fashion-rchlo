// TODOS OS ITENS DE CAMISETA ESTÃO COM 10% DE DESCONTO
// NA COMPRA DO 2º ITEM DO MESMO VALOR A SEGUNDA RECEBE MAIS 5% DE DESCONTO TOTALIZANDO 15% NO SEGUNDO
// TODOS OS ITENS QUE SÃO jean TEM UMA TAXA DE 3,99 POR PEÇA
const products:string[] = [
  'Camiseta Básica',
  'Camiseta Polo',
  'Bermuda Moletom',
  'Calça jeans Masculina',
  'Camiseta Básica',
  'Calça jeans Feminina',
  'Camiseta Básica',
];

const pricesProducts = [29.9, 49.9, 35, 89.99, 29.9, 109.99, 29.9];
const porcentage = 0.9;
const porcentage2part = 0.95;
const calculato = (acc: any, valueCurrent: any) => acc + valueCurrent;

const withDiscount: number[] = [];
const productsWithoutDiscounts: number[] = [];
const valueDiscounts: number[] = [];
const productsDiscount2part: number[] = [];

const regularPrice: number[] = [];
const valueRegularPrice: number[] = [];

const withFee: number[] = [];
const valueWithFee: number[] = [];

const shirt = products.filter((props) => props.includes('Camiseta'));
const short = products.filter((props) => props.includes('Bermuda'));
const jean = products.filter((props) => props.includes('jean'));

const handleProductsShirt = products.map((nameProduct, indexName) => {
  if (shirt.includes(nameProduct)) {
    withDiscount.push(indexName);
  }
});

const handlePrice = pricesProducts.map((value, indexValue) => {
  if (withDiscount.includes(indexValue)) {
    productsWithoutDiscounts.push(value);
    valueDiscounts.push(value * porcentage);
  }
  return value;
});
console.log(productsWithoutDiscounts, 'Camisetas sem descontos');
console.log(valueDiscounts, 'Camisetas aplicando 10% de desconto');

const handle2part = valueDiscounts.map((value, index) => {
  if (
    !productsDiscount2part.includes(value) &&
    valueDiscounts.includes(value, index + 1)
  ) {
    productsDiscount2part.push(value);
  }
  return value;
});
const partDiscount = +productsDiscount2part * porcentage2part;
console.log(partDiscount, 'valor da 2° camisa do mesmo modelo com MAIS 5%');

const valueTotalShirt =
  valueDiscounts.reduce(calculato, 0) - +productsDiscount2part + partDiscount;
console.log(valueTotalShirt, 'Valor total das camisas a serem pagas');

const handleProductsshort = products.map((nameProduct, indexName) => {
  if (short.includes(nameProduct)) {
    regularPrice.push(indexName);
  }
});

const handlePriceshort = pricesProducts.map((value, valueIndex) => {
  if (regularPrice.includes(valueIndex)) {
    valueRegularPrice.push(value);
  }
});
const valueshort = valueRegularPrice.reduce(calculato, 0);
console.log(valueshort, 'Valor Bermuda');

const handleProductsjean = products.map((nameProduct, indexName) => {
  if (jean.includes(nameProduct)) {
    withFee.push(indexName);
  }
});

const handlePricejean = pricesProducts.map((value, indexName) => {
  if (withFee.includes(indexName)) {
    valueWithFee.push(value + 3.99);
  }
});
const totalValuejean = valueWithFee.reduce(calculato, 0);
console.log(totalValuejean, 'Valor dos Jens');

console.log(
  valueTotalShirt + totalValuejean + valueshort,
  'Valor total a Pagar',
);
