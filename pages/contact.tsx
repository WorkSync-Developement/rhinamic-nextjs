import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Mail, Phone, MapPin, Send, Smile } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function validate() {
    if (!form.name || !form.email || !form.phone || !form.message) return "All fields are required.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) return "Enter a valid email address.";
    return "";
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const err = validate();
    if (err) return setError(err);
    setError("");
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setSubmitted(false), 6000);
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-50 to-white">
      <Navbar />
      <main className="flex-1">
        <section className="py-20">
          <div className="container-custom max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-extrabold text-purple-900 drop-shadow-sm mb-3">Let's Talk!</h1>
              <p className="text-lg text-black max-w-2xl mx-auto">
                We’d love to hear from you. Whether you have a question about our services, want to schedule a consultation, or just want to say hello—our team is ready to help!
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-10 items-stretch">
              {/* Contact Info Card */}
              <div className="md:w-1/2 bg-white/80 rounded-2xl shadow-lg border border-purple-100 p-8 flex flex-col items-center justify-center text-center mb-8 md:mb-0">
                <h2 className="text-2xl font-bold text-purple-900 mb-6">Contact Information</h2>
                <div className="flex flex-col gap-4 w-full">
                  <div className="flex items-center gap-3 text-purple-700 justify-center">
                    <MapPin size={22} />
                    <span>San Antonio, TX</span>
                  </div>
                  <div className="flex items-center gap-3 text-purple-700 justify-center">
                    <Mail size={22} />
                    <a href="mailto:rhinamic@gmail.com" className="underline">rhinamic@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-3 text-purple-700 justify-center">
                    <Phone size={22} />
                    <a href="tel:2012544911" className="underline">201-254-4911</a>
                  </div>
                </div>
                <div className="mt-8 text-purple-700 text-sm">
                  <p>Business Hours:<br />Mon–Fri: 8am–6pm<br />Sat: 9am–2pm</p>
                </div>
              </div>
              {/* Contact Form Card */}
              <form onSubmit={handleSubmit} className="md:w-1/2 bg-white rounded-2xl shadow-lg border border-purple-100 p-8 flex flex-col gap-5">
                <h2 className="text-2xl font-bold text-purple-900 mb-2">Send Us a Message</h2>
                <p className="text-black text-sm mb-2">Fill out the form below and we’ll get back to you as soon as possible.</p>
                <div>
                  <label className="block text-sm font-medium text-black mb-1">Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-300 outline-none bg-white placeholder-gray-400 text-black"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-1">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-300 outline-none bg-white placeholder-gray-400 text-black"
                    placeholder="you@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-1">Phone</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-300 outline-none bg-white placeholder-gray-400 text-black"
                    placeholder="(123) 456-7890"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-1">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-300 outline-none bg-white placeholder-gray-400 text-black"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                {error && <div className="text-red-600 text-sm">{error}</div>}
                {submitted && (
                  <div className="flex items-center gap-2 text-green-700 text-sm font-semibold bg-green-50 border border-green-200 rounded-lg px-4 py-3 mt-2">
                    <Smile size={18} /> Thank you! Your message has been sent. We’ll be in touch soon.
                  </div>
                )}
                <button
                  type="submit"
                  className="mt-2 flex items-center gap-2 justify-center bg-purple-800 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-purple-900 transition"
                >
                  <Send size={18} /> Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
