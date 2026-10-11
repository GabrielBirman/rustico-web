import { motion } from "framer-motion";
import { Car, PartyPopper, Store } from "lucide-react";

const features = [
  {
    icon: Store,
    title: "Venta Mayorista",
    description: "Precios especiales para comercios, almacenes y revendedores. Consultá nuestras condiciones.",
  },
  {
    icon: PartyPopper,
    title: "Pizza Party",
    description: "Servicio completo de catering para fiestas, cumpleaños, eventos corporativos y más.",
  },
  {
    icon: Car,
    title: "Delivery",
    description: "Entregamos tu pedido en la puerta de tu casa o negocio. Consultá zona de cobertura.",
  },
];

const WholesaleSection = () => {
  return (
    <section id="mayorista" className="py-20 md:py-28 bg-secondary text-secondary-foreground">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary-foreground/70 mb-3">
            Servicios
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Mayorista & Catering
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center p-8 rounded-xl bg-secondary-foreground/10 backdrop-blur-sm"
            >
              <feature.icon className="h-10 w-10 mx-auto mb-5 text-secondary-foreground/90" />
              <h3 className="font-display text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="font-body text-sm text-secondary-foreground/75 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WholesaleSection;
