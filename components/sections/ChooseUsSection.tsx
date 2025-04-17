import { Award, Clock, Heart, ThumbsUp, Leaf, Shield, Droplet } from "lucide-react";

const benefits = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "Experience",
    description: "Over 10 years transforming San Antonio yards into beautiful landscapes"
  },
  {
    icon: <ThumbsUp className="w-6 h-6" />,
    title: "Local Expertise",
    description: "Specialized knowledge of regional plants and soil conditions"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Reliability",
    description: "Consistent, on-time service you can always count on"
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Customer Satisfaction",
    description: "Hundreds of happy clients with stunning outdoor spaces"
  }
];

const ChooseUsSection = () => {
  return (
    <section className="py-24 bg-purple-800 relative overflow-hidden" id="why-choose-us">
      {/* Background elements */}
      <div className="absolute -left-20 top-40 w-40 h-40 rounded-full bg-purple-500 opacity-10"></div>
      <div className="absolute right-10 bottom-20 w-60 h-60 rounded-full bg-white opacity-5"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-white">Why Choose Rhinamic?</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            At Rhinamic, we combine artistic vision with technical expertise to transform ordinary outdoor spaces into extraordinary landscapes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-purple-700 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto text-white">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-gray-800">{benefit.title}</h3>
              <p className="text-gray-600 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        {/* Additional content */}
        <div className="mt-20 bg-white p-10 rounded-2xl shadow-xl border border-gray-100 flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-8 md:mb-0 md:pr-10">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Commitment to Excellence</h3>
            <p className="text-gray-600 mb-4">
              Every project at Rhinamic begins with a thorough understanding of your vision and requirements. 
              Our expert designers work closely with you to create a personalized landscape that reflects your 
              style while enhancing the natural beauty of your property.
            </p>
            <ul className="space-y-2">
              {[
                {icon: <Leaf className="text-purple-700" size={18} />, text: "Sustainable landscaping practices"},
                {icon: <Shield className="text-purple-700" size={18} />, text: "Fully insured and licensed professionals"},
                {icon: <Droplet className="text-purple-700" size={18} />, text: "Water-efficient irrigation solutions"}
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  {item.icon}
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/3 bg-purple-800 rounded-xl p-8 text-white text-center">
            <h4 className="text-xl font-bold mb-4">Ready to transform your space?</h4>
            <p className="mb-6">Schedule a free consultation with our landscape design experts.</p>
            <a href="#contact" className="inline-block bg-white text-purple-800 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUsSection;
