import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroCake from "@/assets/hero-cake.jpg";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <img
          src={heroCake}
          alt="Luxury artisanal cake"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </motion.div>

      {/* Floating decorative circles */}
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gold/10 blur-2xl"
      />
      <motion.div
        animate={{ y: [15, -15, 15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 right-16 w-48 h-48 rounded-full bg-rose/10 blur-2xl"
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-body text-sm tracking-[0.3em] uppercase text-gold-light mb-6"
        >
          ✦ Artisan Bakery Since 2010 ✦
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-heading text-5xl sm:text-6xl lg:text-8xl font-bold text-cream leading-tight mb-6"
        >
          Handcrafted Cakes
          <br />
          <span className="italic font-normal text-gold-light">Made With Love</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-body text-lg text-cream/80 max-w-xl mx-auto mb-10"
        >
          Every cake tells a story. We craft bespoke, luxurious cakes for life's
          sweetest moments using the finest ingredients.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#contact" className="btn-gold text-base">
            Order Now
          </a>
          <a href="#menu" className="btn-outline border-cream/50 text-cream hover:bg-cream/10 hover:text-cream">
            View Menu
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cream/40 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-cream/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
