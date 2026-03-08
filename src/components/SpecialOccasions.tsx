import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cake, Heart, PartyPopper, Sparkles } from "lucide-react";

import cakeBirthday from "@/assets/cake-birthday.jpg";
import cakeWedding from "@/assets/cake-wedding.jpg";
import cakeAnniversary from "@/assets/cake-anniversary.jpg";
import cakeCustom from "@/assets/cake-custom.jpg";

const occasions = [
  {
    title: "Birthday Cakes",
    description: "Make their special day unforgettable with a custom birthday masterpiece",
    image: cakeBirthday,
    icon: PartyPopper,
  },
  {
    title: "Wedding Cakes",
    description: "Elegant multi-tiered creations for your most magical day",
    image: cakeWedding,
    icon: Heart,
  },
  {
    title: "Anniversary Cakes",
    description: "Celebrate years of love with a cake as sweet as your journey",
    image: cakeAnniversary,
    icon: Sparkles,
  },
  {
    title: "Custom Cakes",
    description: "Your imagination, our craftsmanship — anything is possible",
    image: cakeCustom,
    icon: Cake,
  },
];

const SpecialOccasions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="occasions" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">
            For Every Moment
          </p>
          <h2 className="section-title text-foreground">
            Special <span className="italic text-gradient-gold">Occasions</span>
          </h2>
          <p className="section-subtitle">
            From intimate celebrations to grand events, we create the perfect cake
            for every milestone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {occasions.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative rounded-3xl overflow-hidden cursor-pointer aspect-[3/4]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="transition-transform"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-cream" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-cream mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-cream/70">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpecialOccasions;
