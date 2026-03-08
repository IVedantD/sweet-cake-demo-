import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence } from "framer-motion";

import cakeChocolate from "@/assets/cake-chocolate.jpg";
import cakeVanilla from "@/assets/cake-vanilla.jpg";
import cakeRedvelvet from "@/assets/cake-redvelvet.jpg";
import cakeTiramisu from "@/assets/cake-tiramisu.jpg";
import cakeLemon from "@/assets/cake-lemon.jpg";
import cakeStrawberry from "@/assets/cake-strawberry.jpg";
import cakeBirthday from "@/assets/cake-birthday.jpg";
import cakeWedding from "@/assets/cake-wedding.jpg";

const images = [
  { src: cakeChocolate, alt: "Chocolate cake", span: "col-span-1 row-span-1" },
  { src: cakeWedding, alt: "Wedding cake", span: "col-span-1 row-span-2" },
  { src: cakeVanilla, alt: "Vanilla cake", span: "col-span-1 row-span-1" },
  { src: cakeRedvelvet, alt: "Red velvet", span: "col-span-1 row-span-1" },
  { src: cakeBirthday, alt: "Birthday cake", span: "col-span-1 row-span-1" },
  { src: cakeTiramisu, alt: "Tiramisu cake", span: "col-span-1 row-span-1" },
  { src: cakeLemon, alt: "Lemon cake", span: "col-span-1 row-span-1" },
  { src: cakeStrawberry, alt: "Strawberry cake", span: "col-span-1 row-span-1" },
];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding bg-blush">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">
            Our Creations
          </p>
          <h2 className="section-title text-foreground">
            Cake <span className="italic text-gradient-gold">Gallery</span>
          </h2>
          <p className="section-subtitle">
            A showcase of our finest works — each one crafted with passion and precision.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((img, index) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`${img.span} group relative rounded-2xl overflow-hidden cursor-pointer`}
              onClick={() => setSelected(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-300 flex items-center justify-center">
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  className="font-body text-sm text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  View
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.button
              className="absolute top-6 right-6 text-cream hover:text-primary transition-colors"
              onClick={() => setSelected(null)}
            >
              <X size={32} />
            </motion.button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={selected}
              alt="Cake preview"
              className="max-w-full max-h-[85vh] rounded-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
