'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FileText, Shield, Lock, Eye, UserCheck, Cookie } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-500 text-white">
              Legal
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Privacy Policy
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
                  At Prime Health, we are committed to protecting your privacy and ensuring the security of your personal and medical information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our facility or use our services.
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
                      <CardTitle className="text-2xl mb-2">Information We Collect</CardTitle>
                      <CardDescription className="text-base">
                        <ul className="list-disc list-inside space-y-2 mt-4">
                          <li>Personal identification information (name, address, phone number, email)</li>
                          <li>Medical history and health information</li>
                          <li>Insurance and billing information</li>
                          <li>Treatment and diagnostic records</li>
                          <li>Appointment and scheduling information</li>
                        </ul>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-teal-500 transition-colors">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Eye className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">How We Use Your Information</CardTitle>
                      <CardDescription className="text-base">
                        <ul className="list-disc list-inside space-y-2 mt-4">
                          <li>To provide and coordinate medical services and treatment</li>
                          <li>To process billing and insurance claims</li>
                          <li>To communicate about appointments and test results</li>
                          <li>To improve our services and patient care</li>
                          <li>To comply with legal and regulatory requirements</li>
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
                      <Lock className="h-6 w-6 text-cyan-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">Information Security</CardTitle>
                      <CardDescription className="text-base">
                        <p className="mt-4">
                          We implement robust security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. These measures include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 mt-4">
                          <li>Encrypted data transmission and storage</li>
                          <li>Secure access controls and authentication</li>
                          <li>Regular security audits and updates</li>
                          <li>Staff training on privacy and security protocols</li>
                          <li>HIPAA-compliant practices and procedures</li>
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
                      <Shield className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">HIPAA Compliance</CardTitle>
                      <CardDescription className="text-base">
                        <p className="mt-4">
                          Prime Health is fully compliant with the Health Insurance Portability and Accountability Act (HIPAA). We maintain strict standards for protecting your protected health information (PHI) and ensure all staff members are trained in HIPAA privacy and security requirements.
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
                      <UserCheck className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">Your Rights</CardTitle>
                      <CardDescription className="text-base">
                        <p className="mt-4">You have the right to:</p>
                        <ul className="list-disc list-inside space-y-2 mt-4">
                          <li>Access and review your medical records</li>
                          <li>Request corrections to your information</li>
                          <li>Receive a copy of this privacy policy</li>
                          <li>Request restrictions on certain uses of your information</li>
                          <li>File a complaint if you believe your privacy rights have been violated</li>
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
                      <Cookie className="h-6 w-6 text-pink-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">Website Cookies</CardTitle>
                      <CardDescription className="text-base">
                        <p className="mt-4">
                          Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device that help us understand how you use our site and improve our services. You can control cookie settings through your browser preferences.
                        </p>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>

            <Card className="mt-12 bg-blue-50 border-2 border-blue-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Contact Us About Privacy</h3>
                <p className="text-muted-foreground mb-4">
                  If you have questions about this Privacy Policy or concerns about how your information is handled, please contact our Privacy Officer:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Email:</strong> privacy@primehealth.com</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p><strong>Mail:</strong> Privacy Officer, Prime Health, 123 Medical Center Blvd, Healthcare City, HC 12345</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}