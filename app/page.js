'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Activity, 
  Heart, 
  Stethoscope, 
  Users, 
  Clock, 
  Shield,
  ArrowRight,
  CheckCircle2,
  Star,
  Award,
  Building2,
  Microscope,
  Pill,
  Scan,
  ClipboardCheck,
  FileText,
  User,
  FolderOpen,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: <Scan className="h-10 w-10" />,
      title: 'PET-CT Imaging',
      description: 'Advanced diagnostic imaging with state-of-the-art PET-CT technology for precise cancer detection and treatment monitoring.',
      color: 'bg-blue-500'
    },
    {
      icon: <Microscope className="h-10 w-10" />,
      title: 'Laboratory Services',
      description: 'Comprehensive diagnostic testing with cutting-edge equipment and experienced technicians for accurate results.',
      color: 'bg-teal-500'
    },
    {
      icon: <Activity className="h-10 w-10" />,
      title: 'Radiology',
      description: 'Complete radiology services including X-rays, ultrasound, and advanced imaging for comprehensive diagnostics.',
      color: 'bg-cyan-500'
    },
    {
      icon: <Pill className="h-10 w-10" />,
      title: 'Pharmacy',
      description: 'On-site pharmacy providing medications, prescriptions, and pharmaceutical care services.',
      color: 'bg-indigo-500'
    }
  ]

  const departments = [
    { name: 'Receiving Area', slug: 'receiving-area' },
    { name: 'Reception', slug: 'reception' },
    { name: 'Doctor\'s Room', slug: 'doctors-room' },
    { name: 'PET-CT Room', slug: 'pet-ct-room' },
    { name: 'Hot Lab', slug: 'hot-lab' },
    { name: 'Uptake Room', slug: 'uptake-room' },
    { name: 'Radiology', slug: 'radiology' },
    { name: 'Laboratory', slug: 'laboratory' },
    { name: 'Pharmacy', slug: 'pharmacy' },
    { name: 'Patient Lounge', slug: 'patient-lounge' }
  ]

  const stats = [
    { icon: <Users className="h-8 w-8" />, value: '50,000+', label: 'Patients Served' },
    { icon: <Award className="h-8 w-8" />, value: '25+', label: 'Years Experience' },
    { icon: <Stethoscope className="h-8 w-8" />, value: '100+', label: 'Medical Experts' },
    { icon: <Building2 className="h-8 w-8" />, value: '10+', label: 'Departments' }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Patient',
      content: 'The care I received at Prime Health was exceptional. The staff was professional, and the facilities were top-notch.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Patient',
      content: 'Outstanding diagnostic services. The PET-CT scan was quick and the results were delivered with clear explanations.',
      rating: 5
    },
    {
      name: 'Emma Davis',
      role: 'Patient',
      content: 'Prime Health has been my trusted healthcare provider for years. I highly recommend their services.',
      rating: 5
    }
  ]

const ReferralProcess = () => {
  const steps = [
    {
      icon: <User className="w-8 h-8 text-green-600" />,
      title: "Step 1: Patient Consults with MD at Hospital",
      desc: "The patient visits their attending physician for evaluation and diagnostic recommendations."
    },
    {
      icon: <FileText className="w-8 h-8 text-green-600" />,
      title: "Step 2: Hospital Prepares LOA",
      desc: "The hospital processes and issues a Letter of Authorization (LOA) for the recommended procedure."
    },
    {
      icon: <Mail className="w-8 h-8 text-green-600" />,
      title: "Step 3: Hospital Endorses Patient to Prime Customer Service",
      desc: "The hospital coordinates with Prime’s customer service team for referral and patient handling."
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-green-600" />,
      title: "Step 4: Customer Service Coordinates with Patient",
      desc: "Prime’s customer service assists the patient with pre-procedure requirements and schedules."
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-green-600" />,
      title: "Step 5: Patient is Scanned",
      desc: "The patient undergoes the prescribed diagnostic scan at the designated facility."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-600" />,
      title: "Step 6: Result is Released",
      desc: "Scan results are released to the hospital, patient, or both — depending on the case."
    },
    {
      icon: <FolderOpen className="w-8 h-8 text-green-600" />,
      title: "Step 7: Prime Prepares & Submits SOA",
      desc: "Prime prepares the Statement of Account and supporting documents, then submits them to the hospital."
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
          Referral <span className="text-teal-500">Process</span>
        </h2>
        <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
          A clear and efficient 7-step workflow ensuring smooth coordination between hospitals, patients, and Prime Customer Service.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-all border border-green-100"
            >
              <div className="flex flex-col items-center">
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BranchShowcase = () => {
  const branches = [
    {
      name: "PRIME HEALTH IMAGING – FRANCA",
      address: "63 Malakas St. Franca Arcade Bldg., Brgy. Pinyahan, Quezon City",
      description:
        "Our main branch provides full-range diagnostic imaging including CT, MRI, and ultrasound — combining advanced technology with expert care for every patient.",
      image: "/prime_health_attachment/Picture1.png",
      features: [
        { icon: <MapPin className="w-4 h-4 text-green-600" />, label: "Quezon City" },
        { icon: <Clock className="w-4 h-4 text-green-600" />, label: "Monday to Friday: 8:00AM – 5:00PM"  },
        { icon: <Phone className="w-4 h-4 text-green-600" />, label: "Contact: (02) 7000-6385 | 0906-002-9461"  },
        { icon: <Mail className="w-4 h-4 text-green-600" />, label: "Email: franca.primehealthimaging@gmail.com" },
      ],
    },
    {
      name: "PRIME HEALTH IMAGING – SHAW",
      address: "287 Shaw Blvd., Mandaluyong City",
      description:"Located along Shaw Blvd., this branch offers modern imaging services and comfortable patient care for the South Metro area.",
      image: "/prime_health_attachment/Picture3.jpg",
      features: [
        { icon: <MapPin className="w-4 h-4 text-green-600" />, label: "Mandaluyong City" },
        { icon: <Clock className="w-4 h-4 text-green-600" />, label: "Monday to Friday: 8:00AM – 5:00PM" },
        { icon: <Phone className="w-4 h-4 text-green-600" />, label: "Contact: (02) 7119-1269 | 0927-661-3475" },
        { icon: <Mail className="w-4 h-4 text-green-600" />, label: "Email: Shaw.primehealthimaging@gmail.com" },
      ],
    },
  ];

  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-br from-white via-green-50 to-green-100 font-sans">
  {/* ✨ Background Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-32 w-96 h-96 bg-green-200/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-green-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative mx-auto px-4 sm:px-6 md:px-20">
          {/* 🏥 Title */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">
              Our <span className="text-teal-500">Branches</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-12xl mx-auto leading-relaxed">
              Accessible, modern, and patient-centered diagnostic imaging services — now closer to you.
            </p>
          </motion.div>

          {/* 🏢 Branch Cards */}
          <div className="grid md:grid-cols-2 gap-10 items-stretch">
            {branches.map((branch, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group flex flex-col md:flex-row bg-white/90 backdrop-blur-sm rounded-3xl shadow-md overflow-hidden border border-green-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* 🖼️ Image (Left) */}
                <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="h-full w-full relative"
                  >
                    <Image
                      src={branch.image}
                      alt={branch.name}
                      fill
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                </div>

                {/* 📄 Content (Right) */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between text-left md:text-left">
                  <div className="mb-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-green-800 mb-2">
                      {branch.name}
                    </h3>
                    <p className="text-sm text-gray-500 flex items-center gap-1">{branch.address}
                    </p>
                  </div>

                  <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-5">
                    {branch.description}
                  </p>

                  {/* 🌟 Features */}
                  <div className="flex flex-wrap gap-3">
                    {branch.features.map((feat, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.1, y: -2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="flex items-center gap-2 bg-green-50/80 px-3 py-1.5 rounded-full border border-green-100 shadow-sm hover:bg-green-100 hover:shadow-md transition-all duration-200"
                      >
                        {feat.icon}
                        <span className="text-xs md:text-sm text-green-800 font-medium">
                          {feat.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
    </section>

  );
};




  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 top-[-20%] sm:top-[-15%]">
      <Image
        src="/prime_health_attachment/Picture1.png"
        alt="Prime Health Background"
        fill
        priority
        className="object-cover object-center brightness-90"
      />
      {/* 🔹 Dark Gradient Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
      {/* 🔹 Optional subtle color overlay for professional feel */}
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 via-emerald-200/10 to-green-100/10" />
    </div>

        
      <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden w-screen -mx-[calc(50vw-50%)]">

      <div className="container relative z-10 flex flex-col items-center text-center pt-32 sm:pt-28 md:pt-24 pb-8 sm:pb-6 md:pb-4 px-4 sm:px-0 lg:px-0">


          {/* ✅ Hero Section */}
          <div className={`max-w-6xl w-full transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} pt-12 sm:pt-8 md:pt-0`}>
            <Badge className="mb-6 bg-teal-500 text-white hover:bg-teal-700 text-xs sm:text-sm px-3 sm:px-4 py-2">
              <Heart className="h-4 w-4 mr-2 inline" />
              Advanced Healthcare Solutions
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-100 mb-4 sm:mb-6 leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
  Welcome to{" "}
  <span className="text-teal-500 bg-white px-4 rounded-xl whitespace-nowrap">
    Prime Health
  </span>
</h1>


            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 leading-relaxed max-w-2xl sm:max-w-3xl mx-auto drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]">
              Your trusted partner in advanced medical diagnostics and comprehensive healthcare services
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-teal-500 hover:bg-teal-600 text-white text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              >
                <Link href="/contact" className="flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-teal-500 text-teal-500 hover:border-teal-300 hover:text-white text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-5 rounded-full transition-all duration-300 bg-white hover:bg-teal-500 hover:text-white backdrop-blur-sm w-full sm:w-auto"
              >
                <Link href="/services" className="flex items-center justify-center font-semibold">
                  Our Services
                </Link>
              </Button>
            </div>
          </div>

          {/* ✅ Stats Section (Better Spacing + Responsive Columns) */}
          <div className="mt-10 sm:mt-16 md:mt-10 w-full">
            <div className="mx-auto w-full max-w-12xl  sm:px-12 lg:px-12">
              {/* ✅ 2 cols (mobile/tablet) → 4 cols (desktop/laptop) */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6">
              {stats.map((stat, index) => (
  <div
    key={index}
    className={`relative group overflow-hidden rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-white/90 via-teal-50/70 to-teal-100/80 backdrop-blur-md border border-white/30 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.03] ${
      isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
    }`}
    style={{ transitionDelay: `${index * 120}ms` }}
  >
    {/* Soft Glow + Wavey Objects */}
    <div className="absolute inset-0 rounded-3xl overflow-hidden">
      {/* Glow on hover */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-400/25 via-green-300/15 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
      {/* Small floating abstract circles */}
      <div className="absolute -top-5 -left-5 w-10 h-10 bg-teal-200/30 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-3 right-4 w-14 h-14 bg-green-200/25 rounded-full blur-3xl animate-pulse delay-500"></div>
      <div className="absolute top-1/3 -right-3 w-6 h-6 bg-emerald-200/30 rounded-full blur-xl animate-pulse delay-300"></div>
    </div>

    {/* Content */}
    <div className="relative z-10 flex flex-col items-center text-center space-y-3">
      <div className="text-teal-600 bg-teal-100 w-14 h-14 flex items-center justify-center rounded-full shadow-inner mb-2">
        {stat.icon}
      </div>
      <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-teal-700 tracking-tight drop-shadow-sm">
        {stat.value}
      </div>
      <div className="text-[10px] sm:text-[14px] md:text-[14px] font-medium text-gray-700 uppercase tracking-wide drop-shadow-sm">
        {stat.label}
      </div>
    </div>
  </div>
))}

              </div>
            </div>
          </div>

        </div>
      </div>




        

      </section>

      {/* Two branches */}
      <BranchShowcase />


      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose <span className="text-teal-500">Prime Health</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge technology with compassionate care to deliver exceptional healthcare services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
              <CardHeader>
                <div className="h-14 w-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Advanced Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  State-of-the-art medical equipment and cutting-edge diagnostic tools for accurate and efficient healthcare delivery.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-teal-500 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
              <CardHeader>
                <div className="h-14 w-14 bg-teal-100 rounded-2xl flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-teal-600" />
                </div>
                <CardTitle className="text-2xl">Expert Medical Team</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Highly qualified and experienced healthcare professionals dedicated to providing personalized patient care.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
              <CardHeader>
                <div className="h-14 w-14 bg-cyan-100 rounded-2xl flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-cyan-600" />
                </div>
                <CardTitle className="text-2xl">24/7 Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Round-the-clock medical support and emergency services to ensure your health is always our priority.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-teal-500">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive healthcare solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white transform hover:-translate-y-2">
                <CardHeader>
                  <div className={`h-16 w-16 ${service.color} rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full">
              <Link href="/services" className="flex items-center">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Departments Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-teal-500">Departments</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized departments equipped with modern facilities and expert staff
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {departments.map((dept, index) => (
              <Link key={index} href={`/departments/${dept.slug}`}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-teal-500 border-2 cursor-pointer transform hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <CheckCircle2 className="h-8 w-8 text-teal-500 mx-auto mb-3" />
                    <p className="font-semibold text-sm">{dept.name}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-2 px-8 py-6 rounded-full">
              <Link href="/departments" className="flex items-center">
                Explore All Departments
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-20 bg-gradient-to-b from-teal-50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Our <span className="text-teal-600">Patients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real experiences from the people we serve
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-base text-foreground italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-lg">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      <ReferralProcess />


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-teal-600 to-cyan-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience Premium Healthcare?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today to schedule an appointment or learn more about our services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-teal-600 hover:bg-teal-50 px-8 py-6 rounded-full text-lg shadow-xl">
                <Link href="/contact">
                  Contact Us Now
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-teal-600 hover:bg-teal-50 hover:text-teal-600 px-8 py-6 rounded-full text-lg">
                <Link href="/about">
                  Learn More About Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}