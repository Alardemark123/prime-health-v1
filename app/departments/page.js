'use client'

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'

export default function DepartmentsPage() {
  const departments = [
    {
      name: 'Receiving Area',
      slug: 'receiving-area',
      description: 'First point of contact for all patients with efficient registration and initial assessment services.',
      image: 'https://images.unsplash.com/photo-1648047547783-8d64bf80c17f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBob3NwaXRhbHxlbnwwfHx8Ymx1ZXwxNzYwNjg5NjYxfDA&ixlib=rb-4.1.0&q=85'
    },
    {
      name: 'Reception',
      slug: 'reception',
      description: 'Modern reception desk with trained staff providing appointment scheduling and patient information services.',
      image: 'https://images.pexels.com/photos/7789851/pexels-photo-7789851.jpeg'
    },
    {
      name: 'Doctor\'s Room',
      slug: 'doctors-room',
      description: 'Private consultation rooms equipped with modern diagnostic tools for comprehensive patient examinations.',
      image: 'https://images.pexels.com/photos/4957793/pexels-photo-4957793.jpeg'
    },
    {
      name: 'Office',
      slug: 'office',
      description: 'Administrative offices managing patient records, billing, and healthcare coordination services.',
      image: 'https://images.unsplash.com/photo-1705255159965-bcccfd3dcc8b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBob3NwaXRhbHxlbnwwfHx8Ymx1ZXwxNzYwNjg5NjYxfDA&ixlib=rb-4.1.0&q=85'
    },
    {
      name: 'PET-CT Room',
      slug: 'pet-ct-room',
      description: 'State-of-the-art PET-CT imaging facility with latest generation scanner for advanced diagnostic imaging.',
      image: 'https://images.unsplash.com/photo-1606206873764-fd15e242df52?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVjaG5vbG9neXxlbnwwfHx8Ymx1ZXwxNzYwNjg5NjY2fDA&ixlib=rb-4.1.0&q=85'
    },
    {
      name: 'Hot Lab',
      slug: 'hot-lab',
      description: 'Specialized radiopharmaceutical preparation facility with stringent safety protocols and quality controls.',
      image: 'https://images.pexels.com/photos/8728559/pexels-photo-8728559.jpeg'
    },
    {
      name: 'Uptake Room',
      slug: 'uptake-room',
      description: 'Comfortable waiting area for patients undergoing radiotracer uptake before PET-CT scanning.',
      image: 'https://images.unsplash.com/photo-1512978587787-47fc7ac10b63?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBob3NwaXRhbHxlbnwwfHx8Ymx1ZXwxNzYwNjg5NjYxfDA&ixlib=rb-4.1.0&q=85'
    },
    {
      name: 'Radiology',
      slug: 'radiology',
      description: 'Comprehensive imaging department with X-ray, ultrasound, and advanced diagnostic equipment.',
      image: 'https://images.unsplash.com/photo-1597807037496-c56a1d8bc29a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbHxlbnwwfHx8Ymx1ZXwxNzYwNjg5NjYxfDA&ixlib=rb-4.1.0&q=85'
    },
    {
      name: 'Laboratory',
      slug: 'laboratory',
      description: 'Fully-equipped diagnostic laboratory with automated analyzers for accurate and timely test results.',
      image: 'https://images.pexels.com/photos/4957793/pexels-photo-4957793.jpeg'
    },
    {
      name: 'Pharmacy',
      slug: 'pharmacy',
      description: 'On-site pharmacy with comprehensive medication inventory and expert pharmacist consultation services.',
      image: 'https://images.pexels.com/photos/8728559/pexels-photo-8728559.jpeg'
    },
    {
      name: 'Patient Lounge',
      slug: 'patient-lounge',
      description: 'Comfortable waiting area with amenities designed to ensure patient comfort and relaxation.',
      image: 'https://images.unsplash.com/photo-1648047547783-8d64bf80c17f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBob3NwaXRhbHxlbnwwfHx8Ymx1ZXwxNzYwNjg5NjYxfDA&ixlib=rb-4.1.0&q=85'
    },
    {
      name: 'Admin Office',
      slug: 'admin-office',
      description: 'Central administrative hub coordinating all facility operations and patient care services.',
      image: 'https://images.pexels.com/photos/7789851/pexels-photo-7789851.jpeg'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-teal-900 via-blue-800 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-teal-500 text-white">
              Our Departments
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Specialized Departments
            </h1>
            <p className="text-xl text-blue-100">
              Modern facilities equipped with advanced technology and staffed by experienced professionals
            </p>
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {departments.map((dept, index) => (
                <Link key={index} href={`/departments/${dept.slug}`}>
                  <Card className="group h-full border-2 hover:border-teal-500 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden transform hover:-translate-y-2">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={dept.image}
                        alt={dept.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-teal-600 transition-colors flex items-center justify-between">
                        {dept.name}
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {dept.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}