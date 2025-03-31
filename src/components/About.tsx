'use client'

import { motion } from 'framer-motion'

const strengths = [
  {
    title: 'User-Centric Design',
    description: 'Creating intuitive interfaces that prioritize user experience and accessibility'
  },
  {
    title: 'Clean Code',
    description: 'Writing maintainable, efficient code following best practices'
  },
  {
    title: 'Problem Solving',
    description: 'Finding innovative solutions to complex technical challenges'
  }
]

export default function About() {
  return (
    <section className="py-32 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I'm a passionate Developer with a strong foundation in creating beautiful, 
              user-friendly applications. My approach combines technical expertise with a keen eye 
              for design, ensuring that every project delivers both functionality and aesthetic appeal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border-[0.25px] border-blue-600/20 dark:border-[#16c98d]/20 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2">{strength.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{strength.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 