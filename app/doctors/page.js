'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { User, GraduationCap, Award, Stethoscope } from 'lucide-react'

export default function DoctorsPage() {
  const doctors = [
    {
      name: 'Dr. Sarah Mitchell',
      specialty: 'Chief of Radiology',
      qualification: 'MD, FRCR',
      experience: '18 years',
      description: 'Board-certified radiologist specializing in PET-CT imaging and nuclear medicine diagnostics.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400'
    },
    {
      name: 'Dr. James Anderson',
      specialty: 'Senior Cardiologist',
      qualification: 'MD, FACC',
      experience: '22 years',
      description: 'Expert in interventional cardiology and cardiac imaging with extensive experience in complex cases.',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400'
    },
    {
      name: 'Dr. Emily Chen',
      specialty: 'Head of Laboratory Services',
      qualification: 'PhD, MD',
      experience: '15 years',
      description: 'Specialist in clinical pathology and laboratory medicine with focus on diagnostic accuracy.',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400'
    },
    {
      name: 'Dr. Michael Roberts',
      specialty: 'Nuclear Medicine Specialist',
      qualification: 'MD, ABNM',
      experience: '20 years',
      description: 'Leading expert in radiopharmaceutical therapy and molecular imaging techniques.',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400'
    },
    {
      name: 'Dr. Jennifer Lee',
      specialty: 'General Medicine',
      qualification: 'MBBS, MRCP',
      experience: '12 years',
      description: 'Primary care physician with expertise in preventive medicine and chronic disease management.',
      image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400'
    },
    {
      name: 'Dr. David Thompson',
      specialty: 'Senior Neurologist',
      qualification: 'MD, PhD',
      experience: '25 years',
      description: 'Renowned neurologist specializing in movement disorders and neuroimaging.',
      image: 'https://images.unsplash.com/photo-1637059824899-a441006a6875?w=400'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-indigo-900 via-blue-800 to-teal-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-teal-500 text-white">
              Our Medical Team
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Meet Our Expert Doctors
            </h1>
            <p className="text-xl text-blue-100">
              Experienced healthcare professionals dedicated to providing exceptional medical care
            </p>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {doctors.map((doctor, index) => (
                <Card key={index} className="group border-2 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-100 to-teal-100">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.parentElement.style.display = 'flex'
                        e.target.parentElement.style.alignItems = 'center'
                        e.target.parentElement.style.justifyContent = 'center'
                      }}
                    />
                    <User className="h-24 w-24 text-blue-400" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">{doctor.name}</CardTitle>
                    <p className="text-blue-600 font-semibold">{doctor.specialty}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <GraduationCap className="h-4 w-4 text-teal-500" />
                        <span>{doctor.qualification}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Award className="h-4 w-4 text-teal-500" />
                        <span>{doctor.experience} of experience</span>
                      </div>
                      <p className="text-sm text-muted-foreground pt-2">
                        {doctor.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Team */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why Choose Our <span className="text-blue-600">Medical Team</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Our doctors are not just highly qualified - they're passionate about patient care
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Qualifications</h3>
                <p className="text-muted-foreground">Board-certified specialists with advanced training</p>
              </div>

              <div>
                <div className="h-16 w-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Years of Experience</h3>
                <p className="text-muted-foreground">Decades of combined medical expertise</p>
              </div>

              <div>
                <div className="h-16 w-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Patient-Centered Care</h3>
                <p className="text-muted-foreground">Personalized treatment plans for every patient</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}