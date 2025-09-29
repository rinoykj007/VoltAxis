import React from "react";
import { motion } from "framer-motion";
import { Star, Phone, MessageSquare, CreditCard } from "lucide-react";
import Animate, { AnimateList } from "./Animate";
import FloatingIcon from "./FloatingIcon";
import FloatingDot from "./FloatingDot";

const HexagonImage = ({
  imageUrl = "/api/placeholder/350/400",
  alt = "Professional cleaner",
  review = {
    title: "Cleaning Reviews",
    timeAgo: "1 day Ago",
    rating: 5.0,
    reviewCount: 400,
  },
}) => {
  return (
    <div className="relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] mx-auto">
      <Animate type="fadeInUp" delay={0.1} className="relative w-full">
        <div className="relative pb-[115%] w-full">
          {/* Hexagon Image */}
          <Animate type="scaleUp" delay={0.2} className="absolute inset-0">
            <motion.div
              className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-500 p-1.5 sm:p-2"
              style={{
                clipPath:
                  "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                className="w-full h-full bg-white relative"
                style={{
                  clipPath:
                    "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                }}
                whileHover={{ rotate: 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="absolute inset-2 sm:inset-3 md:inset-4">
                  <motion.img
                    src={imageUrl}
                    alt={alt}
                    className="w-full h-full object-cover"
                    style={{
                      clipPath:
                        "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </Animate>

          {/* Review Card */}
          <Animate
            type="fadeInUp"
            delay={0.3}
            className="absolute -bottom-4 sm:-bottom-6 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-[280px]"
          >
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-3 sm:p-4 border border-gray-100"
              whileHover={{
                y: -5,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex justify-between items-center mb-1 sm:mb-2">
                <h3 className="font-bold text-sm sm:text-base md:text-lg text-slate-800">
                  {review.title}
                </h3>
                <span className="bg-green-100 text-green-700 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium whitespace-nowrap">
                  {review.timeAgo}
                </span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="flex text-orange-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 sm:w-4 sm:h-4 fill-current"
                    />
                  ))}
                </div>
                <span className="font-bold text-sm sm:text-base text-slate-800">
                  {review.rating.toFixed(1)}
                </span>
                <span className="text-slate-600 text-[10px] sm:text-xs">
                  {review.reviewCount}+ Reviews
                </span>
              </div>
            </motion.div>
          </Animate>

          {/* Floating Elements */}
          <Animate type="fadeIn" delay={0.4} className="w-full h-full">
            <FloatingDot
              className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2"
              delay={0}
            />
            <FloatingDot
              className="absolute -bottom-12 sm:-bottom-16 left-1/2 transform -translate-x-1/2"
              delay={1}
            />
          </Animate>

          {/* Left Floating Icons */}
          <Animate
            type="slideIn"
            delay={0.5}
            className="absolute top-1/3 -left-3 sm:-left-4 space-y-2 sm:space-y-4"
          >
            <FloatingIcon
              icon={Phone}
              bgColor="bg-orange-400"
              hoverColor="#f97316"
              rotation={12}
            />
            <FloatingIcon
              icon={MessageSquare}
              size="sm"
              bgColor="bg-blue-400"
              hoverColor="#3b82f6"
              rotation={-6}
            />
          </Animate>

          {/* Right Floating Icons */}
          <Animate
            type="slideIn"
            delay={0.6}
            className="absolute top-1/2 -right-3 sm:-right-4 space-y-2 sm:space-y-4"
          >
            <div className="w-12 h-3 sm:w-16 sm:h-4">
              <motion.svg
                viewBox="0 0 60 16"
                className="w-full h-full"
                animate={{
                  pathLength: [0.8, 1, 0.8],
                  pathOffset: [0, 0.1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.path
                  d="M0,8 C10,8 15,3 30,8 C45,13 50,8 60,8"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </motion.svg>
            </div>
            <FloatingIcon
              icon={CreditCard}
              size="sm"
              bgColor="bg-blue-500"
              hoverColor="#2563eb"
              rotation={12}
              className="ml-auto"
            />
          </Animate>
        </div>
      </Animate>
    </div>
  );
};
export default HexagonImage;
