// Interfaz de producto basada en la API de fakestoreapi.com
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

// Extensión de la interfaz Product para incluir stock
export interface ProductWithStock extends Product {
  stock: number;
}
