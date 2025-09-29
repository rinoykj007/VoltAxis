import { motion } from 'framer-motion';

const FloatingDot = ({ className = '', delay = 0, ...props }) => {
  const floatAnim = {
    y: [0, -10, 0],
    opacity: 1,
    transition: {
      y: {
        repeat: Infinity,
        duration: 3,
        delay: delay * 0.3,
        ease: "easeInOut"
      },
      opacity: { duration: 0.3 }
    }
  };

  return (
    <motion.div 
      className={`w-3 h-3 sm:w-4 sm:h-4 bg-slate-400 rounded-full ${className}`}
      animate={floatAnim}
      {...props}
    />
  );
};

export default FloatingDot;
