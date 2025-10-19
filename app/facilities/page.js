'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Wifi, 
  Coffee, 
  Shield, 
  Wind,
  Monitor,
  Zap,
  Building2,
  Utensils,
  Car,
  Accessibility
} from 'lucide-react'

export default function FacilitiesPage() {
  const facilities = [
    {
      icon: <Monitor className="h-10 w-10" />,
      title: 'Advanced Medical Equipment',
      description: 'State-of-the-art diagnostic and treatment equipment including latest generation PET-CT scanner, digital X-ray systems, and automated laboratory analyzers.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Wifi className="h-10 w-10" />,
      title: 'Free WiFi',
      description: 'Complimentary high-speed internet access throughout the facility for patients and visitors.',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: <Coffee className="h-10 w-10" />,
      title: 'Cafeteria & Refreshments',
      description: 'On-site cafeteria serving healthy meals and beverages. Coffee and refreshment stations in waiting areas.',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: <Car className="h-10 w-10" />,
      title: 'Wheelchair Accessible',
      description: 'Fully accessible facility with ramps, elevators, and wide corridors designed for easy wheelchair navigation.',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: <Accessibility className="h-10 w-10" />,
      title: 'Ample Parking',
      description: 'Spacious parking facility with dedicated spaces for patients and visitors, including accessible parking spots.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Wind className="h-10 w-10" />,
      title: 'Climate Control',
      description: 'Advanced HVAC system maintaining optimal temperature and air quality throughout the facility.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: '24/7 Security',
      description: 'Round-the-clock security personnel and CCTV surveillance ensuring safety of patients and staff.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: 'Backup Power',
      description: 'Uninterruptible power supply and backup generators ensuring continuous operation during emergencies.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <Building2 className="h-10 w-10" />,
      title: 'Modern Infrastructure',
      description: 'Contemporary facility design with spacious waiting areas, private consultation rooms, and comfortable patient lounges.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: <Utensils className="h-10 w-10" />,
      title: 'Patient Amenities',
      description: 'Comfortable seating, entertainment options, reading materials, and child-friendly play areas.',
      color: 'from-yellow-500 to-yellow-600'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-purple-900 via-blue-800 to-cyan-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-cyan-500 text-white">
              Our Facilities
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              World-Class Facilities
            </h1>
            <p className="text-xl text-blue-100">
              Modern infrastructure and amenities designed for your comfort and convenience
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilities.map((facility, index) => (
                <Card key={index} className="group border-2 hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
                  <div className={`h-2 bg-gradient-to-r ${facility.color}`} />
                  <CardHeader>
                    <div className={`h-16 w-16 bg-gradient-to-br ${facility.color} rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                      {facility.icon}
                    </div>
                    <CardTitle className="text-xl">{facility.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {facility.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Images */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Experience Our <span className="text-blue-600">Premium Facilities</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                A glimpse into our modern healthcare environment
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl group">
                <img
                  src="https://images.unsplash.com/photo-1606206873764-fd15e242df52?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVjaG5vbG9neXxlbnwwfHx8Ymx1ZXwxNzYwNjg5NjY2fDA&ixlib=rb-4.1.0&q=85"
                  alt="Medical Technology"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <p className="text-white text-xl font-semibold p-6">Advanced Medical Equipment</p>
                </div>
              </div>

              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl group">
                <img
                  src="https://images.unsplash.com/photo-1597807037496-c56a1d8bc29a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbHxlbnwwfHx8Ymx1ZXwxNzYwNjg5NjYxfDA&ixlib=rb-4.1.0&q=85"
                  alt="Modern Facility"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <p className="text-white text-xl font-semibold p-6">Modern Infrastructure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}