import { FaIndustry, FaUserTie, FaCertificate } from "react-icons/fa";

const About = () => {
  const features = [
    {
      icon: (
        <FaIndustry className="text-5xl text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
      ),
      title: "Industrial Excellence",
      desc: "Leading supplier of industrial products & equipment in Saudi Arabia",
    },
    {
      icon: (
        <FaUserTie className="text-5xl text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
      ),
      title: "Expert Workforce",
      desc: "Skilled professionals delivering quality manpower solutions",
    },
    {
      icon: (
        <FaCertificate className="text-5xl text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
      ),
      title: "Certified Quality",
      desc: "ISO certified services with proven track record of excellence",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 animate-fade-in">
            About VoltAxis
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-slide-up">
            Your trusted partner in industrial supply, equipment rental, and
            manpower solutions across Saudi Arabia. Building excellence through
            innovation and reliability.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((item, i) => (
            <div
              key={i}
              className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20"
            >
              <div className="flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Story Section */}
      <div className="container mx-auto px-6 pb-20">
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/30 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Journey
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              Established as Saudi Arabia's premier industrial solutions
              provider, VoltAxis has been at the forefront of delivering
              cutting-edge products, reliable equipment, and skilled manpower to
              diverse industries.
            </p>
            <p className="text-lg">
              Our commitment to excellence, safety standards, and customer
              satisfaction has made us the preferred partner for major
              industrial projects across the Kingdom.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
