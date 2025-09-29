import React from "react";
import WhatsAppButton from "../ui/WhatsAppButton";

const HeroSection = () => {
  const customerImages = [
    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
  ];

  return (
    <div className="min-h-screen w-full bg-white flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight font-serif">
              Choose Experts to Complete Your{" "}
              <span className="relative text-blue-600">
                Job
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3"
                  viewBox="0 0 200 12"
                >
                  <path
                    d="M0 8 Q50 2 100 6 T200 4"
                    stroke="#2563eb"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </span>{" "}
              Done
            </h1>

            <p className="text-xl text-gray-600 max-w-lg font-serif">
              Compare reviews, check availability, and book services with
              confidence — all in one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <WhatsAppButton
                phoneNumber="1234567890"
                message="Hi! I'm interested in your services. Can you help me?"
                className=""
                showIcon={true}
                variant="primary"
                size="md"
              />

              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-300 font-serif">
                Learn More
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-4 pt-4">
              <div className="flex -space-x-3">
                {customerImages.map((imageUrl, index) => (
                  <img
                    key={index}
                    src={imageUrl}
                    alt={`Customer ${index + 1}`}
                    className="w-10 h-10 rounded-full border-2 border-white object-cover hover:scale-110 transition-transform duration-300"
                  />
                ))}
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900 font-serif">
                  2k+ Happy Customers
                </div>
                <div className="text-sm text-gray-600 font-serif">
                  Trusted worldwide
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <img
                src="https://ik.imagekit.io/hkwdglek8/VoltAxis/ChatGPT_Image_Sep_29__2025__08_26_15_AM-removebg-preview.jpg?updatedAt=1759131509193"
                alt="Professional service"
                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-yellow-300/30 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-purple-300/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
