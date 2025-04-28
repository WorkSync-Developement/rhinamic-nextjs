import { Award, Clock, Heart, ThumbsUp, Leaf, Shield, Droplet, Medal, FileCheck, User, Briefcase } from "lucide-react";

const benefits = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "Industry Experience",
    description: "Over 15 years of professional landscape transformation throughout San Antonio region"
  },
  {
    icon: <ThumbsUp className="w-6 h-6" />,
    title: "Regional Expertise",
    description: "Specialized knowledge of Texas native plants and sustainable xeriscaping techniques"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Dedicated Service",
    description: "Consistent, on-time project delivery with 98% client satisfaction rating"
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Quality Assurance",
    description: "Award-winning designs with over 250 successful landscape installations"
  }
];

// Professional certifications and credentials
const credentials = [
  {
    icon: <Medal className="w-6 h-6 text-rhinamic-lavender" />,
    title: "ASLA Membership",
    description: "American Society of Landscape Architects professional affiliation"
  },
  {
    icon: <FileCheck className="w-6 h-6 text-rhinamic-lavender" />,
    title: "Licensed & Insured",
    description: "TXLC-42897 Landscaping License with $2M liability coverage"
  },
  {
    icon: <User className="w-6 h-6 text-rhinamic-lavender" />,
    title: "Certified Arborists",
    description: "ISA Certified staff for proper tree care and maintenance"
  },
  {
    icon: <Briefcase className="w-6 h-6 text-rhinamic-lavender" />,
    title: "Water Management",
    description: "EPA WaterSense certified irrigation specialists"
  }
];

const ChooseUsSection = () => {
  return (
    <section className="py-24 bg-rhinamic-primary relative overflow-hidden" id="why-choose-us">
      {/* Background elements */}
      <div className="absolute -left-20 top-40 w-40 h-40 rounded-full bg-rhinamic-lavender opacity-10"></div>
      <div className="absolute right-10 bottom-20 w-60 h-60 rounded-full bg-white opacity-5"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-white">Why Choose Rhinamic?</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            At Rhinamic, we combine artistic vision with technical expertise to transform ordinary outdoor spaces into extraordinary landscapes that enhance your property's value and livability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-xl border border-gray-100 shadow-xl hover:shadow-2xl hover:shadow-rhinamic-lavender/20 transition-all duration-300 hover:-translate-y-1 group">
              <div className="bg-rhinamic-dark p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto text-white group-hover:ring-2 group-hover:ring-rhinamic-lavender/40 group-hover:ring-offset-2 transition-all">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-gray-800 group-hover:text-rhinamic-purple transition-colors">{benefit.title}</h3>
              <p className="text-gray-600 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        {/* Why Trust Us Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Trust Us</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Our professional credentials and industry certifications ensure your landscape project 
              is handled with the highest standards of expertise and care
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((credential, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/20 transition-all group">
                <div className="flex items-center mb-4">
                  {credential.icon}
                  <h3 className="ml-3 text-white font-bold">{credential.title}</h3>
                </div>
                <p className="text-white/80 text-sm">{credential.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Commitment to Excellence */}
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
                {icon: <Leaf className="text-rhinamic-purple" size={18} />, text: "Sustainable landscaping practices with native plant integration"},
                {icon: <Shield className="text-rhinamic-purple" size={18} />, text: "Fully insured ($2M liability) and licensed professionals (TXLC-42897)"},
                {icon: <Droplet className="text-rhinamic-purple" size={18} />, text: "Water-efficient irrigation systems that reduce consumption by up to 60%"}
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  {item.icon}
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/3 bg-rhinamic-dark rounded-xl p-8 text-white text-center border-b-2 border-rhinamic-lavender">
            <h4 className="text-xl font-bold mb-4">Ready to transform your space?</h4>
            <p className="mb-6">Schedule a consultation with our landscape design experts today.</p>
            <a href="#contact" className="inline-block bg-white text-rhinamic-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-100 hover:shadow-lg hover:shadow-rhinamic-lavender/20 transition-all">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUsSection;
