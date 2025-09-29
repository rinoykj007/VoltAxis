import React from 'react';
import { motion } from 'framer-motion';

const AnimatedTooltip = ({ items }) => {
  return (
    <div className="flex flex-row items-center justify-center">
      {items.map((item, idx) => (
        <div key={item.id} className="relative group">
          <AnimatedTooltipItem item={item} />
        </div>
      ))}
    </div>
  );
};

const AnimatedTooltipItem = ({ item }) => {
  return (
    <div className="relative">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative h-14 w-14 rounded-full border-2 border-white shadow-lg overflow-hidden"
      >
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        {item.name}
      </div>
    </div>
  );
};

export default AnimatedTooltip;
