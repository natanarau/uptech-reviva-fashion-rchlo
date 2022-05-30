// Pegar produtos do estoque
// Adicionar no localStorage
// Mostrar na tela
import type { ProductTypes } from 'types'

const Product:ProductTypes[] = [
  {
    id: 1,
    name: 'VESTIDO MIDI PLUS SIZE FEMININO ABERTO UMA MARIA LISO MARROM FILIPA BY RIACHUELO',
    url: 'vestido-midi-plus-size-feminino-aberto-uma-maria-liso-marrom-filipa-by-riachuelo',
    price: 259.9,
    category: 1,
    description:
      'O Vestido Midi Plus Size Feminino Aberto Uma Maria Liso Marrom Filipa by Riachuelo foi confeccionado em malha macia, uma ótima escolha para quem está em busca de conforto e segurança. Além de contar com mangas 3/4 e abertura frontal por botões . Perfeito para usar na suas ocasiões preferidas ou usar no dia a dia. Aposte!',
    quantity_available: 20,
    cart: 0,
    total: 0,
    images: [
      {
        url: 'https://static.riachuelo.com.br/RCHLO/14595150003/portrait/47b6bc1baa2696ab9e414de591d2ccaf96f2d25b.jpg?imwidth=700',
        description: 'Vestido midi plus',
      },
    ],
  },
  {
    id: 2,
    name: 'Camiseta Manga Curta Free Fire Branco',
    url: 'camiseta-feminina-manga-curta-free-fire-branco',
    price: 79.9,
    category: 1,
    description:
      'A Camiseta Manga Curta Free Fire Branco é produzida em fibra natural, sendo muito macia e confortável. Com modelagem regular, o diferencial da peça é a estampa temática do jogo Free Fire. As peças estampadas são sempre uma boa escolha na hora de compor um look mais despojado. Aposte!',
    quantity_available: 15,
    cart: 0,
    total: 0,
    images: [
      {
        url: 'https://static.riachuelo.com.br/RCHLO/14594536001/portrait/f0140498a034437cada79415e8a255ebe52b2f18.jpg?imwidth=700',
        description: 'Camiseta manga curta free fire branco',
      },
    ],
  },
  {
    id: 3,
    name: 'Suéter Feminino Curto Tricot Liso Verde Pool Basics by Riachuelo',
    url: 'sueter-feminino-curto-tricot-liso-verde-pool-basics-by-riachuelo',
    price: 99.9,
    category: 1,
    description:
      'O Suéter Feminino Curto Tricot Liso Verde Pool Basics by Riachuelo, confeccionado em tricot, ideal para os dias mais frios. Possui modelo fechado e mangas longas. Perfeito para os dias de temperatura baixa, use sobre regatas e combine com calças de fit ajustado e sapatilhas.',
    quantity_available: 13,
    cart: 0,
    total: 0,
    images: [
      {
        url: 'https://static.riachuelo.com.br/RCHLO/14380226005/portrait/14ed05dd6b3dd0307140279eb7f538725d368e9a.jpg?imwidth=700',
        description: 'Suéter Feminino Curto Tricot Liso Verde',
      },
    ],
  },
  {
    id: 4,
    name: 'Blusa Feminina Manga Longa Texturizada Branco AK by Riachuelo',
    url: 'blusa-feminina-manga-longa-texturizada-branco-ak-by-riachuelo',
    price: 69.9,
    category: 1,
    description:
      'A Blusa Feminina Manga Longa Texturizada Branco AK by Riachuelo vai se tornar sua peça preferida! Confeccionada em malha texturizada, a peça é super versátil, agregando estilo e conforto ao seu closet!',
    quantity_available: 43,
    cart: 0,
    total: 0,
    images: [
      {
        url: 'https://static.riachuelo.com.br/RCHLO/14599970002/portrait/d4eabaf2cb2c65ed21bdeccf0055d775dc4367b6.jpg?imwidth=700',
        description: 'Blusa Feminina Manga Longa Texturizada Branco AK by',
      },
    ],
  },
  {
    id: 5,
    name: 'Bermuda Água Masculina Tactel Verão Rosa Antigo Pool by Riachuelo',
    url: 'bermuda-agua-masculina-tactel-ver-o-rosa-antigo-pool-by-riachuelo',
    price: 39.9,
    category: 2,
    description:
      'Básica e casual, a Bermuda Água Masculina Tactel Verão Rosa Antigo Pool by Riachuelo é o toque de estilo ao seu look praia. Confeccionada em tactel, possui uma estilosa estampa com temática de verão, dando o toque despojado que seu look de praia precisa! Aposte em uma regata e chinelos slides para um look confortável!',
    quantity_available: 43,
    cart: 0,
    total: 0,
    images: [
      {
        url: 'https://static.riachuelo.com.br/RCHLO/14303930004/portrait/756df1ab14a4829609dd0be9d692a5c2594dddef.jpg?imwidth=700',
        description: 'Bermuda Água Masculina Tactel Verão Rosa Básica e casual',
      },
    ],
  },
  {
    id: 6,
    name: 'Maiô Tradicional Verão Azul Turquesa Dript by Riachuelo',
    url: 'maio-tradicional-ver-o-azul-turquesa-dript-by-riachuelo',
    price: 99.9,
    category: 2,
    description:
      'Confeccionado em malha macia, o Maiô Tradicional Verão Azul Turquesa Dript by Riachuelo é uma ótima pedida para curtir os momentos de lazer na praia ou piscina. Com modelagem tradicional, apresenta estampa frontal e alças com regulagem. Combine com um saída de praia para os melhores dias de sol.',
    quantity_available: 29,
    cart: 0,
    total: 0,
    images: [
      {
        url: 'https://static.riachuelo.com.br/RCHLO/14106116004/portrait/180bbff6bbf9b6b492095e3a664c748f81d1e095.jpg?imwidth=700',
        description: 'Maiô Tradicional Verão Azul',
      },
    ],
  },
  {
    id: 7,
    name: 'Regata Masculina Malha Verão Branco Pool by Riachuelo',
    url: 'regata-masculina-malha-ver-o-branco-pool-by-riachuelo',
    price: 49.9,
    category: 2,
    description:
      'A Regata Masculina Malha Verão Branco Pool by Riachuelo é produzida em fibra natural, sendo muito macia e confortável. Com modelagem regular, o diferencial da peça é a padronagem com temática de verão. As peças estampadas são sempre uma boa escolha na hora de compor um look mais despojado. Aposte! Combine com uma bermuda de sarja e tênis para um visual casual.',
    quantity_available: 22,
    cart: 0,
    total: 0,
    images: [
      {
        url: 'https://static.riachuelo.com.br/RCHLO/14463342005/portrait/7e9ce6e2b121b7a1b324855ca7eb2aaaaf22d561.jpg?imwidth=700',
        description: 'Regata Masculina Malha Verão Branco',
      },
    ],
  },
  {
    id: 8,
    name: 'Camiseta Masculina Manga Curta Summer Addict Rosa Salmão Pool by Riachuelo',
    url: 'camiseta-masculina-manga-curta-summer-addict-rosa-salm-o-pool-by-riachuelo',
    price: 59.9,
    category: 2,
    description:
      'A Camiseta Masculina Manga Curta Summer Addict Rosa Salmão Pool by Riachuelo é produzida em fibra natural, sendo muito macia e confortável. Com modelagem regular, a peça possui estampa em lettering. As peças estampadas são sempre uma boa escolha na hora de compor um look mais despojado. Aposte! Combine com uma bermuda de sarja e tênis para um visual casual.',
    quantity_available: 10,
    cart: 0,
    total: 0,
    images: [
      {
        url: 'https://static.riachuelo.com.br/RCHLO/14497638005/portrait/30ca8063d786f0de49bc66df1e81e167409eaa92.jpg?imwidth=700',
        description: 'Camiseta Masculina Manga Curta Summer Addict Rosa Salmão',
      },
    ],
  },
];

export class Teste {

  // id: number;
  // name: string

  // constructor(idProduct: number, nameProduct: string ) {
  //         this.id = idProduct;
  //         this.name = nameProduct;
  // }

}

console.log(Product[0])






