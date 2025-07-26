import { CheckCircle, Scissors, Shield, Eye, Phone } from "lucide-react";
import ServicesLayout from "../../components/layout/ServicesLayout";

export default function TreeTrimming() {
  const serviceFeatures = [
    {
      title: "Tree Health & Longevity",
      description: "Proper pruning removes diseased, damaged, or dead branches, improving overall tree health and extending lifespan."
    },
    {
      title: "Safety & Property Protection",
      description: "Remove hazardous branches that could fall and damage your home, vehicles, or injure people during storms."
    },
    {
      title: "Improved Appearance",
      description: "Professional shaping enhances your landscape's aesthetic appeal and maintains your property's curb appeal."
    },
    {
      title: "Storm Damage Prevention",
      description: "Regular trimming reduces wind resistance and prevents branch breakage during San Antonio's severe weather events."
    },
    {
      title: "Clearance & Access",
      description: "Maintain proper clearance from buildings, power lines, and walkways for safety and functionality."
    },
    {
      title: "Light & Air Circulation",
      description: "Selective pruning allows more sunlight to reach your lawn and garden while improving air circulation."
    },
    {
      title: "Disease Prevention",
      description: "Removing infected branches prevents disease spread and allows early detection of potential problems."
    },
    {
      title: "Property Value",
      description: "Well-maintained trees increase property value and appeal to potential buyers."
    }
  ];

  const plans = [
    {
      name: "Basic Trim",
      icon: <Scissors className="w-8 h-8 text-green-600" />,
      description: "Essential trimming for tree health and safety",
      features: [
        "Dead branch removal",
        "Basic crown cleaning",
        "Safety hazard reduction"
      ]
    },
    {
      name: "Premium Trim",
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      description: "Comprehensive tree care and shaping",
      highlight: true,
      features: [
        "All Basic Trim services",
        "Crown thinning & raising",
        "Structural pruning",
        "Disease inspection"
      ]
    },
    {
      name: "Elite Care",
      icon: <Eye className="w-8 h-8 text-purple-600" />,
      description: "Complete tree health management",
      features: [
        "All Premium Trim services",
        "Fertilization treatment",
        "Deep root watering",
        "Pest management"
      ]
    }
  ];

  const seasonalCare = [
    {
      season: "Spring",
      items: [
        "Prune flowering trees after bloom",
        "Inspect for winter damage",
        "Fertilize for new growth"
      ]
    },
    {
      season: "Summer",
      items: [
        "Light trimming for shape",
        "Monitor for pests/disease",
        "Deep root watering during drought"
      ]
    },
    {
      season: "Fall",
      items: [
        "Remove dead or weak limbs",
        "Prepare trees for winter",
        "Apply mulch for insulation"
      ]
    },
    {
      season: "Winter",
      items: [
        "Dormant season pruning",
        "Structural pruning for young trees",
        "Inspect for damage from storms"
      ]
    }
  ];

  const faq = [
    {
      question: "How often should I trim my trees?",
      answer: "Most trees benefit from trimming every 3-5 years, but it depends on the species, age, and health of the tree. Our arborists can assess your specific trees and recommend a maintenance schedule."
    },
    {
      question: "What's the best time of year for tree trimming?",
      answer: "Late fall through winter is generally the best time for most tree species, as they're dormant. However, dead or hazardous branches should be removed immediately regardless of the season."
    },
    {
      question: "How much does professional tree trimming cost?",
      answer: "Costs vary based on tree size, condition, and scope of work. We provide free, no-obligation estimates to give you accurate pricing for your specific needs."
    }
  ];

  return (
    <ServicesLayout
      title="Professional Tree Trimming Services"
      description="Expert tree trimming and pruning services in San Antonio, TX. Professional arborists ensure healthy tree growth, safety, and beautiful landscape appearance."
      heroTitle="Professional Tree Trimming Services"
      heroDescription="Expert tree trimming and pruning in San Antonio. Promote healthy growth, ensure safety, and enhance your property's beauty with professional arborist services."
      serviceFeatures={serviceFeatures}
      plans={plans}
      seasonalCare={seasonalCare}
      faq={faq}
      ctaTitle="Ready for Healthier, Safer Trees?"
      ctaDescription="Contact us today for a free consultation with our certified arborists."
    >
      {/* Custom Content Section - Pruning Techniques */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">Professional Pruning Techniques</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <Scissors className="text-green-600 mb-4" size={48} />
              <h3 className="text-lg font-semibold text-purple-900 mb-3">Crown Cleaning</h3>
              <p className="text-gray-700 text-sm mb-3">
                Removal of dead, diseased, damaged, or weakly attached branches to improve 
                tree health and reduce safety hazards.
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Dead branch removal</li>
                <li>• Disease prevention</li>
                <li>• Safety improvement</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <Eye className="text-blue-600 mb-4" size={48} />
              <h3 className="text-lg font-semibold text-purple-900 mb-3">Crown Thinning</h3>
              <p className="text-gray-700 text-sm mb-3">
                Selective removal of branches to increase light penetration and air movement 
                while maintaining the tree's natural shape.
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Improved light penetration</li>
                <li>• Better air circulation</li>
                <li>• Maintains natural form</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <Shield className="text-purple-600 mb-4" size={48} />
              <h3 className="text-lg font-semibold text-purple-900 mb-3">Crown Raising</h3>
              <p className="text-gray-700 text-sm mb-3">
                Removal of lower branches to provide clearance for buildings, vehicles, 
                pedestrians, and lawn maintenance equipment.
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Clearance improvement</li>
                <li>• Access enhancement</li>
                <li>• Safety compliance</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <Scissors className="text-orange-600 mb-4" size={48} />
              <h3 className="text-lg font-semibold text-purple-900 mb-3">Crown Reduction</h3>
              <p className="text-gray-700 text-sm mb-3">
                Careful reduction of tree height or spread while maintaining structural 
                integrity and natural appearance.
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Size management</li>
                <li>• Storm resistance</li>
                <li>• Structural preservation</li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <Shield className="text-red-600 mb-4" size={48} />
              <h3 className="text-lg font-semibold text-purple-900 mb-3">Structural Pruning</h3>
              <p className="text-gray-700 text-sm mb-3">
                Young tree training to develop strong structure and prevent future problems 
                through proper branch selection and spacing.
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Young tree training</li>
                <li>• Future problem prevention</li>
                <li>• Strong framework development</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <Eye className="text-yellow-600 mb-4" size={48} />
              <h3 className="text-lg font-semibold text-purple-900 mb-3">Vista Pruning</h3>
              <p className="text-gray-700 text-sm mb-3">
                Selective removal or reduction of specific branches to enhance views 
                while maintaining tree health and appearance.
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• View enhancement</li>
                <li>• Selective pruning</li>
                <li>• Aesthetic improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </ServicesLayout>
  );
}