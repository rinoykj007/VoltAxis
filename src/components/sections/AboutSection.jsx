import React from "react";
import { FiBriefcase, FiUsers, FiAward } from "react-icons/fi";

const AboutSection = () => {
  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="lg:w-1/2 group">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Industrial Excellence"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl"></div>

              {/* Floating Stats */}
              <div className="absolute -bottom-8 -right-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl animate-bounce">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
                About VoltAxis
              </span>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Industrial Excellence Delivered
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Saudi Arabia's trusted partner for industrial solutions,
                equipment & skilled workforce.
              </p>
            </div>

            {/* Animated Stats Cards */}
            <div className="grid grid-cols-3 gap-4">
              {[
                {
                  icon: <FiBriefcase className="w-8 h-8" />,
                  value: "15+",
                  label: "Years",
                },
                {
                  icon: <FiUsers className="w-8 h-8" />,
                  value: "1000+",
                  label: "Clients",
                },
                {
                  icon: <FiAward className="w-8 h-8" />,
                  value: "100%",
                  label: "Quality",
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500 text-center group"
                >
                  <div className="text-blue-600 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-800">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Discover More →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
