import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = ({
  phoneNumber = "1234567890",
  message = "Hi! I'm interested in your services. Can you help me?",
  className = "",
  children,
  variant = "primary",
  size = "md",
  showIcon = true,
}) => {
  const handleWhatsAppClick = () => {
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  // Size variants
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-4 text-base",
    lg: "px-10 py-5 text-lg",
  };

  // Style variants
  const variantClasses = {
    primary:
      "bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-700 hover:to-green-600 shadow-lg hover:shadow-xl",
    secondary:
      "bg-white text-green-600 border-2 border-green-600 hover:bg-green-50",
    outline:
      "border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white",
    floating:
      "bg-green-500 text-white shadow-2xl hover:bg-green-600 fixed bottom-6 right-6 z-50 rounded-full p-4",
  };

  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-2xl transition-all duration-300 hover:scale-105 font-serif";

  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  return (
    <button
      onClick={handleWhatsAppClick}
      className={buttonClasses}
      title={`Chat with us on WhatsApp`}
    >
      {showIcon && (
        <FaWhatsapp
          className={
            size === "sm" ? "w-4 h-4" : size === "lg" ? "w-6 h-6" : "w-5 h-5"
          }
        />
      )}
      {children || "Chat on WhatsApp"}
    </button>
  );
};

export default WhatsAppButton;
