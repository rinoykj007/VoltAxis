import React from "react";
import { motion } from "framer-motion";

const ServiceCard = ({
  title,
  descriptions = [],
  features = [],
  images = [],
  icon,
  iconColor = "from-blue-500 to-purple-500",
}) => {
  // Simplified, elegant animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="space-y-6"
    >
      {/* Header with Icon and Title */}
      {icon && (
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-4 mb-6"
        >
          <div
            className={`bg-gradient-to-r ${iconColor} p-3 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300`}
          >
            {icon}
          </div>
          <h3
            className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 font-serif"
            style={{ fontFamily: 'Times, "Times New Roman", serif' }}
          >
            {title}
          </h3>
        </motion.div>
      )}

      {/* Descriptions */}
      {descriptions.map((desc, index) => (
        <motion.p
          key={index}
          variants={itemVariants}
          className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4 font-serif"
          style={{ fontFamily: 'Times, "Times New Roman", serif' }}
        >
          {desc}
        </motion.p>
      ))}

      {/* Features List */}
      {features.length > 0 && (
        <motion.div variants={itemVariants} className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <span className="text-green-500 text-base">✅</span>
              <span
                className="text-sm text-neutral-600 dark:text-neutral-400 font-serif"
                style={{ fontFamily: 'Times, "Times New Roman", serif' }}
              >
                {feature}
              </span>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Images Grid */}
      {images.length > 0 && (
        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={imageVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
              }}
              transition={{ duration: 0.2 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <img
                src={image.src}
                alt={image.alt}
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60 transition-all duration-300 group-hover:brightness-110"
              />
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default ServiceCard;
