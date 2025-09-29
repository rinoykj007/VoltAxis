import { motion } from 'framer-motion';
import React from 'react';

const fadeInUp = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const scaleUp = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const slideIn = {
  hidden: { x: -30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const animations = {
  fadeInUp,
  scaleUp,
  slideIn,
  fadeIn
};

const Animate = ({
  children,
  type = 'fadeInUp',
  delay = 0,
  duration,
  className = '',
  ...props
}) => {
  const animation = animations[type] || fadeInUp;
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={animation}
      transition={{
        ...animation.visible.transition,
        delay,
        duration: duration || animation.visible.transition?.duration
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const AnimateList = ({ 
  children, 
  type = 'fadeInUp',
  staggerChildren = 0.1,
  delayChildren = 0.2,
  className = '',
  ...props 
}) => {
  const animation = animations[type] || fadeInUp;
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        visible: {
          transition: {
            staggerChildren,
            delayChildren
          }
        }
      }}
      className={className}
      {...props}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div variants={animation} key={index}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Animate;
