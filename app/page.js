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
  Scan
} from 'lucide-react'

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1597807037496-c56a1d8bc29a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbHxlbnwwfHx8Ymx1ZXwxNzYwNjg5NjYxfDA&ixlib=rb-4.1.0&q=85)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-teal-900/85" />
        </div>
        
        <div className="container relative z-10 px-4 py-20">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <Badge className="mb-6 bg-teal-500 text-white hover:bg-teal-600 text-sm px-4 py-2">
              <Heart className="h-4 w-4 mr-2 inline" />
              Advanced Healthcare Solutions
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Welcome to <span className="text-teal-400">Prime Health</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Your trusted partner in advanced medical diagnostics and comprehensive healthcare services
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <Link href="/contact" className="flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-6 rounded-full transition-all duration-300">
                <Link href="/services" className="flex items-center">
                  Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-10 left-0 right-0 z-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl transition-all duration-500 transform hover:scale-105 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-blue-600 mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold text-blue-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose <span className="text-blue-600">Prime Health</span>?
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
              Our <span className="text-blue-600">Services</span>
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
              Our <span className="text-teal-600">Departments</span>
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
      <section className="py-20 bg-gradient-to-b from-teal-50 to-background">
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
      </section>

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
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 rounded-full text-lg shadow-xl">
                <Link href="/contact">
                  Contact Us Now
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 rounded-full text-lg">
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