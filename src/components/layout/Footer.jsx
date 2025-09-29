import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiArrowRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
          {/* Company Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">V</span>
              </div>
              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  VoltAxis
                </h3>
                <p className="text-sm text-gray-500 font-medium">
                  Industrial Excellence
                </p>
              </div>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed max-w-md">
              Leading Saudi Arabia's industrial transformation with premium
              products, reliable equipment, and skilled workforce solutions.
            </p>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                Ready to Get Started?
              </h4>
              <p className="text-gray-600 mb-4">
                Transform your operations with our industrial solutions
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Get Quote <FiArrowRight className="text-lg" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-gray-800 relative">
              Services
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Product Supply", icon: "📦" },
                { name: "Equipment Rental", icon: "🏗️" },
                { name: "Manpower Supply", icon: "👥" },
                { name: "Technical Support", icon: "🔧" },
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    to="/services"
                    className="group flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors duration-300 p-2 rounded-lg hover:bg-blue-50"
                  >
                    <span className="text-xl">{service.icon}</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {service.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-gray-800 relative">
              Contact Us
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-green-500 to-teal-500 rounded-full"></div>
            </h4>
            <ul className="space-y-6">
              <li className="group">
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                    <FiMapPin className="text-white text-lg" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">
                      Riyadh, Saudi Arabia
                    </p>
                    <p className="text-gray-600 text-sm">Industrial District</p>
                  </div>
                </div>
              </li>

              <li className="group">
                <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-teal-50 transition-all duration-300">
                  <div className="bg-gradient-to-r from-green-500 to-teal-500 p-3 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                    <FiPhone className="text-white text-lg" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">
                      +966 123 456 789
                    </p>
                    <p className="text-gray-600 text-sm">24/7 Available</p>
                  </div>
                </div>
              </li>

              <li className="group">
                <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                    <FiMail className="text-white text-lg" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">
                      info@voltaxis.sa
                    </p>
                    <p className="text-gray-600 text-sm">Quick Response</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <p className="text-gray-600 font-medium">Follow Us:</p>
              <div className="flex gap-3">
                {[
                  { icon: FiLinkedin, color: "from-blue-600 to-blue-700" },
                  { icon: FiTwitter, color: "from-sky-500 to-sky-600" },
                  { icon: FiInstagram, color: "from-pink-500 to-rose-500" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`group bg-gradient-to-r ${social.color} p-3 rounded-xl text-white shadow-md hover:shadow-xl transform hover:scale-110 transition-all duration-300`}
                  >
                    <social.icon className="text-lg group-hover:rotate-12 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-600 mb-2">
                &copy; {new Date().getFullYear()} VoltAxis. All rights reserved.
              </p>
              <div className="flex gap-4 text-sm">
                <Link
                  to="/privacy"
                  className="text-gray-500 hover:text-blue-600 transition-colors"
                >
                  Privacy Policy
                </Link>
                <span className="text-gray-300">•</span>
                <Link
                  to="/terms"
                  className="text-gray-500 hover:text-blue-600 transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
