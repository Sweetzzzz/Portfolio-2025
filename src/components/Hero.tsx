'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Hello, I'm Jacob Lembach. A passionate Frontend Developer.
          </p>
          
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="text-gray-900 dark:text-white">Creating </span>
            <span className="text-blue-600 dark:text-[#16c98d]">beautiful</span>
            <span className="text-gray-900 dark:text-white"> user experiences</span>
          </h1>

          <div className="flex items-center justify-center space-x-4">
            <motion.a
              href="/resume/your-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 dark:bg-[#16c98d] dark:hover:bg-[#14b67d] text-white px-6 py-3 rounded-lg transition-colors"
            >
              Download CV
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
