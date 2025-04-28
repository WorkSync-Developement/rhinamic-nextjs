import { useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
    
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <section className="py-20 bg-white relative" id="contact">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-50 to-white"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-rhinamic-secondary/30 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute top-1/4 right-0 w-1/4 h-1/4 bg-rhinamic-lavender/20 rounded-full filter blur-3xl opacity-30"></div>
      
      <div className="container-custom relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-rhinamic-dark mb-6">Ready to Transform Your Landscape?</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Fill out the form below and our team will contact you to discuss your project
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-rhinamic-primary to-rhinamic-dark p-10 rounded-lg shadow-xl border border-rhinamic-primary/50 relative overflow-hidden">
            {/* Form background decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-rhinamic-lavender/20 rounded-full filter blur-xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-rhinamic-lavender/20 rounded-full filter blur-xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
            
            {formSubmitted ? (
              <div className="bg-green-500 border border-green-600 text-white p-8 rounded-lg text-center shadow-lg">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Thank you for your message!</h3>
                <p className="text-white text-lg">We'll be in touch with you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-rhinamic-lavender/30 rounded-md text-gray-800 placeholder-gray-500 shadow-sm focus:ring-2 focus:ring-rhinamic-lavender focus:border-transparent outline-none transition-all"
                        placeholder="Your name"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-rhinamic-lavender/30 rounded-md text-gray-800 placeholder-gray-500 shadow-sm focus:ring-2 focus:ring-rhinamic-lavender focus:border-transparent outline-none transition-all"
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                    Phone
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-rhinamic-lavender/30 rounded-md text-gray-800 placeholder-gray-500 shadow-sm focus:ring-2 focus:ring-rhinamic-lavender focus:border-transparent outline-none transition-all"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white border border-rhinamic-lavender/30 rounded-md text-gray-800 placeholder-gray-500 shadow-sm focus:ring-2 focus:ring-rhinamic-lavender focus:border-transparent outline-none transition-all"
                      placeholder="Tell us about your project"
                      required
                    />
                  </div>
                </div>
                
                <div className="flex justify-center md:justify-start pt-4">
                  <button
                    type="submit"
                    className="bg-white text-rhinamic-primary hover:text-rhinamic-purple px-8 py-3 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:bg-gray-50 flex items-center justify-center gap-2 group border-b-2 border-rhinamic-lavender/50"
                  >
                    <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
        
        {/* Contact information */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Phone size={24} />, title: "Phone", content: "201-254-4911" },
              { icon: <Mail size={24} />, title: "Email", content: "info@rhinamic.com" },
              { icon: <MapPin size={24} />, title: "Office", content: <>123 Main Street<br />San Antonio, TX 78212</> }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-lg hover:border-rhinamic-lavender/30 transition-all">
                <div className="bg-rhinamic-primary w-16 h-16 rounded-lg flex items-center justify-center mb-5 text-white shadow-md">
                  {item.icon}
                </div>
                <h3 className="text-rhinamic-dark font-bold mb-3 text-xl">{item.title}</h3>
                <p className="text-gray-700">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
