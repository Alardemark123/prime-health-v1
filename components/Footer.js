'use client'

import Link from 'next/link'
import { Activity, Heart, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  const quickLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/departments', label: 'Departments' },
    { href: '/doctors', label: 'Our Doctors' },
  ]

  const services = [
    { href: '/services', label: 'PET-CT Imaging' },
    { href: '/services', label: 'Laboratory' },
    { href: '/services', label: 'Radiology' },
    { href: '/services', label: 'Pharmacy' },
  ]

  const resources = [
    { href: '/blog', label: 'Blog' },
    { href: '/guidelines', label: 'Guidelines' },
    { href: '/faqs', label: 'FAQs' },
    { href: '/careers', label: 'Careers' },
  ]

  const legal = [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Use' },
    { href: '/contact', label: 'Contact Us' },
  ]

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6 group">
              <div className="relative">
                <Activity className="h-8 w-8 text-blue-500 group-hover:text-teal-500 transition-colors" />
                <Heart className="h-4 w-4 text-teal-500 absolute -top-1 -right-1 fill-teal-500" />
              </div>
              <span className="text-2xl font-bold">
                Prime <span className="text-teal-500">Health</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Your trusted partner in advanced medical diagnostics and comprehensive healthcare services. Committed to excellence in patient care.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="h-5 w-5 text-teal-500" />
                <span>63 Malakas St. Franca Arcade Bldg., Brgy.Pinyahan Quezon City
                </span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-5 w-5 text-teal-500" />
                <span>(02) 7000 – 6385 | 0906 – 002 9461
                </span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-5 w-5 text-teal-500" />
                <span>franca.primehealthimaging@gmail.com
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-teal-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-teal-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-teal-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Prime Health. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-2">
              {legal.map((link, index) => (
                <span key={link.href} className="flex items-center">
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-teal-500 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                  {index < legal.length - 1 && <span className="mx-2 text-gray-600">|</span>}
                </span>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}