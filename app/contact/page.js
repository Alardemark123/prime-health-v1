'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Mail, MapPin, Phone, Clock, Send, } from 'lucide-react'
import { useState } from 'react'
import ContactForm from './contact-form'


export default function ContactPage() {
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
    <div className="max-w-6xl mx-auto text-center">
      <Badge className="mb-6 bg-emerald-500 text-white border border-emerald-500 hover:bg-transparent hover:text-emerald-500 transition-colors duration-300">
        <Mail className="inline-block mr-2 h-4 w-4" />
        Contact Us
      </Badge>

      <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
        Get in Touch
      </h1>
      <p className="text-xl text-blue-100">
        We're here to help. Reach out to us for appointments, inquiries, or any questions.
      </p>
    </div>
  </div>
</section>



      {/* Contact Info Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
  {
    color: "blue",
    icon: <Phone className="h-6 w-6 text-blue-600" />,
    title: "Phone",
    details: [
      { city: "Quezon City", info: "(02) 7000 – 6385 / 0906 – 002 9461" },
      { city: "Mandaluyong", info: "(02) 7000 – 1234 / 0906 – 001 2345" },
    ],
    blobColor: "fill-blue-200/60",
    abstractColor: "bg-blue-300/30",
  },
  {
    color: "teal",
    icon: <Mail className="h-6 w-6 text-teal-600" />,
    title: "Email",
    details: [
      { city: "Quezon City", info: "franca.primehealthimaging@gmail.com" },
      { city: "Mandaluyong", info: "mandaluyong.primehealthimaging@gmail.com" },
    ],
    blobColor: "fill-teal-200/60",
    abstractColor: "bg-teal-300/30",
  },
  {
    color: "cyan",
    icon: <MapPin className="h-6 w-6 text-cyan-600" />,
    title: "Location",
    details: [
      { city: "Quezon City", info: "63 Malakas St., Brgy. Pinyahan, Quezon City" },
      { city: "Mandaluyong", info: "12 Mandaluyong Ave., Mandaluyong City" },
    ],
    blobColor: "fill-cyan-200/60",
    abstractColor: "bg-cyan-300/30",
  },
].map((item, idx) => (
  <Card
    key={idx}
    className={`
      group relative overflow-hidden border border-gray-200 
      bg-white hover:border-${item.color}-500 hover:shadow-xl 
      transition-all duration-500 rounded-2xl
    `}
  >
    {/* Full Wavey Background */}
    <div className="absolute inset-0 opacity-70">
      <svg
        viewBox="0 0 500 200"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className={`w-full h-full ${item.blobColor} transition-transform duration-700 group-hover:scale-105`}
      >
        <path d="M0,100 C150,200 350,0 500,100 L500,200 L0,200 Z" />
      </svg>
    </div>

    {/* Abstract Blurred Overlay */}
    <div
      className={`absolute top-[-50px] right-[-60px] w-60 h-60 rounded-full ${item.abstractColor} blur-3xl opacity-60 rotate-[25deg]`}
    />
    <div
      className={`absolute bottom-[-40px] left-[-50px] w-56 h-56 rounded-full ${item.abstractColor} blur-3xl opacity-50 rotate-[-20deg]`}
    />

    <CardHeader className="relative flex flex-col items-center text-center z-10">
      <div
        className={`h-14 w-14 bg-${item.color}-100 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110`}
      >
        {item.icon}
      </div>
      <CardTitle className="text-base font-semibold text-gray-900 tracking-tight">
        {item.title}
      </CardTitle>
    </CardHeader>

    <CardContent className="relative text-center space-y-4 z-10 px-2">
      {item.details.map((branch, i) => (
        <div key={i} className="flex flex-col items-center">
          <span className="text-xs font-semibold text-gray-700">{branch.city}</span>
          <span className="text-sm text-gray-700">{branch.info}</span>
          {i !== item.details.length - 1 && (
            <hr className="w-16 border-t border-gray-300 my-2" />
          )}
        </div>
      ))}
    </CardContent>
  </Card>
))}




          </div>








            {/* Contact Form & Map */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Send Us a <span className="text-blue-600">Message</span>
                </h2>
                <ContactForm />
              </div>

              {/* Map & Hours */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Visit <span className="text-teal-600">Our Facility</span>
                </h2>
                
                {/* Map Placeholder */}
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-teal-100 mb-6 flex items-center justify-center overflow-hidden">
                  <img
                    src="/prime_health_attachment/Picture1.png"
                    alt="Prime Health Location"
                    className="w-full h-full object-cover"
                  />
                </div>

                <Card className="border-2">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Clock className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl">Operating Hours</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="font-medium">Monday - Friday</span>
                        <span className="text-muted-foreground">8:00AM – 5:00PM</span>
                      </div>
                      <div className="pt-4 border-t">
                        <div className="flex items-center gap-2 text-green-600 font-semibold">
                          <div className="h-2 w-2 bg-green-600 rounded-full animate-pulse" />
                          Emergency Services: 24/7
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Banner */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Need Immediate Medical Attention?
            </h3>
            <p className="text-xl text-red-100 mb-6">
              For medical emergencies, call our 24/7 emergency hotline
            </p>
            <Button size="lg" className="bg-white text-red-600 hover:bg-red-50 px-8 py-6 rounded-full text-xl font-bold">
              <Phone className="mr-2 h-6 w-6" />
              Emergency: 911
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}