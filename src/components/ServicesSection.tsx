import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Palette, Code, Boxes, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Brand Identity',
    description: 'Crafting distinctive visual identities that capture your essence and resonate with your audience.',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Building performant, beautiful websites and applications with cutting-edge technologies.',
  },
  {
    icon: Boxes,
    title: '3D & Motion',
    description: 'Creating immersive 3D experiences and captivating motion design that brings your brand to life.',
  },
  {
    icon: Sparkles,
    title: 'Web3 Solutions',
    description: 'Developing blockchain-powered products from NFT collections to DeFi platforms.',
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm text-primary tracking-widest uppercase mb-4 block">What We Do</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive suite of creative services to help brands 
            stand out in the digital landscape.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group glass p-8 md:p-10 rounded-2xl hover:bg-primary/5 transition-all duration-500 relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
            >
              {/* Icon */}
              <motion.div
                className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                <service.icon className="w-7 h-7 text-primary" />
              </motion.div>

              {/* Content */}
              <h3 className="font-display text-2xl font-bold mb-4 group-hover:text-gradient transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>

              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
