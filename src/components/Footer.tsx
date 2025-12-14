import { motion } from 'framer-motion';

const socialLinks = ['LinkedIn', 'Twitter', 'GitHub', 'YouTube'];
const footerLinks = ['Privacy Policy', 'Terms of Service'];

export const Footer = () => {
  return (
    <footer className="relative py-12 px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <img src="/images/piytech-logo.png" alt="PIYTECH" className="h-8" />
          </motion.a>

          {/* Cloud Partners */}
          <div className="flex items-center gap-6 text-muted-foreground text-sm">
            <span>Azure Partner</span>
            <span>•</span>
            <span>AWS Partner</span>
            <span>•</span>
            <span>Google Cloud Partner</span>
          </div>

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
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 PIYTECH. All rights reserved.
          </p>
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
      </div>
    </footer>
  );
};
