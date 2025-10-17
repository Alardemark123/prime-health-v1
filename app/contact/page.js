'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Mail, MapPin, Phone, Clock, Send } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-cyan-900 via-blue-800 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-teal-500 text-white">
              Contact Us
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-blue-100">
              We're here to help. Reach out to us for appointments, inquiries, or any questions
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="border-2 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Phone className="h-7 w-7 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Phone</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-blue-600">+1 (555) 123-4567</p>
                  <p className="text-sm text-muted-foreground mt-2">Mon-Fri: 8AM - 8PM</p>
                  <p className="text-sm text-muted-foreground">Sat-Sun: 9AM - 5PM</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-teal-500 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="h-14 w-14 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                    <Mail className="h-7 w-7 text-teal-600" />
                  </div>
                  <CardTitle className="text-xl">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-teal-600">info@primehealth.com</p>
                  <p className="text-sm text-muted-foreground mt-2">We'll respond within 24 hours</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-cyan-500 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="h-14 w-14 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="h-7 w-7 text-cyan-600" />
                  </div>
                  <CardTitle className="text-xl">Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-cyan-600">123 Medical Center Blvd</p>
                  <p className="text-sm text-muted-foreground mt-2">Healthcare City, HC 12345</p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form & Map */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Send Us a <span className="text-blue-600">Message</span>
                </h2>
                <Card className="border-2">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                          placeholder="What is this regarding?"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Message *
                        </label>
                        <textarea
                          rows={5}
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                          placeholder="Tell us how we can help you..."
                        />
                      </div>

                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg">
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </Button>

                      <p className="text-sm text-muted-foreground text-center">
                        * Required fields
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Map & Hours */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Visit <span className="text-teal-600">Our Facility</span>
                </h2>
                
                {/* Map Placeholder */}
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-teal-100 mb-6 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1597807037496-c56a1d8bc29a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbHxlbnwwfHx8Ymx1ZXwxNzYwNjg5NjYxfDA&ixlib=rb-4.1.0&q=85"
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
                        <span className="text-muted-foreground">8:00 AM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Saturday</span>
                        <span className="text-muted-foreground">9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Sunday</span>
                        <span className="text-muted-foreground">10:00 AM - 4:00 PM</span>
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