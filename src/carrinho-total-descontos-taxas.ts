// TODOS OS ITENS DE CAMISETA ESTÃO COM 10% DE DESCONTO
// NA COMPRA DO 2º ITEM DO MESMO VALOR A SEGUNDA RECEBE MAIS 5% DE DESCONTO TOTALIZANDO 15% NO SEGUNDO
// TODOS OS ITENS QUE SÃO JEANS TEM UMA TAXA DE 3,99 POR PEÇA
const produtos = [
  'Camiseta Básica',
  'Camiseta Polo',
  'Bermuda Moletom',
  'Calça Jeans Masculina',
  'Camiseta Básica',
  'Calça Jeans Feminina',
  'Camiseta Básica',
];

const precos = [29.9, 49.9, 35, 89.99, 29.9, 109.99, 29.9];
const porcentage = 0.9;
const porcentage2part = 0.95;
const calculator = (acc, valueCurrent) => acc + valueCurrent;

const withDiscount = [];
const productsWithoutDiscounts = [];
const valueDiscounts = [];
const productsDiscount2part = [];

const regularPrice = [];
const valueRegularPrice = [];

const withFee = [];
const valueWithFee = [];

const shirt = produtos.filter((props) => props.includes('Camiseta'));
const shorts = produtos.filter((props) => props.includes('Bermuda'));
const jeans = produtos.filter((props) => props.includes('Jeans'));

const handleProductsShirt = produtos.map((nameProduct, indexName) => {
  if (shirt.includes(nameProduct)) {
    withDiscount.push(indexName);
  }
});

const handlePrice = precos.map((value, indexValue) => {
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
const partDiscount = productsDiscount2part * porcentage2part;
console.log(partDiscount, 'valor da 2° camisa do mesmo modelo com MAIS 5%');

const valueTotalShirt =
  valueDiscounts.reduce(calculator, 0) - productsDiscount2part + partDiscount;
console.log(valueTotalShirt, 'Valor total das camisas a serem pagas');

const handleProductsShorts = produtos.map((nameProduct, indexName) => {
  if (shorts.includes(nameProduct)) {
    regularPrice.push(indexName);
  }
});

const handlePriceShorts = precos.map((value, valueIndex) => {
  if (regularPrice.includes(valueIndex)) {
    valueRegularPrice.push(value);
  }
});
const valueShorts = valueRegularPrice.reduce(calculator, 0);
console.log(valueShorts, 'Valor Bermuda');

const handleProductsJeans = produtos.map((nameProduct, indexName) => {
  if (jeans.includes(nameProduct)) {
    withFee.push(indexName);
  }
});

const handlePriceJeans = precos.map((value, indexName) => {
  if (withFee.includes(indexName)) {
    valueWithFee.push(value + 3.99);
  }
});
const totalValueJeans = valueWithFee.reduce(calculator, 0);
console.log(totalValueJeans, 'Valor dos Jens');

console.log(
  valueTotalShirt + totalValueJeans + valueShorts,
  'Valor total a Pagar',
);
