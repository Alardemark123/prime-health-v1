'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ArrowLeft, CheckCircle2, Clock, Users, Award } from 'lucide-react'

export default function DepartmentDetailPage() {
  const params = useParams()
  const slug = params.slug

  const departmentData = {
    'receiving-area': {
      name: 'Receiving Area',
      description: 'Our receiving area serves as the first point of contact for all patients visiting Prime Health. Designed for efficiency and comfort, this area ensures smooth patient intake and registration.',
      image: 'https://images.unsplash.com/photo-1648047547783-8d64bf80c17f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBob3NwaXRhbHxlbnwwfHx8Ymx1ZXwxNzYwNjg5NjYxfDA&ixlib=rb-4.1.0&q=85',
      features: [
        'Efficient patient registration system',
        'Initial health assessment',
        'Insurance verification',
        'Appointment scheduling',
        'Patient information management'
      ],
      staff: '6 trained staff members',
      hours: '24/7 availability',
      equipment: 'Digital registration systems, Verification tools'
    },
    'reception': {
      name: 'Reception',
      description: 'Modern reception desk staffed with trained professionals providing comprehensive patient support services including appointment scheduling, queries, and general information.',
      image: 'https://images.pexels.com/photos/7789851/pexels-photo-7789851.jpeg',
      features: [
        'Appointment booking and management',
        'Patient inquiries handling',
        'Medical records coordination',
        'Visitor management',
        'Multi-lingual support'
      ],
      staff: '8 reception staff members',
      hours: 'Monday-Sunday, 8AM-8PM',
      equipment: 'Integrated management software, Communication systems'
    },
    'doctors-room': {
      name: "Doctor's Room",
      description: 'Private consultation rooms equipped with modern diagnostic tools providing a comfortable environment for comprehensive patient examinations and consultations.',
      image: 'https://images.pexels.com/photos/4957793/pexels-photo-4957793.jpeg',
      features: [
        'Private consultation environment',
        'Advanced diagnostic equipment',
        'Digital health records access',
        'Comfortable patient seating',
        'Examination facilities'
      ],
      staff: '12 consultation rooms',
      hours: 'As per doctor schedules',
      equipment: 'Examination tools, Digital systems, Vital signs monitors'
    },
    'pet-ct-room': {
      name: 'PET-CT Room',
      description: 'State-of-the-art PET-CT imaging facility featuring the latest generation scanner providing advanced diagnostic imaging for cancer detection, staging, and treatment monitoring.',
      image: 'https://images.unsplash.com/photo-1606206873764-fd15e242df52?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVjaG5vbG9neXxlbnwwfHx8Ymx1ZXwxNzYwNjg5NjY2fDA&ixlib=rb-4.1.0&q=85',
      features: [
        'Latest generation PET-CT scanner',
        'Sub-millimeter resolution imaging',
        'Whole-body scanning capability',
        'Radiation safety protocols',
        'Expert radiologist interpretation'
      ],
      staff: '6 specialized technicians',
      hours: 'Monday-Saturday, 8AM-6PM',
      equipment: 'Advanced PET-CT scanner, Imaging workstations'
    },
    'hot-lab': {
      name: 'Hot Lab',
      description: 'Specialized radiopharmaceutical preparation facility with stringent safety protocols and quality controls for preparing radioactive tracers used in PET-CT imaging.',
      image: 'https://images.pexels.com/photos/8728559/pexels-photo-8728559.jpeg',
      features: [
        'Radiopharmaceutical preparation',
        'Quality control testing',
        'Radiation safety measures',
        'Sterile environment',
        'Compliance with regulatory standards'
      ],
      staff: '4 nuclear medicine technologists',
      hours: 'Monday-Saturday, 7AM-7PM',
      equipment: 'Synthesis equipment, Quality control instruments'
    },
    'uptake-room': {
      name: 'Uptake Room',
      description: 'Comfortable waiting area designed for patients undergoing radiotracer uptake period before PET-CT scanning, featuring relaxing environment and monitoring facilities.',
      image: 'https://images.unsplash.com/photo-1512978587787-47fc7ac10b63?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBob3NwaXRhbHxlbnwwfHx8Ymx1ZXwxNzYwNjg5NjYxfDA&ixlib=rb-4.1.0&q=85',
      features: [
        'Private relaxation spaces',
        'Temperature controlled environment',
        'Patient monitoring',
        'Entertainment facilities',
        'Comfort amenities'
      ],
      staff: 'Supervised by nursing staff',
      hours: 'During PET-CT operating hours',
      equipment: 'Comfortable recliners, Monitoring systems'
    },
    'radiology': {
      name: 'Radiology',
      description: 'Comprehensive imaging department offering full spectrum of diagnostic imaging services including X-rays, ultrasound, and advanced imaging technologies.',
      image: 'https://images.unsplash.com/photo-1597807037496-c56a1d8bc29a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbHxlbnwwfHx8Ymx1ZXwxNzYwNjg5NjYxfDA&ixlib=rb-4.1.0&q=85',
      features: [
        'Digital X-ray systems',
        'Ultrasound imaging',
        'Doppler studies',
        'Interventional procedures',
        'Expert radiologist reports'
      ],
      staff: '10 radiologists and technicians',
      hours: '24/7 emergency services',
      equipment: 'Digital X-ray, Ultrasound machines, PACS system'
    },
    'laboratory': {
      name: 'Laboratory',
      description: 'Fully-equipped diagnostic laboratory with automated analyzers providing comprehensive testing services with accuracy and quick turnaround times.',
      image: 'https://images.pexels.com/photos/4957793/pexels-photo-4957793.jpeg',
      features: [
        'Complete blood analysis',
        'Biochemistry testing',
        'Microbiology cultures',
        'Histopathology services',
        'Quality assurance programs'
      ],
      staff: '15 laboratory technicians',
      hours: '24/7 services available',
      equipment: 'Automated analyzers, Microscopy equipment'
    },
    'pharmacy': {
      name: 'Pharmacy',
      description: 'On-site pharmacy providing comprehensive medication services with expert pharmacist consultation, prescription management, and patient counseling.',
      image: 'https://images.pexels.com/photos/8728559/pexels-photo-8728559.jpeg',
      features: [
        'Wide range of medications',
        'Prescription dispensing',
        'Drug interaction checking',
        'Patient counseling',
        'Insurance coordination'
      ],
      staff: '6 licensed pharmacists',
      hours: 'Monday-Sunday, 8AM-10PM',
      equipment: 'Pharmacy management system, Dispensing equipment'
    },
    'patient-lounge': {
      name: 'Patient Lounge',
      description: 'Comfortable waiting area designed with patient comfort in mind, featuring modern amenities and relaxing environment for patients and visitors.',
      image: 'https://images.unsplash.com/photo-1648047547783-8d64bf80c17f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBob3NwaXRhbHxlbnwwfHx8Ymx1ZXwxNzYwNjg5NjYxfDA&ixlib=rb-4.1.0&q=85',
      features: [
        'Comfortable seating arrangements',
        'Entertainment options',
        'Refreshment facilities',
        'Reading materials',
        'Child-friendly play area'
      ],
      staff: 'Reception and support staff',
      hours: 'During facility hours',
      equipment: 'Entertainment systems, WiFi, Refreshments'
    },
    'admin-office': {
      name: 'Admin Office',
      description: 'Central administrative hub coordinating all facility operations, patient care services, and ensuring smooth functioning of all departments.',
      image: 'https://images.pexels.com/photos/7789851/pexels-photo-7789851.jpeg',
      features: [
        'Patient records management',
        'Billing and insurance',
        'Staff coordination',
        'Facility operations',
        'Quality assurance'
      ],
      staff: '12 administrative personnel',
      hours: 'Monday-Friday, 8AM-6PM',
      equipment: 'Management software, Communication systems'
    }
  }

  const dept = departmentData[slug] || departmentData['receiving-area']

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-blue-900 via-teal-800 to-cyan-900">
        <div className="container mx-auto px-4">
          <Link href="/departments">
            <Button variant="outline" className="mb-8 border-white text-white hover:bg-white hover:text-blue-900">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Departments
            </Button>
          </Link>
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-teal-500 text-white">
              Department
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {dept.name}
            </h1>
            <p className="text-xl text-blue-100">
              {dept.description}
            </p>
          </div>
        </div>
      </section>

      {/* Department Image */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={dept.image}
                alt={dept.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Department Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <Card className="border-2">
                <CardHeader>
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Staff</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{dept.staff}</p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="h-12 w-12 bg-teal-100 rounded-full flex items-center justify-center mb-3">
                    <Clock className="h-6 w-6 text-teal-600" />
                  </div>
                  <CardTitle className="text-lg">Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{dept.hours}</p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="h-12 w-12 bg-cyan-100 rounded-full flex items-center justify-center mb-3">
                    <Award className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle className="text-lg">Equipment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{dept.equipment}</p>
                </CardContent>
              </Card>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Key <span className="text-blue-600">Features</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {dept.features.map((feature, index) => (
                  <Card key={index} className="border-2 hover:border-teal-500 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-teal-500 flex-shrink-0 mt-1" />
                        <p className="text-foreground font-medium">{feature}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Want to Learn More?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us for more information about our {dept.name.toLowerCase()} services
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 rounded-full text-lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}