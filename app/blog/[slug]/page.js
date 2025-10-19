'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Calendar, User, Clock, Share2 } from 'lucide-react'

export default function BlogDetailPage() {
  const params = useParams()
  const slug = params.slug

  // Mock blog post data
  const post = {
    title: 'Understanding PET-CT Imaging: A Comprehensive Guide',
    category: 'Medical Technology',
    author: 'Dr. Sarah Mitchell',
    date: 'May 15, 2025',
    readTime: '5 min read',
    image: '/doctors/Doctor-one-female.png',
    content: `
PET-CT imaging represents one of the most significant advances in modern medical diagnostics, combining two powerful imaging technologies to provide comprehensive information about the body's structure and function.

## What is PET-CT Imaging?

PET-CT (Positron Emission Tomography - Computed Tomography) is a sophisticated imaging technique that merges the functional information from PET scanning with the detailed anatomical images from CT scanning. This combination allows physicians to see not only where a problem is located but also how it's functioning at the cellular level.

## How Does It Work?

The PET component uses a radioactive tracer (usually a form of glucose) that is injected into the bloodstream. Cancer cells and other metabolically active tissues absorb more of this tracer, making them visible on the scan. The CT component provides detailed anatomical images that help pinpoint the exact location of any abnormalities.

## Common Uses

PET-CT imaging is particularly valuable for:

- **Cancer Detection**: Identifying tumors and determining if cancer has spread
- **Treatment Monitoring**: Assessing how well cancer treatment is working
- **Heart Disease**: Evaluating blood flow and identifying damaged heart tissue
- **Brain Disorders**: Diagnosing neurological conditions like Alzheimer's disease

## Preparing for Your PET-CT Scan

Proper preparation is essential for accurate results:

1. **Fasting**: Don't eat for 6 hours before your scan
2. **Hydration**: Drink plenty of water
3. **Avoid Exercise**: No strenuous activity for 24 hours prior
4. **Clothing**: Wear comfortable, loose-fitting clothes without metal
5. **Medications**: Discuss your current medications with your doctor

## What to Expect During the Procedure

The entire process typically takes 2-3 hours:

1. **Tracer Injection**: A small amount of radioactive tracer is injected
2. **Uptake Period**: You'll wait 60-90 minutes in a quiet room for the tracer to circulate
3. **Scanning**: The actual scan takes 20-30 minutes while you lie still on the table
4. **Completion**: After the scan, you can usually resume normal activities

## Safety Considerations

PET-CT scanning is safe for most people. The amount of radiation exposure is minimal and comparable to other diagnostic imaging procedures. However, inform your doctor if you:

- Are pregnant or breastfeeding
- Have diabetes
- Have claustrophobia
- Have any allergies

## Results and Follow-up

A specialized radiologist will analyze your images and send a detailed report to your referring physician, usually within 1-2 business days. Your doctor will then discuss the results with you and recommend any necessary follow-up care.

## Conclusion

PET-CT imaging is a powerful diagnostic tool that has revolutionized cancer detection and treatment monitoring. At Prime Health, we use the latest generation PET-CT scanner operated by experienced technologists to ensure the highest quality images and patient care.

If you have questions about PET-CT imaging or would like to schedule a scan, please contact our imaging department.
    `
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-blue-900 via-teal-800 to-cyan-900">
        <div className="container mx-auto px-4">
          <Link href="/blog">
            <Button variant="outline" className="mb-8 border-white text-white hover:bg-white hover:text-blue-900">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-teal-500 text-white">
              {post.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-blue-100">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8 md:p-12">
                <div className="prose prose-lg max-w-none">
                  <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
                    {post.content.split('\n').map((paragraph, index) => {
                      if (paragraph.startsWith('## ')) {
                        return (
                          <h2 key={index} className="text-2xl font-bold text-foreground mt-8 mb-4">
                            {paragraph.replace('## ', '')}
                          </h2>
                        )
                      } else if (paragraph.startsWith('- **')) {
                        const match = paragraph.match(/- \*\*(.+?)\*\*: (.+)/)
                        if (match) {
                          return (
                            <div key={index} className="ml-4 mb-2">
                              <strong className="text-foreground">{match[1]}:</strong> {match[2]}
                            </div>
                          )
                        }
                      } else if (paragraph.match(/^\d+\./)) {
                        return (
                          <div key={index} className="ml-4 mb-2">
                            {paragraph}
                          </div>
                        )
                      } else if (paragraph.trim()) {
                        return (
                          <p key={index} className="mb-4 text-base">
                            {paragraph}
                          </p>
                        )
                      }
                      return null
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Share */}
            <div className="mt-12 flex items-center justify-center gap-4">
              <span className="text-muted-foreground">Share this article:</span>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Related <span className="text-blue-600">Articles</span>
            </h2>
            <div className="text-center text-muted-foreground">
              <p>Check out more health articles and resources on our blog</p>
              <Link href="/blog">
                <Button className="mt-6 bg-blue-600 hover:bg-blue-700">
                  View All Articles
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}