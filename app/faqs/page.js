'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  ChevronDown,
  Plus,
  HelpCircle
} from 'lucide-react'
import { useState } from 'react'

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          q: 'What are your operating hours?',
          a: 'Prime Health is open Monday to Friday from 8:00 AM to 8:00 PM, Saturday from 9:00 AM to 5:00 PM, and Sunday from 10:00 AM to 4:00 PM. Emergency services are available 24/7.'
        },
        {
          q: 'Do I need an appointment?',
          a: 'While walk-ins are welcome, we recommend scheduling an appointment to minimize wait times and ensure availability of our medical staff.'
        },
        {
          q: 'What insurance plans do you accept?',
          a: 'We accept most major insurance plans. Please contact our billing department to verify if your specific insurance is accepted.'
        }
      ]
    },
    {
      category: 'PET-CT Imaging',
      questions: [
        {
          q: 'How should I prepare for a PET-CT scan?',
          a: 'Patients should fast for 6 hours before the scan, avoid strenuous exercise for 24 hours prior, and wear comfortable clothing without metal. Detailed preparation instructions will be provided when you schedule your appointment.'
        },
        {
          q: 'How long does a PET-CT scan take?',
          a: 'The entire process typically takes 2-3 hours, including preparation time, radiotracer uptake period (usually 60-90 minutes), and the actual scanning (20-30 minutes).'
        },
        {
          q: 'Is PET-CT scanning safe?',
          a: 'Yes, PET-CT scanning is safe. The amount of radiation exposure is minimal and similar to other common diagnostic imaging procedures. Our staff follows strict safety protocols to ensure patient safety.'
        }
      ]
    },
    {
      category: 'Laboratory Services',
      questions: [
        {
          q: 'Do I need to fast before blood tests?',
          a: 'Fasting requirements depend on the specific tests ordered. Some tests require 8-12 hours of fasting, while others do not. We will inform you of any special preparation needed when you schedule your appointment.'
        },
        {
          q: 'How long does it take to get lab results?',
          a: 'Most routine lab tests are completed within 24-48 hours. Urgent tests may be available within a few hours, while specialized tests may take 3-5 business days.'
        },
        {
          q: 'Can I get a copy of my lab results?',
          a: 'Yes, you can request copies of your lab results. They are also available through our patient portal for easy access.'
        }
      ]
    },
    {
      category: 'Billing & Insurance',
      questions: [
        {
          q: 'What payment methods do you accept?',
          a: 'We accept cash, credit cards (Visa, MasterCard, American Express), debit cards, and most insurance plans. Payment plans may be available for larger bills.'
        },
        {
          q: 'Will you bill my insurance directly?',
          a: 'Yes, we bill most insurance companies directly. You are responsible for any co-pays, deductibles, or non-covered services at the time of visit.'
        },
        {
          q: 'Can I get an estimate of costs before my procedure?',
          a: 'Yes, our billing department can provide cost estimates. Please call us with your insurance information and the procedure details for an accurate estimate.'
        }
      ]
    },
    {
      category: 'Patient Care',
      questions: [
        {
          q: 'Can family members accompany me?',
          a: 'Yes, family members are welcome to accompany you to appointments. However, they may need to wait in designated areas during certain procedures.'
        },
        {
          q: 'Do you offer wheelchair accessibility?',
          a: 'Yes, our entire facility is wheelchair accessible with ramps, elevators, and wide corridors. Wheelchairs are available for patient use.'
        },
        {
          q: 'What should I bring to my appointment?',
          a: 'Please bring a valid photo ID, insurance card, list of current medications, and any relevant medical records or previous test results.'
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-purple-900 via-blue-800 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-purple-500 text-white">
              FAQs
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-blue-100">
              Find answers to common questions about our services, procedures, and policies
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, catIndex) => (
              <div key={catIndex} className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <HelpCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">
                    {category.category}
                  </h2>
                </div>

                <div className="space-y-4">
                  {category.questions.map((faq, qIndex) => {
                    const globalIndex = `${catIndex}-${qIndex}`
                    const isOpen = openIndex === globalIndex

                    return (
                      <Card
                        key={qIndex}
                        className="border-2 hover:border-blue-500 transition-colors cursor-pointer"
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                      >
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg font-semibold pr-4">
                              {faq.q}
                            </CardTitle>
                            <div className={`transition-transform duration-300 flex-shrink-0 ${
                              isOpen ? 'rotate-180' : ''
                            }`}>
                              <ChevronDown className="h-6 w-6 text-blue-600" />
                            </div>
                          </div>
                        </CardHeader>
                        {isOpen && (
                          <CardContent className="pt-0">
                            <p className="text-muted-foreground leading-relaxed">
                              {faq.a}
                            </p>
                          </CardContent>
                        )}
                      </Card>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our team is here to help. Contact us for any additional information you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-block">
                <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full text-lg font-semibold transition-colors">
                  Contact Us
                </button>
              </a>
              <a href="tel:+15551234567" className="inline-block">
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-colors">
                  Call Us Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}