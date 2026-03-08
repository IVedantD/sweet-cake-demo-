import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import bakeryKitchen from "@/assets/bakery-kitchen.jpg";

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-blush">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={bakeryKitchen}
                alt="Our artisan bakery kitchen"
                loading="lazy"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative element */}
            <motion.div
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl border-2 border-gold/30 -z-10"
            />
            {/* Stats card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-4 lg:right-auto lg:-left-8 glass-card rounded-2xl p-6 text-center"
            >
              <p className="font-heading text-3xl font-bold text-gradient-gold">15+</p>
              <p className="font-body text-sm text-muted-foreground">Years of Craft</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">
              Our Story
            </p>
            <h2 className="section-title text-foreground mb-6">
              Where Passion Meets <span className="italic text-gradient-rose">Perfection</span>
            </h2>
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                Born from a grandmother's kitchen and a passion for turning simple 
                ingredients into extraordinary creations, Sweet Crumbs has been the 
                heart of celebration since 2010.
              </p>
              <p>
                Every cake that leaves our kitchen is a labor of love — from sourcing 
                the finest Belgian chocolate to hand-piping delicate buttercream flowers. 
                We believe that the perfect cake isn't just tasted, it's experienced.
              </p>
              <p>
                Our master bakers combine time-honored techniques with modern artistry 
                to create cakes that are as beautiful as they are delicious.
              </p>
            </div>

            <div className="flex gap-12 mt-10">
              {[
                { number: "10K+", label: "Cakes Made" },
                { number: "5K+", label: "Happy Clients" },
                { number: "25+", label: "Cake Varieties" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-2xl font-bold text-gradient-gold">{stat.number}</p>
                  <p className="font-body text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
