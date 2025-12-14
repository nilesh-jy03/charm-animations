import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const solutions = [
  {
    id: 1,
    title: 'Azure AI Solutions',
    category: 'Microsoft Azure Partner',
    description: 'Enterprise-grade AI services with Azure OpenAI, Cognitive Services, and Machine Learning for intelligent automation.',
    gradient: 'from-arctic-400/20 to-accent/20',
  },
  {
    id: 2,
    title: 'AWS AI/ML Platform',
    category: 'Amazon Web Services Partner',
    description: 'Scalable AI solutions leveraging SageMaker, Bedrock, and AWS AI services for predictive analytics and automation.',
    gradient: 'from-accent/20 to-primary/20',
  },
  {
    id: 3,
    title: 'Google Cloud AI',
    category: 'Google Cloud Partner',
    description: 'Cutting-edge AI with Vertex AI, Gemini, and Google Cloud AI Platform for transformative business intelligence.',
    gradient: 'from-primary/20 to-arctic-300/20',
  },
];

const SolutionCard = ({ solution, index }: { solution: typeof solutions[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <div className={`relative overflow-hidden rounded-2xl glass p-8 md:p-12 h-[400px] md:h-[500px] flex flex-col justify-end bg-gradient-to-br ${solution.gradient}`}>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Floating number */}
        <span className="absolute top-8 right-8 font-display text-8xl font-bold text-foreground/5 group-hover:text-foreground/10 transition-colors">
          0{solution.id}
        </span>
        
        {/* Content */}
        <div className="relative z-10">
          <span className="text-sm text-muted-foreground mb-2 block">{solution.category}</span>
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 group-hover:text-gradient transition-all duration-300">
            {solution.title}
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md">{solution.description}</p>
          
          <motion.button
            className="inline-flex items-center gap-2 text-primary font-medium"
            whileHover={{ x: 5 }}
          >
            Learn More <ArrowUpRight size={18} />
          </motion.button>
        </div>
        
        {/* Animated border */}
        <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-primary/30 transition-colors duration-500" />
      </div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="solutions" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm text-primary tracking-widest uppercase mb-4 block">Multi-Cloud AI</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            Cloud <span className="text-gradient">Platforms</span>
          </h2>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <SolutionCard key={solution.id} solution={solution} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
