import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const links = [
    { label: "Home", href: "#home" },
    { label: "Menu", href: "#menu" },
    { label: "About", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-chocolate text-chocolate-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-4">
              Sweet <span className="text-gold-light">Crumbs</span>
            </h3>
            <p className="font-body text-cream/60 text-sm leading-relaxed">
              Handcrafted luxury cakes made with love and the finest ingredients.
              Every cake tells a story.
            </p>
            <div className="flex gap-4 mt-6">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-gold hover:border-gold transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-cream">Quick Links</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-cream/60 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-cream">Contact</h4>
            <div className="space-y-3 font-body text-sm text-cream/60">
              <p>123 Baker Street, Sweet Town, ST 12345</p>
              <p>+1 (555) 123-4567</p>
              <p>hello@sweetcrumbs.com</p>
              <p>Mon-Sat: 8am - 7pm</p>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-12 pt-8 text-center">
          <p className="font-body text-sm text-cream/40">
            © 2026 Sweet Crumbs. All rights reserved. Made with ♥
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
