import { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { CheckCircle, Phone } from 'lucide-react';
import Layout from './Layout';

type ServiceFeature = {
  title: string;
  description: string;
};

type Plan = {
  name: string;
  icon: ReactNode;
  features: string[];
  description: string;
  highlight?: boolean;
};

type SeasonalCare = {
  season: string;
  items: string[];
};

type ServicesLayoutProps = {
  title: string;
  description: string;
  heroTitle: string;
  heroDescription: string;
  serviceFeatures: ServiceFeature[];
  plans: Plan[];
  seasonalCare: SeasonalCare[];
  faq: { question: string; answer: string }[];
  ctaTitle: string;
  ctaDescription: string;
  children?: ReactNode;
};

export default function ServicesLayout({
  title,
  description,
  heroTitle,
  heroDescription,
  serviceFeatures,
  plans,
  seasonalCare,
  faq,
  ctaTitle,
  ctaDescription,
  children,
}: ServicesLayoutProps) {
  return (
    <>
      <Head>
        <title>{title} | San Antonio, TX | Rhinamic</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://www.rhinamic.com/services/${title.toLowerCase().replace(/\s+/g, '-')}`} />
      </Head>
      
      <Layout>
        <div className="min-h-screen bg-white">
          {/* Hero Section */}
          <section className="py-20 bg-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold text-purple-900 mb-6 drop-shadow-sm">
                  {heroTitle}
                </h1>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  {heroDescription}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#contact" 
                    className="bg-purple-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-900 transition-colors inline-flex items-center gap-2"
                  >
                    <Phone size={20} />
                    Get a Free Quote
                  </a>
                  <a 
                    href="tel:2012544911"
                    className="border-2 border-purple-800 text-purple-800 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
                  >
                    Call (201) 254-4911
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Service Features */}
          {serviceFeatures.length > 0 && (
            <section className="py-16 bg-gray-50">
              <div className="container-custom max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">
                  Our {title} Services
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {serviceFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                        <p className="text-gray-700">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Service Plans */}
          {plans.length > 0 && (
            <section className="py-16 bg-white">
              <div className="container-custom max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">
                  Service Plans
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {plans.map((plan, index) => (
                    <div 
                      key={index}
                      className={`p-6 rounded-lg border-2 ${
                        plan.highlight 
                          ? 'border-purple-300 bg-purple-50' 
                          : 'border-gray-200 bg-gray-50'
                      }`}
                    >
                      <div className="text-center mb-4">
                        <div className="text-purple-600 mx-auto mb-2">
                          {plan.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-purple-900">
                          {plan.name}
                        </h3>
                      </div>
                      <ul className="space-y-2 text-gray-700 mb-6 text-sm">
                        {plan.features.map((feature, i) => (
                          <li key={i}>• {feature}</li>
                        ))}
                      </ul>
                      <p className="text-sm text-gray-600">{plan.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Seasonal Care */}
          {seasonalCare.length > 0 && (
            <section className="py-16 bg-green-50">
              <div className="container-custom max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">
                  San Antonio Seasonal Care
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {seasonalCare.map((season, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-lg font-semibold text-purple-900 mb-3">
                        {season.season}
                      </h3>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        {season.items.map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* FAQ Section */}
          {faq.length > 0 && (
            <section className="py-16 bg-white">
              <div className="container-custom max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  {faq.map((item, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-purple-900 mb-2">
                        {item.question}
                      </h3>
                      <p className="text-gray-700">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-b from-purple-50 to-white">
            <div className="container-custom max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-purple-900 mb-4">
                {ctaTitle}
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                {ctaDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contact" 
                  className="bg-purple-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-900 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  Get Your Free Quote
                </a>
                <a 
                  href="tel:2012544911"
                  className="border-2 border-purple-800 text-purple-800 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
                >
                  Call (201) 254-4911
                </a>
              </div>
            </div>
          </section>

          {/* Additional Content */}
          {children}
        </div>
      </Layout>
    </>
  );
}

export type { ServiceFeature, Plan, SeasonalCare };
