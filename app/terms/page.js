'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FileText, Scale, AlertCircle, Shield } from 'lucide-react'

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-indigo-500 text-white">
              Legal
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Terms of Use
            </h1>
            <p className="text-xl text-blue-100">
              Last updated: June 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8 border-2">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  These Terms of Use govern your use of Prime Health's services and website. By accessing our facility or using our services, you agree to comply with these terms. Please read them carefully.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="border-2 hover:border-blue-500 transition-colors">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">Services</CardTitle>
                      <CardDescription className="text-base">
                        <p className="mt-4">
                          Prime Health provides medical diagnostic and healthcare services including PET-CT imaging, laboratory testing, radiology, pharmacy services, and related medical care. All services are subject to availability and medical necessity.
                        </p>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-teal-500 transition-colors">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Scale className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">Patient Responsibilities</CardTitle>
                      <CardDescription className="text-base">
                        <p className="mt-4">As a patient, you agree to:</p>
                        <ul className="list-disc list-inside space-y-2 mt-4">
                          <li>Provide accurate and complete medical information</li>
                          <li>Follow prescribed treatments and instructions</li>
                          <li>Attend scheduled appointments or provide advance notice of cancellation</li>
                          <li>Treat staff and other patients with respect</li>
                          <li>Pay for services rendered according to agreed terms</li>
                          <li>Comply with facility policies and procedures</li>
                        </ul>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-cyan-500 transition-colors">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6 text-cyan-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">Limitation of Liability</CardTitle>
                      <CardDescription className="text-base">
                        <p className="mt-4">
                          Prime Health provides medical services with reasonable skill and care. However, we do not guarantee specific medical outcomes. Our liability is limited to the extent permitted by applicable law. We are not responsible for:
                        </p>
                        <ul className="list-disc list-inside space-y-2 mt-4">
                          <li>Treatment outcomes beyond our control</li>
                          <li>Delays due to emergencies or unforeseen circumstances</li>
                          <li>Actions of third-party service providers</li>
                          <li>Patient non-compliance with medical advice</li>
                        </ul>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-indigo-500 transition-colors">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">Cancellation Policy</CardTitle>
                      <CardDescription className="text-base">
                        <p className="mt-4">
                          We require at least 24 hours notice for appointment cancellations. Late cancellations or no-shows may result in cancellation fees. Emergency situations will be considered on a case-by-case basis.
                        </p>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-purple-500 transition-colors">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FileText className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">Billing and Payment</CardTitle>
                      <CardDescription className="text-base">
                        <p className="mt-4">
                          Payment is expected at the time of service unless other arrangements have been made. We accept various payment methods and work with most insurance providers. You are responsible for:
                        </p>
                        <ul className="list-disc list-inside space-y-2 mt-4">
                          <li>Co-pays and deductibles</li>
                          <li>Non-covered services</li>
                          <li>Services not approved by insurance</li>
                          <li>Outstanding balances after insurance payment</li>
                        </ul>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-pink-500 transition-colors">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Scale className="h-6 w-6 text-pink-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">Governing Law</CardTitle>
                      <CardDescription className="text-base">
                        <p className="mt-4">
                          These Terms of Use are governed by and construed in accordance with applicable federal and state laws. Any disputes arising from these terms shall be resolved through appropriate legal channels in the jurisdiction where Prime Health operates.
                        </p>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>

            <Card className="mt-12 bg-indigo-50 border-2 border-indigo-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Questions About Terms</h3>
                <p className="text-muted-foreground mb-4">
                  If you have questions about these Terms of Use, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Email:</strong>franca.primehealthimaging@gmail.com                  </p>
                  <p><strong>Phone:</strong> (02) 7000 – 6385 | 0906 – 002 9461</p>
                  <p><strong>Mail:</strong> 63 Malakas St. Franca Arcade Bldg., Brgy.Pinyahan Quezon City</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}