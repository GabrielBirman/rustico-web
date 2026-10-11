import productTomate from "@/assets/product-tomate.jpg";
import productCebolla from "@/assets/product-cebolla.jpg";
import productPizzetas from "@/assets/product-pizzetas.jpg";
import type { Product } from "@/context/CartContext";

export const products: Product[] = [
  {
    id: "prepizza-tomate",
    name: "Prepizza de Tomate",
    description: "Masa artesanal con salsa de tomate casera, lista para que le agregues tus ingredientes favoritos.",
    price: 1200,
    image: productTomate,
    category: "prepizzas",
  },
  {
    id: "prepizza-cebolla",
    name: "Prepizza de Cebolla",
    description: "Masa artesanal con salsa de tomate y cebolla caramelizada. Un clásico irresistible.",
    price: 1400,
    image: productCebolla,
    category: "prepizzas",
  },
  {
    id: "pizzetas",
    name: "Pizzetas (x12)",
    description: "Mini pizzetas artesanales con salsa de tomate. Ideales para eventos, fiestas y reuniones.",
    price: 2500,
    image: productPizzetas,
    category: "pizzetas",
  },
];
