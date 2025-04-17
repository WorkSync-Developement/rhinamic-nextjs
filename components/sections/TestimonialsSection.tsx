import { useState, useEffect, useCallback } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Rhinamic transformed our yard into a beautiful oasis. Professional, reliable, and great attention to detail.",
    name: "Deborah M.",
    location: "Alamo Heights"
  },
  {
    quote: "We're extremely pleased with our new landscape design. The Rhinamic team was courteous, prompt, and exceeded our expectations.",
    name: "Michael S.",
    location: "Stone Oak"
  },
  {
    quote: "Their hardscaping work is incredible. They created a beautiful patio space that has become our favorite spot to entertain guests.",
    name: "Jennifer L.",
    location: "Boerne"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  
  // Use useCallback to memoize functions that will be used in effects 
  const goToNext = useCallback(() => {
    if (sliding) return;
    setDirection('right');
    setSliding(true);
    setTimeout(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
      setTimeout(() => {
        setSliding(false);
      }, 50);
    }, 300);
  }, [sliding]);
  
  const goToPrevious = () => {
    if (sliding) return;
    setDirection('left');
    setSliding(true);
    setTimeout(() => {
      setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => {
        setSliding(false);
      }, 50);
    }, 300);
  };
  
  const handleDotClick = (index: number) => {
    if (sliding) return;
    setDirection(index > activeIndex ? 'right' : 'left');
    setSliding(true);
    setTimeout(() => {
      setActiveIndex(index);
      setTimeout(() => {
        setSliding(false);
      }, 50);
    }, 300);
  };
  
  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 7000);
    
    return () => clearInterval(interval);
  }, [goToNext]);
  
  return (
    <section className="py-20 bg-purple-800" id="testimonials">
      <div className="container-custom">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-6 text-white">What Our Clients Say</h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Hear what our clients have to say about their experience working with us
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto relative overflow-hidden">
          <div 
            className={`transition-transform duration-300 ease-in-out ${sliding ? 'opacity-0' : 'opacity-100'}`}
            style={{ 
              transform: sliding 
                ? `translateX(${direction === 'right' ? '-10%' : '10%'})` 
                : 'translateX(0)' 
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-5 bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="bg-gray-800 p-8 md:p-12 md:col-span-2 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-purple-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">{testimonials[activeIndex].name.charAt(0)}</span>
                  </div>
                  <h3 className="text-white text-xl font-bold">{testimonials[activeIndex].name}</h3>
                  <p className="text-white text-sm">{testimonials[activeIndex].location}</p>
                </div>
              </div>
              
              <div className="p-8 md:p-12 md:col-span-3 text-gray-800">
                <Quote className="text-purple-300 w-16 h-16 mb-6" />
                <p className="text-xl text-gray-700 mb-8 font-light italic">"{testimonials[activeIndex].quote}"</p>
              </div>
            </div>
          </div>
          
          {/* Navigation controls */}
          <div className="flex justify-center gap-4 mt-8">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all ${activeIndex === index ? 'bg-white scale-125' : 'bg-gray-300'}`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Arrow navigation */}
          <button 
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 bg-white p-2 rounded-full shadow-lg text-purple-800 hover:bg-gray-100 focus:outline-none md:block hidden"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 bg-white p-2 rounded-full shadow-lg text-purple-800 hover:bg-gray-100 focus:outline-none md:block hidden"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
