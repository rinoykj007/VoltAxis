import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: 'The team at VoltAxis did an amazing job with our electrical work. They were professional, efficient, and left the place spotless. Highly recommend their services!',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Business Owner',
    content: 'We\'ve been using VoltAxis for all our maintenance needs at our office building. Their team is reliable, punctual, and always does excellent work.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Property Manager',
    content: 'I manage several rental properties and VoltAxis has been a lifesaver. They handle everything from plumbing to electrical issues quickly and professionally.',
    rating: 4
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Homeowner',
    content: 'Great service! The technician was knowledgeable and fixed our issue on the first visit. Will definitely call them again for any home repairs.',
    rating: 5
  },
  {
    id: 5,
    name: 'Jennifer Lee',
    role: 'Homeowner',
    content: 'I was impressed by their attention to detail and the quality of their work. They went above and beyond to ensure everything was perfect.',
    rating: 5
  },
  {
    id: 6,
    name: 'Robert Taylor',
    role: 'Business Owner',
    content: 'Professional and reliable service. They completed the job on time and within budget. Will be using them for all our future maintenance needs.',
    rating: 4
  }
];

const Testimonials = () => {
  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">What Our Clients Say</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 text-primary">
                <FaQuoteLeft className="text-4xl opacity-10" />
              </div>
              <div className="mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary font-bold text-xl mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to experience our service?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join our growing list of satisfied customers. Contact us today for a free quote!
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
