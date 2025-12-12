import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '$2B+', label: 'Market Cap Created' },
  { value: '15M+', label: 'Users Reached' },
  { value: '100%', label: 'Client Satisfaction' },
];

export const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Parallax background element */}
      <motion.div
        className="absolute top-1/2 -left-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]"
        style={{ y }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm text-primary tracking-widest uppercase mb-4 block">About Us</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              We turn <span className="text-gradient">bold ideas</span> into remarkable digital realities
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Igloo is a creative studio at the intersection of design, technology, and culture. 
              We partner with visionary brands and founders to build products that push boundaries 
              and captivate audiences worldwide.
            </p>
            <p className="text-muted-foreground mb-8">
              Our multidisciplinary team brings together expertise in web development, brand strategy, 
              3D design, and blockchain technology to deliver experiences that stand out in the digital landscape.
            </p>
            
            <motion.button
              className="px-8 py-4 glass font-display font-semibold rounded-full hover:bg-primary/10 transition-colors inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Story
            </motion.button>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass p-8 rounded-2xl text-center group hover:bg-primary/5 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <span className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2 block">
                  {stat.value}
                </span>
                <span className="text-muted-foreground text-sm">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
