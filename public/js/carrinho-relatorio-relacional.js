// Exemplo: Produto: Camiseta Básica, Quantidade: 3, Valor Unitário: R$ 29,90
// Exemplo: Produto: Calça Jeans Masculina, Quantidade: 1, Valor Unitário: R$ 89,99

const produtos = [
  'Camiseta Básica',
  'Camiseta Polo',
  'Bermuda Moletom',
  'Calça Jeans Masculina',
  'Camiseta Básica',
  'Calça Jeans Feminina',
  'Camiseta Básica',
];
const productDivided = [];
const precos = [29.9, 49.9, 35, 89.99, 29.9, 109.99, 29.9];

const shirtBasic = produtos.filter((props) => props.includes('Básica'));
const productShirtBasicTotal = [];

const shirtPolo = produtos.filter((props) => props.includes('Polo'));
const productShirtPoloTotal = [];

const shorts = produtos.filter((props) => props.includes('Bermuda'));
const productShortsTotal = [];

const jeans = produtos.filter((props) => props.includes('Jeans'));
const productJeansTotal = [];

const filtering = produtos.map((product, indexProduct) => {
  productDivided.push({ id: indexProduct, nameProduct: product });
});

const filterTotal = precos.map((value, indexValue) => {
  if (productDivided[indexValue].id === indexValue) {
    if (shirtBasic.includes(productDivided[indexValue].nameProduct)) {
      productDivided[indexValue].valueProduct = value;
      productShirtBasicTotal.push(
        shirtBasic.length,
        productDivided[indexValue].nameProduct,
        value,
      );
    }

    if (shirtPolo.includes(productDivided[indexValue].nameProduct)) {
      productDivided[indexValue].valueProduct = value;
      productShirtPoloTotal.push(
        shirtPolo.length,
        productDivided[indexValue].nameProduct,
        value,
      );
    }

    if (shorts.includes(productDivided[indexValue].nameProduct)) {
      productDivided[indexValue].valueProduct = value;
      productShortsTotal.push(
        shorts.length,
        productDivided[indexValue].nameProduct,
        value,
      );
    }

    if (jeans.includes(productDivided[indexValue].nameProduct)) {
      productDivided[indexValue].valueProduct = value;
      productJeansTotal.push(
        jeans.length,
        productDivided[indexValue].nameProduct,
        value,
      );
    }
  }
});
const multiplyShirt = productShirtBasicTotal[2] * productShirtBasicTotal[0];
const multiplyShirtPolo = productShirtPoloTotal[2] * productShirtPoloTotal[0];
const multiplyShorts = productShortsTotal[2] * productShortsTotal[0];
const multiplyjeans = productJeansTotal[2] * productJeansTotal[0];

const totalProducts =
  multiplyShirt + multiplyShirtPolo + multiplyShorts + multiplyjeans;

console.log(
  'Produto:',
  productShirtBasicTotal[1],
  'Quantidade:',
  productShirtBasicTotal[0],
  'Valor Unitário',
  productShirtBasicTotal[2].toFixed(2).replace('.', ','),
  'Valor Total:',
  multiplyShirt.toFixed(2).replace('.', ','),
);

console.log(
  'Produto:',
  productShirtPoloTotal[1],
  'Quantidade:',
  productShirtPoloTotal[0],
  'Valor Unitário',
  productShirtPoloTotal[2].toFixed(2).replace('.', ','),
  'Valor Total:',
  multiplyShirtPolo.toFixed(2).replace('.', ','),
);

console.log(
  'Produto:',
  productShortsTotal[1],
  'Quantidade:',
  productShortsTotal[0],
  'Valor Unitário',
  productShortsTotal[2].toFixed(2).replace('.', ','),
  'Valor Total:',
  multiplyShorts.toFixed(2).replace('.', ','),
);

console.log(
  'Produto:',
  productJeansTotal[1],
  'Quantidade:',
  productJeansTotal[0],
  'Valor Unitário',
  productJeansTotal[2].toFixed(2).replace('.', ','),
  'Valor Total:',
  multiplyjeans.toFixed(2).replace('.', ','),
);

console.log('TOTAL DE TODOS OS PRODUTOS:', totalProducts);
