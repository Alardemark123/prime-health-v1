'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', 'facilities', 'equipment', 'departments', 'team']

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1597807037496-c56a1d8bc29a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbHxlbnwwfHx8Ymx1ZXwxNzYwNjg5NjYxfDA&ixlib=rb-4.1.0&q=85',
      title: 'Prime Health Exterior',
      category: 'facilities'
    },
    {
      url: 'https://images.unsplash.com/photo-1648047547783-8d64bf80c17f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBob3NwaXRhbHxlbnwwfHx8Ymx1ZXwxNzYwNjg5NjYxfDA&ixlib=rb-4.1.0&q=85',
      title: 'Modern Hospital Building',
      category: 'facilities'
    },
    {
      url: 'https://images.unsplash.com/photo-1606206873764-fd15e242df52?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVjaG5vbG9neXxlbnwwfHx8Ymx1ZXwxNzYwNjg5NjY2fDA&ixlib=rb-4.1.0&q=85',
      title: 'Advanced Medical Equipment',
      category: 'equipment'
    },
    {
      url: 'https://images.pexels.com/photos/4957793/pexels-photo-4957793.jpeg',
      title: 'Medical Technology',
      category: 'equipment'
    },
    {
      url: 'https://images.pexels.com/photos/8728559/pexels-photo-8728559.jpeg',
      title: 'Laboratory Setup',
      category: 'departments'
    },
    {
      url: 'https://images.unsplash.com/photo-1705255159965-bcccfd3dcc8b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBob3NwaXRhbHxlbnwwfHx8Ymx1ZXwxNzYwNjg5NjYxfDA&ixlib=rb-4.1.0&q=85',
      title: 'Medical Facility',
      category: 'facilities'
    },
    {
      url: 'https://images.unsplash.com/photo-1512978587787-47fc7ac10b63?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBob3NwaXRhbHxlbnwwfHx8Ymx1ZXwxNzYwNjg5NjYxfDA&ixlib=rb-4.1.0&q=85',
      title: 'Patient Care Area',
      category: 'departments'
    },
    {
      url: 'https://images.pexels.com/photos/7789851/pexels-photo-7789851.jpeg',
      title: 'Administrative Office',
      category: 'departments'
    },
    {
      url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400',
      title: 'Medical Team',
      category: 'team'
    }
  ]

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-pink-900 via-purple-800 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-pink-500 text-white">
              Gallery
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Facility Gallery
            </h1>
            <p className="text-xl text-blue-100">
              Take a visual tour of our modern healthcare facility and advanced medical equipment
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b sticky top-20 z-40 backdrop-blur-sm bg-background/95">
        <div className="container mx-auto px-4">
          <div className="flex gap-3 justify-center flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border-2 hover:border-blue-500 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-2xl"
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-white text-xl font-semibold mb-2">
                          {image.title}
                        </h3>
                        <Badge className="bg-blue-500 text-white">
                          {image.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}