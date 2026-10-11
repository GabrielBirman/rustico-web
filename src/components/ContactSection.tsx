import { motion } from "framer-motion";
import { MessageCircle, MapPin, Clock } from "lucide-react";

const WHATSAPP_NUMBER = "5491150513698"; // 11 5051-3698

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 md:py-28 bg-background">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-3">
            Hablemos
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Contacto
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-card rounded-xl p-6 shadow-rustic text-center">
            <MessageCircle className="h-8 w-8 mx-auto mb-4 text-primary" />
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">WhatsApp</h3>
            <p className="font-body text-sm text-muted-foreground">Escribinos y hacé tu pedido</p>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-rustic text-center">
            <MapPin className="h-8 w-8 mx-auto mb-4 text-primary" />
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">Ubicación</h3>
            <p className="font-body text-sm text-muted-foreground">Ciudadela, Tres de Febrero, Provincia de Buenos Aires</p>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-rustic text-center">
            <Clock className="h-8 w-8 mx-auto mb-4 text-primary" />
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">Horario</h3>
            <p className="font-body text-sm text-muted-foreground">Lun a Sáb: 9 a 20hs</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola! Quiero hacer un pedido de prepizzas 🍕")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-secondary text-secondary-foreground font-body font-bold text-base hover:bg-olive-light transition-colors shadow-rustic"
          >
            <MessageCircle className="h-5 w-5" />
            Escribinos por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
