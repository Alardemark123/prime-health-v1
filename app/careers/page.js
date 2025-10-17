'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { 
  Briefcase, 
  Heart, 
  TrendingUp, 
  Users,
  GraduationCap,
  Award,
  CheckCircle2
} from 'lucide-react'

export default function CareersPage() {
  const positions = [
    {
      title: 'Radiologic Technologist',
      department: 'Radiology',
      type: 'Full-time',
      location: 'On-site',
      description: 'Seeking experienced radiologic technologist for PET-CT imaging and general radiology services.',
      requirements: [
        'State licensure as Radiologic Technologist',
        'ARRT certification preferred',
        '2+ years of experience',
        'PET-CT experience a plus'
      ]
    },
    {
      title: 'Medical Laboratory Technician',
      department: 'Laboratory',
      type: 'Full-time',
      location: 'On-site',
      description: 'Join our laboratory team performing diagnostic testing with state-of-the-art equipment.',
      requirements: [
        'MLT or MLS certification',
        'Strong attention to detail',
        'Experience with automated analyzers',
        'Excellent organizational skills'
      ]
    },
    {
      title: 'Registered Nurse',
      department: 'Patient Care',
      type: 'Full-time',
      location: 'On-site',
      description: 'Compassionate RN needed to provide exceptional patient care and support.',
      requirements: [
        'Current RN license',
        'BSN preferred',
        'Strong communication skills',
        'Patient-focused approach'
      ]
    },
    {
      title: 'Front Desk Receptionist',
      department: 'Administration',
      type: 'Full-time',
      location: 'On-site',
      description: 'First point of contact for patients, handling appointments and inquiries.',
      requirements: [
        'Customer service experience',
        'Excellent communication skills',
        'Computer proficiency',
        'Professional demeanor'
      ]
    },
    {
      title: 'Pharmacist',
      department: 'Pharmacy',
      type: 'Full-time',
      location: 'On-site',
      description: 'Licensed pharmacist to provide medication dispensing and patient counseling services.',
      requirements: [
        'PharmD degree',
        'Active pharmacy license',
        'Strong clinical knowledge',
        'Patient counseling experience'
      ]
    },
    {
      title: 'Medical Records Specialist',
      department: 'Administration',
      type: 'Full-time',
      location: 'Hybrid',
      description: 'Manage patient records and ensure HIPAA compliance.',
      requirements: [
        'Medical records experience',
        'Knowledge of HIPAA regulations',
        'Attention to detail',
        'EHR system proficiency'
      ]
    }
  ]

  const benefits = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Health Insurance',
      description: 'Comprehensive medical, dental, and vision coverage'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Retirement Plan',
      description: '401(k) with employer matching contributions'
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: 'Education Support',
      description: 'Tuition reimbursement and continuing education opportunities'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Professional Development',
      description: 'Career advancement opportunities and training programs'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-green-900 via-teal-800 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-green-500 text-white">
              Careers
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-blue-100">
              Build a rewarding career in healthcare with Prime Health. We're always looking for talented, compassionate professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Work at <span className="text-teal-600">Prime Health</span>?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join a team that values excellence, compassion, and innovation in healthcare
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 hover:border-teal-500 hover:shadow-xl transition-all duration-300 text-center">
                <CardHeader>
                  <div className="h-16 w-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-teal-600">{benefit.icon}</div>
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gradient-to-b from-teal-50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Open <span className="text-teal-600">Positions</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Explore current opportunities to join our healthcare team
              </p>
            </div>

            <div className="space-y-6">
              {positions.map((position, index) => (
                <Card key={index} className="border-2 hover:border-teal-500 hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Briefcase className="h-6 w-6 text-teal-600" />
                          <CardTitle className="text-2xl">{position.title}</CardTitle>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="secondary">{position.department}</Badge>
                          <Badge variant="outline">{position.type}</Badge>
                          <Badge variant="outline">{position.location}</Badge>
                        </div>
                        <CardDescription className="text-base">
                          {position.description}
                        </CardDescription>
                      </div>
                      <Button className="bg-teal-600 hover:bg-teal-700 whitespace-nowrap">
                        Apply Now
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <p className="font-semibold text-sm text-muted-foreground mb-3">Requirements:</p>
                      <div className="grid md:grid-cols-2 gap-2">
                        {position.requirements.map((req, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-green-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Don't See the Right Position?
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Send us your resume and we'll keep you in mind for future opportunities
            </p>
            <Button size="lg" className="bg-white text-teal-600 hover:bg-teal-50 px-8 py-6 rounded-full text-lg">
              <Link href="/contact">Submit Your Resume</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}