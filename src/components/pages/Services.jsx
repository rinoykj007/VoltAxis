import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Electrical Services',
    description: 'Professional electrical repairs and installations for your home or business.',
    icon: '⚡'
  },
  {
    title: 'Plumbing',
    description: 'Expert plumbing solutions for all your needs, big or small.',
    icon: '🚿'
  },
  {
    title: 'Carpentry',
    description: 'Custom woodworking and repairs to enhance your space.',
    icon: '🔨'
  },
  {
    title: 'Painting',
    description: 'Interior and exterior painting services with quality finishes.',
    icon: '🎨'
  },
  {
    title: 'HVAC',
    description: 'Heating, ventilation, and air conditioning services.',
    icon: '❄️'
  },
  {
    title: 'General Repairs',
    description: 'All-around handyman services for your home maintenance needs.',
    icon: '🔧'
  }
];

const Services = () => {
  return (
    <div className="py-16">
      <div className="container">
        <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          We offer a wide range of professional handyman services to meet all your home repair and maintenance needs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link 
                to="/contact" 
                className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Book Service
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Need something else?</h2>
          <p className="text-gray-600 mb-6">
            Don't see the service you're looking for? Contact us to discuss your specific needs, and we'll be happy to help!
          </p>
          <Link 
            to="/contact" 
            className="btn btn-primary"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
