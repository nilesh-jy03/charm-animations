import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Cloud, Database, Shield, Zap, LineChart } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'Generative AI',
    description: 'Harness the power of GPT, Claude, Gemini, and custom LLMs for intelligent content generation and automation.',
  },
  {
    icon: Cloud,
    title: 'Cloud Migration',
    description: 'Seamless migration to Azure, AWS, or GCP with AI-optimized architectures and zero downtime strategies.',
  },
  {
    icon: Database,
    title: 'Data & Analytics',
    description: 'Transform raw data into actionable insights with AI-powered analytics, data lakes, and real-time dashboards.',
  },
  {
    icon: Shield,
    title: 'AI Security',
    description: 'Enterprise-grade security with AI-driven threat detection, compliance automation, and identity management.',
  },
  {
    icon: Zap,
    title: 'Intelligent Automation',
    description: 'Streamline operations with RPA, intelligent document processing, and AI-powered workflow automation.',
  },
  {
    icon: LineChart,
    title: 'ML Operations',
    description: 'End-to-end MLOps pipelines for model training, deployment, monitoring, and continuous improvement.',
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
          <span className="text-sm text-primary tracking-widest uppercase mb-4 block">What We Offer</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            AI <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive AI solutions designed to transform your business operations, 
            enhance decision-making, and drive sustainable growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group glass p-8 md:p-10 rounded-2xl hover:bg-primary/5 transition-all duration-500 relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
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
