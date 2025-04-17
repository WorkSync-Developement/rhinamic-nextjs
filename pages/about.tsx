import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const aboutCopy = [
  {
    heading: "Who We Are",
    text: `Welcome to Rhinamic, your local experts in landscape design and outdoor living spaces in San Antonio, TX. Whether it's scorching hot or a rare cold front rolls in, we're out there building better backyards. (We’ll sit out floods and mud though—everyone has a limit.)`
  },
  {
    heading: "Our Legacy",
    text: `With over 41 years of hands-on experience as independent contractors, our family-run business is passionate about turning your outdoor space into something incredible. We don't just landscape—we bring vision and craftsmanship together to create a space that actually fits your lifestyle.\n\nI'm Nils Ruona, and I come from a long line of old-school builders. My father, his father, and my great-uncle—all concrete, masonry, carpentry, and garden pros. That deep trade experience passed down through generations means more creative, custom options for you, whether it’s a stone patio, outdoor kitchen, retaining wall, or native plant landscaping. So go ahead—dream big. We can build it.`
  },
  {
    heading: "How We Work",
    text: `At Rhinamic, we believe in long-term relationships over quick wins. Most of our work comes from referrals, and we take that seriously—because when you recommend us, you’re staking your name on our work, and we’re proud to deliver.\n\nOur process starts with a conversation. We want to hear your vision, your challenges, and how you want to use your outdoor space. Whether you’re dreaming of a low-maintenance yard, custom hardscape, or a fully xeriscaped front lawn, we build around what matters to you.\n\nFrom there, we create a design—collaborative and flexible. We’ll walk through it together, make tweaks, and build a phased plan that matches your timeline and budget. Prioritized steps, smart cut-off points, and no wasted effort—so you can start enjoying your space now, and expand later when it makes sense.`
  },
  {
    heading: "Our Work",
    text: `As you browse through our photo galleries, look closely—you’ll see the craftsmanship in the details. Our past clients sure have.\n\nEvery project began with a line like: "Well, here’s what I was hoping for..." And we got to work turning it into reality.\n\nNow, it’s your turn. Let us build something you’re proud of—something that stands out in your San Antonio neighborhood, and lasts for years to come.`
  }
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="py-16 bg-green-50/30">
          <div className="container-custom max-w-3xl mx-auto px-4">
            <h1 className="text-4xl font-semibold text-center mb-6 text-green-900">About Us</h1>
            <p className="text-lg text-center text-green-900 mb-12 max-w-2xl mx-auto">
              Family-owned. Rooted in San Antonio. Dedicated to honest, lasting landscape work.
            </p>
            <div className="space-y-12">
              {aboutCopy.map((section, idx) => (
                <div key={idx}>
                  <h2 className="text-xl font-medium text-purple-800 mb-2 border-l-4 border-green-400 pl-4 bg-transparent">
                    {section.heading}
                  </h2>
                  <p className="text-base text-gray-800 leading-relaxed whitespace-pre-line bg-transparent">
                    {section.text}
                  </p>
                  {idx !== aboutCopy.length - 1 && (
                    <hr className="my-8 border-t border-green-100" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
