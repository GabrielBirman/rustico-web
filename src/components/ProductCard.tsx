import { Plus } from "lucide-react";
import { useCart, type Product } from "@/context/CartContext";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const { addItem } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group bg-card rounded-xl overflow-hidden shadow-rustic hover:shadow-rustic-lg transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div className="p-5 md:p-6">
        <h3 className="font-display text-xl font-semibold text-foreground mb-2">
          {product.name}
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="font-display text-2xl font-bold text-primary">
            ${product.price.toLocaleString("es-AR")}
          </span>
          <button
            onClick={() => addItem(product)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm hover:bg-tomato-dark transition-colors"
            aria-label={`Agregar ${product.name} al carrito`}
          >
            <Plus className="h-4 w-4" />
            Agregar
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
