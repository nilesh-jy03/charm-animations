import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Pudgy Penguins',
    category: 'Brand Identity / Web3',
    description: 'Redefining digital collectibles with playful characters and community-driven experiences.',
    gradient: 'from-arctic-400/20 to-accent/20',
  },
  {
    id: 2,
    title: 'Overpass IP',
    category: 'Platform / Infrastructure',
    description: 'Building the infrastructure for the next generation of intellectual property management.',
    gradient: 'from-accent/20 to-primary/20',
  },
  {
    id: 3,
    title: 'Arctic Protocol',
    category: 'DeFi / Web3',
    description: 'A decentralized finance protocol bringing liquidity solutions to emerging markets.',
    gradient: 'from-primary/20 to-arctic-300/20',
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
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
      <div className={`relative overflow-hidden rounded-2xl glass p-8 md:p-12 h-[400px] md:h-[500px] flex flex-col justify-end bg-gradient-to-br ${project.gradient}`}>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Floating number */}
        <span className="absolute top-8 right-8 font-display text-8xl font-bold text-foreground/5 group-hover:text-foreground/10 transition-colors">
          0{project.id}
        </span>
        
        {/* Content */}
        <div className="relative z-10">
          <span className="text-sm text-muted-foreground mb-2 block">{project.category}</span>
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 group-hover:text-gradient transition-all duration-300">
            {project.title}
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md">{project.description}</p>
          
          <motion.button
            className="inline-flex items-center gap-2 text-primary font-medium"
            whileHover={{ x: 5 }}
          >
            View Project <ArrowUpRight size={18} />
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
    <section id="work" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm text-primary tracking-widest uppercase mb-4 block">Our Portfolio</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
