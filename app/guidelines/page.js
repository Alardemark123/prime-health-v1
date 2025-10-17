'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FileCheck, CheckCircle2, Book, AlertCircle } from 'lucide-react'

export default function GuidelinesPage() {
  const guidelines = [
    {
      title: 'Patient Safety Guidelines',
      icon: <AlertCircle className="h-8 w-8" />,
      color: 'from-red-500 to-red-600',
      items: [
        'Always inform staff of any allergies or medical conditions',
        'Follow all pre-procedure fasting and preparation instructions',
        'Report any discomfort or concerns immediately',
        'Keep staff informed of medication changes',
        'Follow post-procedure care instructions carefully'
      ]
    },
    {
      title: 'PET-CT Preparation',
      icon: <FileCheck className="h-8 w-8" />,
      color: 'from-blue-500 to-blue-600',
      items: [
        'Fast for 6 hours before your appointment',
        'Drink plenty of water to stay hydrated',
        'Avoid strenuous exercise 24 hours prior',
        'Wear comfortable clothing without metal',
        'Arrive 30 minutes before scheduled time'
      ]
    },
    {
      title: 'Laboratory Testing',
      icon: <CheckCircle2 className="h-8 w-8" />,
      color: 'from-teal-500 to-teal-600',
      items: [
        'Check if fasting is required for your specific tests',
        'Bring list of current medications',
        'Stay hydrated before blood draws',
        'Inform staff if you have difficulty with needles',
        'Results typically available within 24-48 hours'
      ]
    },
    {
      title: 'Appointment Guidelines',
      icon: <Book className="h-8 w-8" />,
      color: 'from-indigo-500 to-indigo-600',
      items: [
        'Arrive 15 minutes early for check-in',
        'Bring valid ID and insurance card',
        'Notify us 24 hours in advance if you need to cancel',
        'Complete all required forms in advance when possible',
        'Bring list of current medications and medical history'
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-purple-500 text-white">
              Patient Guidelines
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Guidelines & Procedures
            </h1>
            <p className="text-xl text-blue-100">
              Important information to help you prepare for your visit and procedures
            </p>
          </div>
        </div>
      </section>

      {/* Guidelines */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {guidelines.map((guideline, index) => (
                <Card key={index} className="border-2 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${guideline.color}`} />
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`h-16 w-16 bg-gradient-to-br ${guideline.color} rounded-2xl flex items-center justify-center text-white`}>
                        {guideline.icon}
                      </div>
                      <CardTitle className="text-2xl">{guideline.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {guideline.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-orange-200 bg-orange-50">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">Important Notice</CardTitle>
                    <CardContent className="p-0">
                      <p className="text-muted-foreground">
                        These guidelines are general in nature. Specific instructions for your procedure will be provided by your healthcare provider. Always follow the specific instructions given to you. If you have any questions or concerns, please contact us before your appointment.
                      </p>
                    </CardContent>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}