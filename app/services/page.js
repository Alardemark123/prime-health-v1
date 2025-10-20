'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { 
  Scan, 
  Microscope, 
  Activity, 
  Pill, 
  Stethoscope,
  Heart,
  Brain,
  Syringe,
  FileText,
  Ambulance,
  Clock,
  CheckCircle2,
  HandHelping,
  ClipboardList,
  AlertTriangle,
  Coffee,
} from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export default function ServicesPage() {
 

  // ACTION
  const sections = [
    { label: "Procedures", id: "procedures" },
    { label: "Pre-Requisites", id: "prerequisites" },
    { label: "Patient Preparation 2-3 Days", id: "prep-2-3days" },
    { label: "Patient Preparation 6 Hours", id: "prep-6hours" },
    { label: "Insulin Preparation", id: "insulin-prep" },
    { label: "Scan Process", id: "scan-process" },
    // { label: "Why Choose Us", id: "why-choose-us" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const Tabs = ({ sections, scrollToSection }) => {
    const [activeTab, setActiveTab] = useState(sections[0].id);
  
    const handleClick = (id) => {
      setActiveTab(id);
      scrollToSection(id);
    };
  
    return (
      <div className="bg-white/90 mb-6">
  <div className="container mx-auto px-4 sm:px-6 flex flex-col sm:flex-row gap-2">

    {sections.map((section, idx) => (
      <button
        key={idx}
        onClick={() => handleClick(section.id)}
        className={`whitespace-nowrap px-3 py-1.5 rounded-full text-sm font-medium transition
          ${activeTab === section.id
            ? "bg-teal-600 text-white shadow-md"
            : "bg-gray-100 text-gray-700 hover:bg-teal-50 hover:text-teal-500"
          }`}
      >
        {section.label}
      </button>
    ))}
  </div>
</div>

    );
  };
  
  // ACTION

  ////////////////////////////////////////////////////////
  const services = [
    {
      title: "F18 FLUORODEOXYGLUCOSE (FDG) PET/CT SCAN PLAIN",
      description: "High-quality PET/CT scan without contrast.",
      color: "from-teal-400 to-teal-600",
      icon: <Scan />,
      prices: [{ discounted: "P45,000.00", original: "P56,250.00" }],
    },
    {
      title: "F18 FLUORODEOXYGLUCOSE (FDG) PET/CT SCAN WITH CONTRAST",
      description: "PET/CT scan with contrast for enhanced imaging.",
      color: "from-teal-400 to-teal-600",
      icon: <Scan />,
      prices: [{ discounted: "P50,000.00", original: "P62,500.00" }],
    },
    {
      title: "F18 PROSTATE SPECIFIC MEMBRANE ANTIGEN (PSMA) PET/CT PLAIN",
      description: "PSMA PET/CT scan without contrast for prostate imaging.",
      color: "from-teal-400 to-teal-600",
      icon: <Scan />,
      prices: [{ discounted: "P69,000.00", original: "P86,250.00" }],
    },
    {
      title: "F18 PROSTATE SPECIFIC MEMBRANE ANTIGEN (PSMA) PET/CT WITH CONTRAST",
      description: "PSMA PET/CT scan with contrast for detailed imaging.",
      color: "from-teal-400 to-teal-600",
      icon: <Scan />,
      prices: [{ discounted: "P80,000.00", original: "P100,000.00" }],
    },
    
  ];
  
  const ProceduresSection = () => {
    return (
      <section id="procedures" className="py-5 bg-background">
        <Tabs sections={sections} scrollToSection={scrollToSection} />
        <div className="container mx-auto px-4">
  
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden rounded-2xl"
              >
                {/* Colored Top Stripe */}
                <div className={`h-2 bg-gradient-to-r ${service.color}`} />
  
                <CardHeader>
                  <div className="flex flex-col md:flex-row items-start gap-4">
                    {/* Icon Box */}
                    <div
                      className={`h-16 w-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                    >
                      {service.icon}
                    </div>
  
                    {/* Title + Description */}
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-1">{service.title}</CardTitle>
                      <CardDescription className="text-base text-gray-600">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
  
                <CardContent>
                  <div className="space-y-3">
                    {service.prices.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col md:flex-row md:justify-between items-start md:items-center border-b border-gray-100 pb-2"
                      >
                        <p className="font-medium text-gray-800">{service.title}</p>
                        <div className="text-right">
                          <p className="text-teal-500 font-semibold">{item.discounted}</p>
                          <p className="text-gray-400 text-sm line-through">{item.original}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  };
  ////////////////////////////////////////////////////////








  ////////////////////////////////////////////////////////
  const prerequisites = [
    {
      title: "F18 FLUORODEOXYGLUCOSE (FDG) PET/CT SCAN PLAIN",
      items: ["RBS/FBS/HBA1C"],
      color: "from-teal-400 to-teal-600",
    },
    {
      title: "F18 FLUORODEOXYGLUCOSE (FDG) PET/CT SCAN WITH CONTRAST",
      items: ["RBS/FBS/HBA1C", "CREATININE"],
      color: "from-teal-400 to-teal-600",
    },
    {
      title: "F18 PROSTATE SPECIFIC MEMBRANE ANTIGEN (PSMA) PET/CT PLAIN",
      items: ["N/A"],
      color: "from-teal-400 to-teal-600",
    },
    {
      title: "F18 PROSTATE SPECIFIC MEMBRANE ANTIGEN (PSMA) PET/CT WITH CONTRAST",
      items: ["CREATININE"],
      color: "from-teal-400 to-teal-600",
    },
  ];
  
  const PreRequisitesSection = () => {
    return (
      <section id="prerequisites" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
              <span className="text-teal-500">Pre-Requisites</span> for Procedures
            </h2>
            <p className="text-gray-600 text-lg">
              Know what tests and lab results you need before your scan.
            </p>
          </div>
  
          <div className="grid md:grid-cols-2 gap-8">
            {prerequisites.map((item, index) => (
              <Card
                key={index}
                className="group border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden rounded-2xl"
              >
                {/* Top Stripe */}
                <div className={`h-2 bg-gradient-to-r ${item.color}`} />
  
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div
                      className={`h-16 w-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                    >
                      <ClipboardList className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-1">{item.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
  
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {item.items.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  };
  ////////////////////////////////////////////////////////



  ////////////////////////////////////////////////////////
  const insulinPreparation = [
    {
      title: "For Regular Insulin",
      steps: [
        "Should be given at the usual dose along with a light breakfast 6 hours before the FDG administration",
      ],
    },
    {
      title: "For Long-Acting Insulin",
      steps: [
        "Should be given at the evening or before bedtime.",
        "FDG administration should be given at 7:00 am after an overnight 8-hour fasting.",
        "No more insulin should be given in the morning.",
      ],
    },
  ];
  
  const InsulinPreparationSection = () => {
    return (
      <section id="insulin-prep" className="py-20 bg-green-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
            Preparation for <span className="text-teal-500">Insulin-Dependent Patients</span>
          </h2>
  
          <div className="space-y-8">
            {insulinPreparation.map((item, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-semibold text-teal-500 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-teal-500" /> {item.title}
                </h3>
                <ul className="list-decimal list-inside ml-4 space-y-2 text-gray-700">
                  {item.steps.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  ////////////////////////////////////////////////////////






  ////////////////////////////////////////////////////////
  const preparationSteps = [
    "No Physical exercise or any strenuous activity (i.e. jogging, running, brisk walk, Zumba, weight lifting, etc.)",
    "Shift to a high protein low carbohydrate meal",
    "Refrain from eating sweet food including fruits high in sugar content",
    "Inform the staff if patient has a history of allergies and asthma",
    "Withhold Metformin for 48 hours before the procedure",
  ];
  
  const PatientPreparationSection = () => {
    return (
      <section id="prep-2-3days" className="py-20 bg-gradient-to-r from-green-50 via-white to-green-50">
  <div className="container mx-auto px-4 max-w-6xl">
    <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
      Patient Preparation <span className="text-teal-500">2-3 Days Before</span>
    </h2>

    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
      {preparationSteps.map((step, index) => (
        <div
          key={index}
          className="flex items-start gap-4 bg-white/80 backdrop-blur-sm p-5 rounded-2xl shadow hover:shadow-lg transition-all duration-300"
        >
          <div className="flex-shrink-0 mt-1">
            <CheckCircle2 className="w-6 h-6 text-teal-500" />
          </div>
          <p className="text-gray-700 text-base">{step}</p>
        </div>
      ))}
    </div>
  </div>
</section>

    );
  };
  ////////////////////////////////////////////////////////








  ////////////////////////////////////////////////////////
  const sixHourPreparation = [
    "Patient will do a fasting for 6 hours",
    "Patient will not eat or drink colored liquids",
    "Water intake is allowed during fasting period",
    "Routine medications may be taken unless you have been instructed otherwise",
    "Other maintenance medication could be taken during the fasting period",
    "Do not inject insulin while fasting",
    "Withhold intake of vitamins, cough syrup and food supplements; these can be resumed after the scan.",
    "Withhold Dextrose or D5 containing IV fluids.",
  ];
  
  const SixHourPreparationSection = () => {
    return (
      <section id="prep-6hours" className="py-20 bg-gradient-to-r from-green-100 via-white to-green-100">
  <div className="container mx-auto px-4 max-w-6xl">
    <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
      Patient Preparation <span className="text-teal-500">6 Hours Before</span>
    </h2>

    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
      {sixHourPreparation.map((step, index) => (
        <div
          key={index}
          className="flex items-start gap-4 bg-white/90 backdrop-blur-sm p-5 rounded-2xl shadow hover:shadow-lg transition-all duration-300"
        >
          <div className="flex-shrink-0 mt-1">
            <Coffee className="w-6 h-6 text-teal-500" />
          </div>
          <p className="text-gray-700 text-base">{step}</p>
        </div>
      ))}
    </div>
  </div>
</section>

    );
  };
  ////////////////////////////////////////////////////////





  ////////////////////////////////////////////////////////
  const ScanProcessSection = () => {
    return (
      <section id="scan-process" className="py-20 bg-gradient-to-r from-green-100 via-white to-green-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
              <span className="text-teal-500">Scan</span> Process
            </h2>
            <p className="text-gray-600 text-lg">
              The scan procedure is performed in a safe, comfortable environment with modern equipment to ensure accurate results and patient comfort.
            </p>
          </div>
  
          <div className="flex justify-center">
            {/* Image */}
            <div className="relative w-full h-80 md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/machines/scan_process.png"
                alt="Scan Process"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  
  
  ////////////////////////////////////////////////////////





  return (
    <div className="min-h-screen">
      
      {/* Hero */}
      <section
            className="relative mt-20 py-20 bg-cover bg-center overflow-hidden"
          >
            {/* Blurred Background Layer */}
            <div
              className="absolute inset-0 bg-cover bg-center scale-105 blur-[6px]"
              style={{
                backgroundImage: "url('/prime_health_attachment/Picture1.png')",
              }}
            />
            

            {/* Light Green Ombre (left-to-right) */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-200/50 via-transparent to-green-200/50 pointer-events-none z-10" />

            {/* Subtle Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 z-10" />

            {/* Content */}
            <div className="relative container mx-auto px-4 z-20">
            <div className="max-w-12xl mx-auto text-center">
            <Badge className="mb-6 bg-teal-500 text-white">
              <HandHelping className="inline-block mr-2 h-4 w-4" />
              Our Services
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            What Procedures Do We Offer?
            </h1>
            <p className="text-xl text-blue-100">
            High-quality PET/CT scans and nuclear medicine procedures with transparent pricing.
            </p>
          </div>
          </div>
      </section>

      

      {/* Services Grid */}
      <ProceduresSection />
      <PreRequisitesSection />
      <PatientPreparationSection />
      <SixHourPreparationSection />
      <InsulinPreparationSection />
      <ScanProcessSection />

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why Choose Our <span className="text-teal-500">Services</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              We combine advanced technology, experienced professionals, and patient-centered care to deliver exceptional outcomes
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast & Efficient</h3>
                <p className="text-muted-foreground">Quick turnaround times without compromising quality</p>
              </div>

              <div className="text-center">
                <div className="h-16 w-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-8 w-8 text-teal-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Accurate Results</h3>
                <p className="text-muted-foreground">Precision diagnostics with advanced technology</p>
              </div>

              <div className="text-center">
                <div className="h-16 w-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Patient-Centered</h3>
                <p className="text-muted-foreground">Compassionate care focused on your wellbeing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Experience Premium Healthcare?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today to learn more about our services or schedule an appointment
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 rounded-full text-lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  )
}