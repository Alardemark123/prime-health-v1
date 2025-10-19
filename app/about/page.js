'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { Award, Target, Eye, Users, Heart, Shield, Mail, AppWindow} from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Compassion',
      description: 'We treat every patient with empathy, dignity, and respect, ensuring comfort throughout their healthcare journey.'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Excellence',
      description: 'We maintain the highest standards in medical care, continuously improving our services and expertise.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Integrity',
      description: 'We uphold honesty and transparency in all our interactions, building lasting trust with our patients.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Innovation',
      description: 'We embrace cutting-edge technology and medical advances to provide the best possible outcomes.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      {/* <section className="relative py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-teal-500 text-white">
              About Prime Health
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Leading Healthcare Innovation Since 1998
            </h1>
            <p className="text-xl text-blue-100">
              Committed to delivering exceptional medical care through advanced technology and compassionate service
            </p>
          </div>
        </div>
      </section> */}

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
  <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-teal-500 text-white">
              <AppWindow className="inline-block mr-2 h-4 w-4" />
              About Prime Health
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Leading Healthcare Innovation Since 1998
            </h1>
            <p className="text-xl text-blue-100">
              Committed to delivering exceptional medical care through advanced technology and compassionate service
            </p>
          </div>
  </div>
</section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Our <span className="text-blue-600">Story</span>
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    Founded in 1998, Prime Health began with a simple yet powerful mission: to provide world-class healthcare services accessible to everyone in our community.
                  </p>
                  <p>
                    Over the past 25+ years, we have grown from a small clinic to a comprehensive medical facility equipped with state-of-the-art technology, including advanced PET-CT imaging, modern laboratory facilities, and specialized departments.
                  </p>
                  <p>
                    Today, Prime Health stands as a beacon of excellence in healthcare, serving over 50,000 patients annually with a team of 100+ dedicated medical professionals.
                  </p>
                </div>
              </div>
              <div className="relative">
              <Image
                  src="/prime_health_attachment/Picture1.png"
                  alt="Prime Health Facility"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="h-16 w-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                    <Target className="h-10 w-10 text-blue-600" />
                  </div>
                  <CardTitle className="text-3xl">Mission Statement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground">
                  To improve patient outcomes by providing accessible and affordable PET-CT Scan services.
                  <br />
                  <br />
To collaborate with the healthcare leaders and institution of the community
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="h-16 w-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-4">
                    <Eye className="h-10 w-10 text-teal-600" />
                  </div>
                  <CardTitle className="text-3xl">Vision Statement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground">
                  Our vision is to be a leading and trusted name in PET-CT imaging in the country by 2030.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Core <span className="text-teal-600">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="border-2 hover:border-blue-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <div className="h-16 w-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mb-4 text-white">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}