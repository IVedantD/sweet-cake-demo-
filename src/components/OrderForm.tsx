import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";

const OrderForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    cakeType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll contact you shortly about your order.");
    setFormData({ name: "", phone: "", cakeType: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">
              Get In Touch
            </p>
            <h2 className="section-title text-foreground mb-6">
              Order Your <span className="italic text-gradient-gold">Dream Cake</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-10">
              Ready to create something extraordinary? Fill out the form and our
              cake consultants will get back to you within 24 hours to discuss
              your perfect cake.
            </p>

            <div className="space-y-6">
              {[
                { label: "Visit Us", value: "123 Baker Street, Sweet Town, ST 12345" },
                { label: "Call Us", value: "+1 (555) 123-4567" },
                { label: "Email", value: "hello@sweetcrumbs.com" },
                { label: "Hours", value: "Mon-Sat: 8am - 7pm | Sun: 9am - 5pm" },
              ].map((info) => (
                <div key={info.label}>
                  <p className="font-body font-semibold text-foreground text-sm">{info.label}</p>
                  <p className="font-body text-muted-foreground">{info.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 lg:p-10 space-y-5">
              <div>
                <label className="font-body text-sm font-medium text-foreground mb-2 block">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jane Doe"
                  className="input-elegant"
                />
              </div>
              <div>
                <label className="font-body text-sm font-medium text-foreground mb-2 block">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (555) 000-0000"
                  className="input-elegant"
                />
              </div>
              <div>
                <label className="font-body text-sm font-medium text-foreground mb-2 block">
                  Cake Type
                </label>
                <select
                  required
                  value={formData.cakeType}
                  onChange={(e) => setFormData({ ...formData, cakeType: e.target.value })}
                  className="input-elegant"
                >
                  <option value="">Select a cake type</option>
                  <option value="birthday">Birthday Cake</option>
                  <option value="wedding">Wedding Cake</option>
                  <option value="anniversary">Anniversary Cake</option>
                  <option value="custom">Custom Cake</option>
                  <option value="cupcakes">Cupcakes</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="font-body text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your dream cake..."
                  className="input-elegant resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="btn-gold w-full flex items-center justify-center gap-2 text-base"
              >
                <Send className="w-4 h-4" />
                Send Order Request
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
