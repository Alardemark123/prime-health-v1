'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Calendar, User, Clock, Share2 } from 'lucide-react'

const machines = [
  {
    slug: 'philips-gemini-tf-lxl-64-slices',
    title: 'Philips Gemini TF/LXL 64 Slices PET-CT',
    category: 'Medical Imaging Technology',
    author: 'Dr. Sarah Mitchell',
    date: 'May 15, 2025',
    readTime: '6 min read',
    image: '/machines/machine_one.png',
    excerpt:
      'Integrating high-resolution CT with Time-of-Flight PET for exceptional accuracy in cancer detection and metabolic imaging.',
    content: `
The **Philips Gemini TF/LXL 64-slice PET-CT** system combines high-resolution CT imaging and Time-of-Flight (TOF) PET technology, delivering fast, accurate, and detailed diagnostic images.

## Key Features
- **Time-of-Flight (TOF) PET** improves image contrast and accuracy, reducing noise and scan duration.
- **64-slice high-resolution CT** enables fast anatomical scans with precise localization.
- **LYSO crystal detectors** ensure higher sensitivity and sharper detail.
- **Open gantry design (70 cm bore)** increases patient comfort and accessibility.
- **Low-dose imaging protocols** enhance safety without sacrificing quality.
- **Integrated workflow** for faster diagnosis and better throughput.

## Clinical Applications
Used in:
- **Oncology** — Tumor detection, staging, and therapy monitoring.
- **Cardiology** — Myocardial viability and perfusion imaging.
- **Neurology** — Alzheimer’s, epilepsy, and brain metabolism studies.

## Why It Matters
The Philips Gemini TF/LXL provides both functional and anatomical data in a single scan, improving diagnostic confidence while minimizing patient exposure and scanning time.
    `
  },
  {
    slug: 'siemens-biograph-mct20-20-slices',
    title: 'Siemens Biograph mCT20 20 Slices PET-CT',
    category: 'Medical Imaging Technology',
    author: 'Dr. James Anderson',
    date: 'May 12, 2025',
    readTime: '7 min read',
    image: '/machines/machine_two.png',
    excerpt:
      'A next-generation PET-CT system combining HD•PET and TrueV technologies for accurate, low-dose, and reproducible imaging results.',
    content: `
The **Siemens Biograph mCT20 PET-CT** delivers high-definition molecular imaging with exceptional quantitative accuracy and patient comfort.

## Key Features
- **Wide 78 cm bore** for enhanced patient comfort and accessibility.
- **HD•PET and TrueV technology** for precise lesion detectability and reproducibility.
- **20-slice CT subsystem** optimized for low radiation dose and fast acquisition.
- **High sensitivity detectors** ensure clear results even at lower tracer doses.
- **Continuous quantitative accuracy**, ideal for therapy response monitoring.
- **Metal artifact reduction (iMAR)** improves image quality near implants.

## Clinical Applications
Ideal for:
- **Oncology** — Whole-body cancer imaging and therapy assessment.
- **Cardiology** — Perfusion and viability studies with quantitative precision.
- **Neurology** — Brain metabolism and dementia evaluation.

## Why It Matters
Health Prescription uses the Siemens Biograph mCT20 for its outstanding quantitative performance and patient-focused design.
    `
  }
]

export default function MachineDetailPage() {
  const { slug } = useParams()
  const post = machines.find((m) => m.slug === slug)

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl font-bold mb-4">Machine Not Found</h1>
        <Link href="/machines">
          <Button size="sm">Back to Machines</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* HEADER */}
      {/* <section className="py-20 mt-20 bg-gradient-to-br from-teal-900 via-cyan-800 to-blue-900 text-white text-center">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">{post.title}</h1>
          <p className="max-w-2xl text-blue-100 text-sm md:text-base">{post.excerpt}</p>
        </div>
      </section> */}

<section
  className="relative mt-20 py-20 bg-cover bg-center overflow-hidden flex items-center justify-center text-center text-white"
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
  <div className="relative z-20 container mx-auto px-4 flex flex-col items-center justify-center">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">
        {post.title}
      </h1>
      <p className="max-w-2xl mx-auto text-sm md:text-base text-white/90 leading-relaxed">
        {post.excerpt}
      </p>
    </div>
  </div>
</section>


      {/* MAIN CONTENT */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>

          {/* DETAILS */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-5">
            <Link href="/machines">
              <Badge className="mb-3 bg-teal-600 text-white text-xs">Back to Machines</Badge>
            </Link> 
            <Badge className="mb-3 bg-teal-600 text-white text-xs">{post.category}</Badge> 
            </div>

            {/* <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-5">
              <div className="flex items-center gap-1.5">
                <User className="h-3.5 w-3.5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                <span>{post.readTime}</span>
              </div>
            </div> */}

            <Card className="border border-muted shadow-md bg-white/90 backdrop-blur-sm">
            <CardContent className="p-5">
  <article className="max-w-none text-muted-foreground leading-[1.4] tracking-tight">
    {post.content.split('\n').map((line, i) => {
      if (line.startsWith('## ')) {
        return (
          <h2
            key={i}
            className="text-[13px] font-semibold text-foreground mt-4 mb-2"
          >
            {line.replace('## ', '')}
          </h2>
        )
      } else if (line.startsWith('- **')) {
        const match = line.match(/- \*\*(.+?)\*\* (.+)/)
        return (
          <p key={i} className="ml-2 mb-1 text-[12px]">
            <strong className="font-medium">{match?.[1]}:</strong> {match?.[2]}
          </p>
        )
      } else if (line.trim()) {
        return (
          <p key={i} className="mb-2 text-[12px]">
            {line}
          </p>
        )
      }
      return null
    })}
  </article>
            </CardContent>
            </Card>

            {/* SHARE SECTION */}
            <div className="mt-5 flex items-center gap-3">
              <span className="text-xs text-muted-foreground">Share this page:</span>
              <Button
                variant="outline"
                size="sm"
                className="hover:bg-teal-600 hover:text-white transition-all text-xs"
              >
                <Share2 className="h-3.5 w-3.5 mr-1" />
                Share
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
