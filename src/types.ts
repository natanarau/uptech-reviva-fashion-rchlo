interface ProductImage {
  url: string;
  description: string;
}

export interface ProductTypes {
  id: number;
  name: string;
  url: string;
  price: number;
  category: number;
  description: string;
  images: ProductImage[];
  quantity_available: number;
  cart: number;
  total: number
}