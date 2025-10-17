'use client'

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, User, ArrowRight, Clock } from 'lucide-react'

export default function BlogPage() {
  const posts = [
    {
      slug: 'understanding-pet-ct-imaging',
      title: 'Understanding PET-CT Imaging: A Comprehensive Guide',
      excerpt: 'Learn about PET-CT imaging technology, its applications in cancer detection, and what to expect during the procedure.',
      category: 'Medical Technology',
      author: 'Dr. Sarah Mitchell',
      date: 'May 15, 2025',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1606206873764-fd15e242df52?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVjaG5vbG9neXxlbnwwfHx8Ymx1ZXwxNzYwNjg5NjY2fDA&ixlib=rb-4.1.0&q=85'
    },
    {
      slug: 'heart-health-tips',
      title: '10 Essential Tips for Maintaining Heart Health',
      excerpt: 'Expert advice on lifestyle changes, nutrition, and exercise habits that promote cardiovascular wellness.',
      category: 'Preventive Care',
      author: 'Dr. James Anderson',
      date: 'May 12, 2025',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/4957793/pexels-photo-4957793.jpeg'
    },
    {
      slug: 'laboratory-testing-importance',
      title: 'The Importance of Regular Laboratory Testing',
      excerpt: 'Why routine blood tests and diagnostic screenings are crucial for early disease detection and health monitoring.',
      category: 'Diagnostic Testing',
      author: 'Dr. Emily Chen',
      date: 'May 10, 2025',
      readTime: '4 min read',
      image: 'https://images.pexels.com/photos/8728559/pexels-photo-8728559.jpeg'
    },
    {
      slug: 'cancer-screening-guidelines',
      title: 'Cancer Screening Guidelines: What You Need to Know',
      excerpt: 'Comprehensive overview of recommended cancer screening tests, when to get them, and their importance.',
      category: 'Cancer Care',
      author: 'Dr. Michael Roberts',
      date: 'May 8, 2025',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1597807037496-c56a1d8bc29a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbHxlbnwwfHx8Ymx1ZXwxNzYwNjg5NjYxfDA&ixlib=rb-4.1.0&q=85'
    },
    {
      slug: 'managing-chronic-conditions',
      title: 'Managing Chronic Health Conditions Effectively',
      excerpt: 'Practical strategies for living well with chronic diseases through medication management, lifestyle modifications, and regular monitoring.',
      category: 'Chronic Care',
      author: 'Dr. Jennifer Lee',
      date: 'May 5, 2025',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1648047547783-8d64bf80c17f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBob3NwaXRhbHxlbnwwfHx8Ymx1ZXwxNzYwNjg5NjYxfDA&ixlib=rb-4.1.0&q=85'
    },
    {
      slug: 'nutrition-wellness',
      title: 'Nutrition and Wellness: Building Healthy Eating Habits',
      excerpt: 'Evidence-based nutrition guidance to support overall health, boost immunity, and prevent chronic diseases.',
      category: 'Wellness',
      author: 'Dr. David Thompson',
      date: 'May 3, 2025',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1512978587787-47fc7ac10b63?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBob3NwaXRhbHxlbnwwfHx8Ymx1ZXwxNzYwNjg5NjYxfDA&ixlib=rb-4.1.0&q=85'
    }
  ]

  const categories = ['All', 'Medical Technology', 'Preventive Care', 'Diagnostic Testing', 'Cancer Care', 'Chronic Care', 'Wellness']

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-teal-900 via-cyan-800 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-teal-500 text-white">
              Health Blog
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Health Articles & Resources
            </h1>
            <p className="text-xl text-blue-100">
              Expert insights, medical updates, and health tips from our medical professionals
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-background border-b sticky top-20 z-40 backdrop-blur-sm bg-background/95">
        <div className="container mx-auto px-4">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'All' ? 'default' : 'outline'}
                className="rounded-full whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Link key={index} href={`/blog/${post.slug}`}>
                  <Card className="group h-full border-2 hover:border-teal-500 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden transform hover:-translate-y-2">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-teal-500 text-white">
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-teal-600 transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-base line-clamp-2">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mt-3 pt-3 border-t">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-teal-600 font-semibold mt-4 group-hover:gap-3 transition-all">
                        Read More
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}