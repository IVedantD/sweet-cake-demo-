import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Wedding Client",
    text: "Sweet Crumbs made our dream wedding cake come true. The five-tier masterpiece was not only breathtaking but the most delicious cake our guests had ever tasted!",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "Birthday Celebration",
    text: "I've ordered from many bakeries, but nothing comes close to Sweet Crumbs. The chocolate indulgence cake was pure perfection. My kids are already asking when we can order again!",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Corporate Event",
    text: "Professional, creative, and absolutely delicious. Sweet Crumbs delivered 200 cupcakes for our corporate gala and every single one was a work of art.",
    rating: 5,
  },
  {
    name: "David & Anna Thompson",
    role: "Anniversary",
    text: "For our 25th anniversary, Sweet Crumbs recreated our original wedding cake with modern elegance. We were moved to tears. Truly magical craftsmanship.",
    rating: 5,
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section id="testimonials" className="section-padding bg-chocolate">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-gold-light mb-3">
            What People Say
          </p>
          <h2 className="section-title text-cream">
            Client <span className="italic text-gold-light">Reviews</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="overflow-hidden">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="text-center px-4"
            >
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="font-heading text-xl sm:text-2xl italic text-cream/90 leading-relaxed mb-8">
                "{testimonials[current].text}"
              </blockquote>
              <p className="font-body font-semibold text-cream">
                {testimonials[current].name}
              </p>
              <p className="font-body text-sm text-cream/60">
                {testimonials[current].role}
              </p>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-10">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-cream hover:border-cream/50 transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current ? "bg-gold w-8" : "bg-cream/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-cream hover:border-cream/50 transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
