import { motion } from "framer-motion";
import anaCocina from "@/assets/ana-cocina.jpg";

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-background">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary mb-3">
            Nuestra Historia
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-8">
            Una receta de familia que ya conoce todo Ciudadela.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-card rounded-2xl p-8 md:p-12 shadow-rustic flow-root"
        >
          <figure className="w-full max-w-[200px] mx-auto mb-6 md:float-right md:ml-8 md:mb-4">
            <img
              src={anaCocina}
              alt="Ana, fundadora de Rústico & Casero, amasando una prepizza"
              className="w-full rounded-lg object-cover"
              loading="lazy"
            />
            <figcaption className="font-body text-sm text-muted-foreground text-center italic pt-2">
              Ana, fundadora de Rústico & Casero, amasando en nuestra cocina.
            </figcaption>
          </figure>

          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
            Desde 2019 que en <strong className="text-foreground">Rústico & Casero</strong>, desde nuestra cocina en Ciudadela, amasamos prepizzas como se hacían antes: con receta familiar, masa madre, ingredientes frescos y todo el tiempo que cada masa necesita para ser perfecta. Sin apuros. Sin atajos.
          </p>
          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
            Empezamos con una idea simple: que todos merezcan una pizza de calidad en su mesa, sin complicaciones. Hoy somos referentes en el barrio y alrededores, y los locales de la ciudad confían en nosotros semana a semana, pero cada prepizza sigue saliendo de nuestras manos con el mismo cariño que le ponemos a una cena en familia.
          </p>
          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
            Vendemos al por menor, al por mayor y armamos tu <strong className="text-foreground">pizza party</strong> para que tu evento sea de esos que se recuerdan. Porque la gente nos elige hace más de 7 años, y vuelve.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
