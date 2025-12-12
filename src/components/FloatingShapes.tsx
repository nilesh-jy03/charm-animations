import { motion } from 'framer-motion';

export const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Main glow orb */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] animate-pulse-glow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />
      
      {/* Ice shard 1 */}
      <motion.div
        className="absolute top-20 right-[15%] w-32 h-48 ice-shard rounded-lg rotate-12 animate-float"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />
      
      {/* Ice shard 2 */}
      <motion.div
        className="absolute top-[40%] left-[10%] w-24 h-36 ice-shard rounded-lg -rotate-6 animate-float-delayed"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
      
      {/* Ice shard 3 */}
      <motion.div
        className="absolute bottom-[20%] right-[20%] w-20 h-32 ice-shard rounded-lg rotate-45 animate-float-slow"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 0.4, y: 0 }}
        transition={{ duration: 1.5, delay: 0.7 }}
      />
      
      {/* Small floating dots */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/40 rounded-full animate-float"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${10 + Math.random() * 80}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${5 + Math.random() * 5}s`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 + i * 0.1 }}
        />
      ))}
      
      {/* Accent glow - purple */}
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2, delay: 0.5 }}
      />
    </div>
  );
};
