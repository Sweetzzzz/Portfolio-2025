'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Front End Lead',
    company: 'Icebreak',
    period: '2023',
    description: [
      'Built and optimized React interfaces for a campus social platform',
      'Implemented event scheduling, messaging, and personalized feeds',
      'Optimized performance for fast, accessible user experiences'
    ]
  },
  {
    title: 'Frontend Software Engineer',
    company: 'BroncoBond',
    period: '2023',
    description: [
      'Designed responsive Flutter UIs for a social platform',
      'Integrated event management, group messaging, and location-based features',
      'Ensured a stable experience with thorough testing and debugging'
    ]
  },
  {
    title: 'UI Designer',
    company: 'College Voter Registration Outreach',
    period: '2022',
    description: [
      'Developed a UI for an internal admin panel to streamline voter registration',
      'Integrated an OCR model for automated data extraction in swing states',
      'Built with HTML and CSS for a lightweight and efficient interface'
    ]
  },
  {
    title: 'Tutor',
    company: 'Cal Poly Pomona',
    period: '2022',
    description: [
      'Assisted students with homework, study habits, and exam prep',
      'Identified weaknesses and improved problem-solving skills'
    ]
  }
]

export default function Experience() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Work Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 border-l border-blue-600/20 dark:border-[#16c98d]/20"
            >
              <div className="absolute w-3 h-3 bg-blue-600 dark:bg-[#16c98d] rounded-full -left-[6.5px] top-2" />
              <div className="mb-2">
                <h3 className="text-xl font-semibold">{experience.title}</h3>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 space-x-2">
                  <span>{experience.company}</span>
                  <span>•</span>
                  <span>{experience.period}</span>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                {experience.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 