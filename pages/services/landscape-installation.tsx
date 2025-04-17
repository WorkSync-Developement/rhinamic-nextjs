import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function LandscapeInstallation() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
          <div className="container-custom max-w-3xl mx-auto px-4">
            <h1 className="text-5xl font-bold text-purple-900 mb-8 drop-shadow-sm">Landscape Installation</h1>
            <p className="text-lg text-gray-700 mb-6">Expert installation of landscapes, plants, and features for long-lasting beauty. (SEO content placeholder)</p>
            <a href="/services" className="text-purple-700 underline">Back to Services</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
