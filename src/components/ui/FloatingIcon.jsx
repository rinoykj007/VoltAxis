import { motion } from 'framer-motion';

const FloatingIcon = ({ 
  icon: Icon, 
  bgColor = 'bg-blue-400', 
  hoverColor = '#3b82f6',
  size = 'md',
  className = '',
  rotation = 0,
  ...props 
}) => {
  const sizes = {
    sm: 'w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10',
    md: 'w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12',
  };

  const iconSizes = {
    sm: 'w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5',
    md: 'w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6',
  };

  return (
    <motion.div
      className={`${sizes[size]} ${bgColor} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg ${className}`}
      whileHover={{ 
        scale: 1.1, 
        rotate: rotation > 0 ? 15 : -15, 
        backgroundColor: hoverColor 
      }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
      style={{ rotate: rotation }}
      {...props}
    >
      <Icon className={`${iconSizes[size]} text-white`} />
    </motion.div>
  );
};

export default FloatingIcon;
