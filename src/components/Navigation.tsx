'use client'

import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

const socialLinks = [
  {
    name: 'GitHub',
    url: process.env.NEXT_PUBLIC_GITHUB_URL,
    icon: FaGithub
  },
  {
    name: 'LinkedIn',
    url: process.env.NEXT_PUBLIC_LINKEDIN_URL,
    icon: FaLinkedin
  }
]

const navLinks = [
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' }
]

export default function Navigation() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 dark:bg-[#262626]/60 backdrop-blur-sm border-b border-gray-200 dark:border-[#16c98d]/20 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium hover:text-blue-600 dark:hover:text-[#16c98d] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:text-blue-600 dark:hover:text-[#16c98d] transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={cn(
                'p-2 rounded-lg transition-colors',
                'bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700'
              )}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
} 