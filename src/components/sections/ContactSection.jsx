import React, { useState } from "react";
import { FiPhone, FiMail, FiMapPin, FiSend } from "react-icons/fi";
import Animate, { AnimateList } from "../ui/Animate";
import FloatingDot from "../ui/FloatingDot";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    alert("Thank you! We'll contact you soon.");
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Floating Background Elements */}
      <FloatingDot
        className="absolute top-20 left-10 bg-blue-300 opacity-30"
        delay={0}
      />
      <FloatingDot
        className="absolute top-40 right-20 bg-purple-300 opacity-30"
        delay={1}
      />
      <FloatingDot
        className="absolute bottom-32 left-1/4 bg-green-300 opacity-30"
        delay={2}
      />
      <FloatingDot
        className="absolute bottom-20 right-10 bg-pink-300 opacity-30"
        delay={3}
      />

      <div className="container mx-auto px-6 relative z-10">
        <Animate type="fadeInUp" className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Ready to elevate your industrial operations?
          </p>
        </Animate>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Visual Contact Info */}
          <AnimateList
            type="slideIn"
            staggerChildren={0.2}
            className="space-y-8"
          >
            {/* Location Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
              <div className="flex items-center gap-6">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200"
                  alt="Location"
                  className="w-20 h-20 rounded-2xl object-cover shadow-lg"
                />
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl">
                      <FiMapPin className="text-white text-xl" />
                    </div>
                    <h4 className="font-bold text-gray-800">Saudi Arabia</h4>
                  </div>
                  <p className="text-gray-600">Industrial District, Riyadh</p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
              <div className="flex items-center gap-6">
                <img
                  src="https://images.unsplash.com/photo-1512428813834-c702c7702b78?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200"
                  alt="Contact"
                  className="w-20 h-20 rounded-2xl object-cover shadow-lg"
                />
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-gradient-to-r from-green-500 to-teal-500 p-3 rounded-xl">
                      <FiPhone className="text-white text-xl" />
                    </div>
                    <h4 className="font-bold text-gray-800">24/7 Support</h4>
                  </div>
                  <p className="text-gray-600">+966 123 456 789</p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
              <div className="flex items-center gap-6">
                <img
                  src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200"
                  alt="Email"
                  className="w-20 h-20 rounded-2xl object-cover shadow-lg"
                />
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl">
                      <FiMail className="text-white text-xl" />
                    </div>
                    <h4 className="font-bold text-gray-800">Email Us</h4>
                  </div>
                  <p className="text-gray-600">info@voltaxis.sa</p>
                </div>
              </div>
            </div>
          </AnimateList>

          {/* Contact Form */}
          <Animate type="scaleUp" delay={0.3}>
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-white/30">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-6 py-4 bg-white/70 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-800 placeholder-gray-500"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="px-6 py-4 bg-white/70 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-800 placeholder-gray-500"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="px-6 py-4 bg-white/70 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-800 placeholder-gray-500"
                  />
                </div>

                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className="w-full px-6 py-4 bg-white/70 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-800 placeholder-gray-500 resize-none"
                  required
                />

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-2xl flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <FiSend className="text-xl" />
                  Send Message
                </button>
              </form>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
