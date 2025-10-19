'use client'

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, MapPin,Flame   } from 'lucide-react'

export default function DepartmentsPage() {
  const departments = [
    {
      name: 'Receiving Area',
      slug: 'receiving-area',
      description: 'First point of contact for all patients with efficient registration and initial assessment services.',
      image: '/prime_health_attachment/receiving_area.png'
    },
    {
      name: 'Reception',
      slug: 'reception',
      description: 'Modern reception desk with trained staff providing appointment scheduling and patient information services.',
      image: '/prime_health_attachment/reception.png'
    },
    {
      name: 'Doctor\'s Room',
      slug: 'doctors-room',
      description: 'Private consultation rooms equipped with modern diagnostic tools for comprehensive patient examinations.',
      image: '/prime_health_attachment/doctors_room.jpg'
    },
    {
      name: 'Office',
      slug: 'office',
      description: 'Administrative offices managing patient records, billing, and healthcare coordination services.',
      image: '/prime_health_attachment/office.jpg'
    },
    {
      name: 'PET-CT Room',
      slug: 'pet-ct-room',
      description: 'State-of-the-art PET-CT imaging facility with latest generation scanner for advanced diagnostic imaging.',
      image: '/prime_health_attachment/pet_ct_room.jpg'    },
    {
      name: 'Hot Lab',
      slug: 'hot-lab',
      description: 'Specialized radiopharmaceutical preparation facility with stringent safety protocols and quality controls.',
      image: '/prime_health_attachment/hot_lab.jpg'
    },
    {
      name: 'Uptake Room',
      slug: 'uptake-room',
      description: 'Comfortable waiting area for patients undergoing radiotracer uptake before PET-CT scanning.',
      image: '/prime_health_attachment/uptake_room.jpg'
    },
    {
      name: 'Doctors Room',
      slug: 'doctors-room',
      description: 'Comprehensive imaging department with X-ray, ultrasound, and advanced diagnostic equipment.',
      image: '/prime_health_attachment/doctors_room.jpg'
    },
    {
      name: 'Console Room',
      slug: 'console-room',
      description: 'Fully-equipped diagnostic laboratory with automated analyzers for accurate and timely test results.',
      image: '/prime_health_attachment/console_room.jpg'
    },
    {
      name: 'Pharmacy',
      slug: 'pharmacy',
      description: 'On-site pharmacy with comprehensive medication inventory and expert pharmacist consultation services.',
      image: '/prime_health_attachment/pharmacy.jpg'
    },
    {
      name: 'Patient Lounge',
      slug: 'patient-lounge',
      description: 'Comfortable waiting area with amenities designed to ensure patient comfort and relaxation.',
      image: '/prime_health_attachment/patient_lounge.jpg'
    },
    {
      name: 'Admin Office',
      slug: 'admin-office',
      description: 'Central administrative hub coordinating all facility operations and patient care services.',
      image: '/prime_health_attachment/admin_office.jpg'
    }
  ]

  return (
    <div className="min-h-screen">
     

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
    <div className="max-w-6xl mx-auto text-center">
      <Badge className="mb-6 bg-emerald-500 text-white border border-emerald-500 hover:bg-transparent hover:text-emerald-500 transition-colors duration-300">
        <Flame className="inline-block mr-2 h-4 w-4" />
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
    <div className="max-w-12xl mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {departments.map((dept, index) => (
          <Link key={index} href={`/departments/${dept.slug}`}>
            <Card
              className="group relative h-80 border-2 border-transparent hover:border-emerald-500 
                         hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden 
                         rounded-2xl transform hover:-translate-y-2"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${dept.image})` }}
              />

              {/* Wavey Overlay */}
              <div className="absolute inset-0 opacity-1000">
                <svg
                  viewBox="0 0 500 200"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  className="absolute bottom-0 w-full h-full fill-emerald-200/40"
                >
                  <path d="M0,100 C150,200 350,0 500,100 L500,200 L0,200 Z" />
                </svg>
              </div>

              {/* Abstract Blur Shapes */}
              <div className="absolute top-[-60px] right-[-60px] w-64 h-64 bg-emerald-300/30 rounded-full blur-3xl opacity-60" />
              <div className="absolute bottom-[-60px] left-[-60px] w-72 h-72 bg-blue-300/30 rounded-full blur-3xl opacity-50" />

              {/* White Ombre Fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-transparent" />

              {/* Content */}
              {/* Content */}
<div className="relative z-10 p-6 flex flex-col justify-end h-full">
  <CardHeader className="p-0">
    <CardTitle
      className="text-2xl font-semibold text-gray-900 flex items-center justify-between relative overflow-hidden"
    >
      {/* Animated Underline */}
      <span className="relative inline-block">
        {dept.name}
        <span
          className="absolute left-0 bottom-0 margin-top-3 w-0 h-[2px] bg-emerald-500 transition-all duration-500 group-hover:w-full"
        />
      </span>

      {/* Icon Button */}
      <span
        className="ml-3 flex items-center justify-center h-9 w-9 rounded-full 
                   bg-emerald-500 text-white transition-all duration-300 
                   group-hover:bg-white group-hover:text-emerald-600 
                   group-hover:translate-x-1 shadow-md"
      >
        <ArrowRight className="h-4 w-4 transition-transform duration-300" />
      </span>
    </CardTitle>
  </CardHeader>

  <CardContent className="p-0 mt-2">
    <CardDescription className="text-base text-gray-700">
      {dept.description}
    </CardDescription>
  </CardContent>
</div>

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