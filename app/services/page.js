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
  CheckCircle2
} from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      icon: <Scan className="h-12 w-12" />,
      title: 'PET-CT Imaging',
      description: 'Advanced diagnostic imaging combining positron emission tomography and computed tomography for precise cancer detection, staging, and treatment monitoring.',
      features: [
        'Latest generation PET-CT scanner',
        'Sub-millimeter resolution',
        'Whole-body imaging capability',
        'Expert radiologist interpretation',
        'Same-day results available'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Microscope className="h-12 w-12" />,
      title: 'Laboratory Services',
      description: 'Comprehensive diagnostic testing with state-of-the-art equipment and experienced laboratory technicians ensuring accurate and timely results.',
      features: [
        'Complete blood analysis',
        'Biochemistry testing',
        'Microbiology cultures',
        'Histopathology services',
        'Quick turnaround times'
      ],
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: <Activity className="h-12 w-12" />,
      title: 'Radiology',
      description: 'Full spectrum of imaging services including X-rays, ultrasound, and advanced diagnostic imaging for comprehensive patient evaluation.',
      features: [
        'Digital X-ray systems',
        'Ultrasound imaging',
        'Doppler studies',
        'Interventional procedures',
        'Expert radiologist reports'
      ],
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: <Pill className="h-12 w-12" />,
      title: 'Pharmacy Services',
      description: 'On-site pharmacy providing medications, prescriptions, and pharmaceutical care services with expert pharmacist consultation.',
      features: [
        'Wide range of medications',
        'Prescription management',
        'Drug interaction checking',
        'Patient counseling',
        'Insurance coordination'
      ],
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: <Heart className="h-12 w-12" />,
      title: 'Cardiology',
      description: 'Comprehensive cardiac care including diagnostics, treatment planning, and ongoing management of heart conditions.',
      features: [
        'ECG and stress testing',
        'Echocardiography',
        'Cardiac monitoring',
        'Treatment planning',
        'Preventive care programs'
      ],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <Brain className="h-12 w-12" />,
      title: 'Neurology',
      description: 'Specialized neurological services for diagnosis and treatment of brain, spine, and nervous system disorders.',
      features: [
        'Neurological examinations',
        'EEG testing',
        'Nerve conduction studies',
        'Treatment protocols',
        'Rehabilitation support'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Stethoscope className="h-12 w-12" />,
      title: 'General Medicine',
      description: 'Primary care services for routine health maintenance, disease prevention, and management of chronic conditions.',
      features: [
        'Routine check-ups',
        'Health screenings',
        'Chronic disease management',
        'Preventive care',
        'Vaccination programs'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Ambulance className="h-12 w-12" />,
      title: 'Emergency Services',
      description: '24/7 emergency medical care with rapid response team and advanced life support capabilities.',
      features: [
        '24/7 availability',
        'Emergency response team',
        'Advanced life support',
        'Trauma care',
        'Critical care facilities'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-teal-500 text-white">
              Our Services
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Healthcare Solutions
            </h1>
            <p className="text-xl text-blue-100">
              Advanced medical services delivered with expertise, compassion, and state-of-the-art technology
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="group border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className={`h-16 w-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                        <CardDescription className="text-base">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="font-semibold text-sm text-muted-foreground mb-3">Key Features:</p>
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why Choose Our <span className="text-blue-600">Services</span>?
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
                  <CheckCircle2 className="h-8 w-8 text-teal-600" />
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
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
      </section>
    </div>
  )
}