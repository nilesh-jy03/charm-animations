import { motion } from 'framer-motion';

const socialLinks = ['Twitter', 'LinkedIn', 'Instagram', 'Dribbble'];
const footerLinks = ['Privacy Policy', 'Terms of Service'];

export const Footer = () => {
  return (
    <footer className="relative py-12 px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.a
            href="#"
            className="font-display text-xl font-bold text-gradient"
            whileHover={{ scale: 1.05 }}
          >
            IGLOO
          </motion.a>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link}
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ y: -2 }}
              >
                {link}
              </motion.a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Igloo Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
