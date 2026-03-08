import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ShoppingBag } from "lucide-react";

import cakeChocolate from "@/assets/cake-chocolate.jpg";
import cakeVanilla from "@/assets/cake-vanilla.jpg";
import cakeRedvelvet from "@/assets/cake-redvelvet.jpg";
import cakeTiramisu from "@/assets/cake-tiramisu.jpg";
import cakeLemon from "@/assets/cake-lemon.jpg";
import cakeStrawberry from "@/assets/cake-strawberry.jpg";

const cakes = [
  {
    name: "Chocolate Indulgence",
    price: "$65",
    description: "Rich layers of Belgian chocolate ganache with fresh strawberries",
    image: cakeChocolate,
  },
  {
    name: "Vanilla Blossom",
    price: "$55",
    description: "Delicate vanilla sponge with buttercream and edible flowers",
    image: cakeVanilla,
  },
  {
    name: "Red Velvet Dream",
    price: "$60",
    description: "Classic red velvet with cream cheese frosting, perfectly moist",
    image: cakeRedvelvet,
  },
  {
    name: "Tiramisu Royale",
    price: "$70",
    description: "Coffee-soaked layers with mascarpone cream and cocoa dusting",
    image: cakeTiramisu,
  },
  {
    name: "Lemon Sunshine",
    price: "$50",
    description: "Zesty lemon sponge with silky cream frosting and lemon curd",
    image: cakeLemon,
  },
  {
    name: "Strawberry Cloud",
    price: "$58",
    description: "Light vanilla layers with fresh strawberries and whipped cream",
    image: cakeStrawberry,
  },
];

const CakeCard = ({ cake, index }: { cake: typeof cakes[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group glass-card rounded-2xl overflow-hidden cursor-pointer"
    >
      <div className="relative overflow-hidden aspect-square">
        <img
          src={cake.image}
          alt={cake.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-all duration-500" />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          className="absolute top-4 right-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ShoppingBag className="w-5 h-5 text-primary-foreground" />
        </motion.div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-heading text-xl font-semibold text-foreground">
            {cake.name}
          </h3>
          <span className="font-heading text-lg font-bold text-gradient-gold">
            {cake.price}
          </span>
        </div>
        <p className="font-body text-sm text-muted-foreground mb-4">
          {cake.description}
        </p>
        <button className="btn-primary w-full text-sm py-2.5">
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

const FeaturedCakes = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="menu" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">
            Our Collection
          </p>
          <h2 className="section-title text-foreground">
            Featured <span className="italic text-gradient-gold">Cakes</span>
          </h2>
          <p className="section-subtitle">
            Each cake is a masterpiece, handcrafted with premium ingredients and
            decorated with artisanal precision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cakes.map((cake, index) => (
            <CakeCard key={cake.name} cake={cake} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCakes;
