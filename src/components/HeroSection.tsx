import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Tagline */}
        <motion.div
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-sm text-muted-foreground">Azure • AWS • Google Cloud Partner</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <span className="text-foreground">Unlock </span>
          <span className="text-gradient">AI Power</span>
          <br />
          <span className="text-foreground">for your business</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Your trusted AI solutions partner across Azure, AWS, and Google Cloud. 
          We accelerate digital transformation with cutting-edge AI and multi-cloud expertise.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="px-8 py-4 bg-primary text-primary-foreground font-display font-semibold rounded-full glow-effect hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Solutions
          </motion.button>
          <motion.button
            className="px-8 py-4 glass font-display font-semibold rounded-full hover:bg-secondary/50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Consultation
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-muted-foreground"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
};
