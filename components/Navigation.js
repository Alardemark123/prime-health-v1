'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { 
  Menu, 
  X, 
  ChevronDown,
  Heart,
  Activity
} from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/departments', label: 'Departments' },
    { href: '/machines', label: 'Machines' },
    { href: '/doctors', label: 'Doctors' },
    { href: '/facilities', label: 'Facilities' },
    // { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/95 backdrop-blur-md shadow-lg'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Activity className={`h-8 w-8 transition-colors ${
                scrolled ? 'text-blue-600' : 'text-blue-600'
              } group-hover:text-teal-500`} />
              <Heart className="h-4 w-4 text-teal-500 absolute -top-1 -right-1 fill-teal-500" />
            </div>
            <span className={`text-2xl font-bold transition-colors ${
              scrolled ? 'text-blue-900' : 'text-blue-600'
            } group-hover:text-blue-600`}>
              Prime <span className="text-teal-500">Health</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full transition-all duration-200 font-medium ${
                  pathname === link.href
                    ? 'bg-teal-500 text-white'
                    : scrolled
                    ? 'text-gray-600 hover:bg-teal-50 hover:text-teal-500'
                    : 'text-gray-600 hover:bg-teal-50 hover:text-teal-500'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          {/* <div className="hidden lg:block">
            <Button className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-6">
              <Link href="/contact">Book Appointment</Link>
            </Button>
          </div> */}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {/* {isOpen && (
          <div className="lg:hidden py-4 bg-white rounded-2xl shadow-xl mt-2 border">
            <div className="flex flex-col space-y-2 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg transition-colors font-medium ${
                    pathname === link.href
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button className="bg-teal-500 hover:bg-teal-600 text-white w-full mt-4">
                <Link href="/contact">Book Appointment</Link>
              </Button>
            </div>
          </div>
        )} */}
      </div>
    </nav>
  )
}