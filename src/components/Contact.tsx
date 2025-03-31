'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  })
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({
    type: null,
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '')
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: null, message: '' })

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.user_name,
          from_email: formData.user_email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )

      setStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.'
      })
      setFormData({ user_name: '', user_email: '', message: '' })
    } catch (error) {
      console.error('Error sending email:', error)
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Contact Me
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          {status.type && (
            <div
              className={`p-4 rounded-lg ${
                status.type === 'success'
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                  : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
              }`}
            >
              {status.message}
            </div>
          )}

          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border-[0.25px] border-blue-600/20 dark:border-[#16c98d]/20 focus:ring-2 focus:ring-blue-600 dark:focus:ring-[#16c98d] focus:border-transparent outline-none transition-colors"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border-[0.25px] border-blue-600/20 dark:border-[#16c98d]/20 focus:ring-2 focus:ring-blue-600 dark:focus:ring-[#16c98d] focus:border-transparent outline-none transition-colors"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border-[0.25px] border-blue-600/20 dark:border-[#16c98d]/20 focus:ring-2 focus:ring-blue-600 dark:focus:ring-[#16c98d] focus:border-transparent outline-none transition-colors resize-none"
              required
              disabled={isSubmitting}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-[#16c98d] dark:hover:bg-[#14b67d] text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
} 