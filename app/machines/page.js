'use client'

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, User, ArrowRight, Clock } from 'lucide-react'

export default function BlogPage() {
  const posts = [
    {
      slug: 'philips-gemini-tf-lxl-64-slices',
      title: 'Philips Gemini TF 64-slice PET/CT',
      excerpt: 'A state-of-the-art hybrid PET/CT scanner that combines Time-of-Flight (TOF) PET with 64-slice CT imaging — delivering exceptional accuracy for oncology, cardiac, and whole-body diagnostics.',
      category: 'Medical Technology',
      author: 'Dr. Sarah Mitchell',
      date: 'May 15, 2025',
      readTime: '5 min read',
      image: '/machines/machine_one.png',
    },
    {
      slug: 'siemens-biograph-mct20-20-slices',
      title: 'Siemens Biograph mCT 20-slice PET/CT',
      excerpt: 'An advanced PET/CT system designed for precise molecular imaging and patient comfort, featuring a 78 cm wide bore and reliable performance across oncology, neurology, and cardiology.',
      category: 'Medical Technology',
      author: 'Dr. James Anderson',
      date: 'May 12, 2025',
      readTime: '7 min read',
      image: '/machines/machine_two.png',
    },
  ];

  const categories = ['All', 'Medical Technology']

  return (
    <div className="min-h-screen">
      {/* Hero */}

      <section
  className="relative mt-20 py-20 bg-cover bg-center overflow-hidden"
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
  <div className="relative container mx-auto px-4 z-20">
  <div className="max-w-4xl mx-auto text-center">
  <Badge className="mb-6 bg-teal-500 text-white">
    Medical Technology
  </Badge>
  <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
    Advanced Imaging Machines
  </h1>
  <p className="text-xl text-blue-100">
    Explore our state-of-the-art PET/CT scanners and other medical equipment, delivering precision diagnostics and cutting-edge healthcare solutions.
  </p>
</div>

  </div>
</section>

      {/* Categories */}
      {/* <section className="py-8 bg-background border-b sticky top-20 z-40 backdrop-blur-sm bg-background/95">
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
      </section> */}

      {/* Blog Posts Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {posts.map((post, index) => (
                <Link key={index} href={`/machines/${post.slug}`}>
                  <Card className="group h-full border-2 hover:border-teal-500 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden transform hover:-translate-y-2">
                    <div className="relative h-72 overflow-hidden">
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
                      {/* <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                      </div> */}
                      {/* <div className="flex items-center justify-between text-sm text-muted-foreground mt-3 pt-3 border-t">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div> */}
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