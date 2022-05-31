interface ProductImage {
  url: string;
  descricao: string;
}

export interface ProductTypes {
  id: any;
  nome: string;
  url: string;
  preco: number;
  categoria: number;
  descricao: string;
  tamanhos_disponiveis: any;
  quantidade_disponivel: number;
  carrinho: number;
  total: number;
  imagens: ProductImage[];
}