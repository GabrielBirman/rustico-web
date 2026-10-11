import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";

const ProductsSection = () => {
  return (
    <section id="productos" className="py-20 md:py-28 bg-warm-gradient">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-3">
            Nuestros Productos
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Hechas con <span className="italic text-primary">amor</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
