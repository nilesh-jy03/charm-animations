import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm text-primary tracking-widest uppercase mb-4 block">Get In Touch</span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
            Ready to accelerate your <span className="text-gradient">AI journey</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Let's discuss how our AI solutions across Azure, AWS, and Google Cloud 
            can transform your business. Schedule a free consultation today.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.a
            href="mailto:enquiry@piytechsolutions.com"
            className="px-8 py-4 bg-primary text-primary-foreground font-display font-semibold rounded-full glow-effect inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={20} />
            enquiry@piytechsolutions.com
          </motion.a>
          <motion.button
            className="px-8 py-4 glass font-display font-semibold rounded-full hover:bg-primary/10 transition-colors inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Demo
            <ArrowUpRight size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
