'use client'

import { motion } from 'framer-motion'
import { FaReact, FaFigma, FaGitAlt } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiPython, SiFlutter, SiPostgresql } from 'react-icons/si'
import { cn } from '@/lib/utils'

const skills = [
  {
    name: 'React',
    icon: FaReact,
    color: 'text-[#61DAFB]'
  },
  {
    name: 'Figma',
    icon: FaFigma,
    color: 'text-[#F24E1E]'
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    color: 'text-[#3178C6]'
  },
  {
    name: 'Tailwind',
    icon: SiTailwindcss,
    color: 'text-[#06B6D4]'
  },
  {
    name: 'Python',
    icon: SiPython,
    color: 'text-[#3776AB]'
  },
  {
    name: 'Flutter',
    icon: SiFlutter,
    color: 'text-[#02569B]'
  },
  {
    name: 'SQL',
    icon: SiPostgresql,
    color: 'text-[#4169E1]'
  },
  {
    name: 'Git',
    icon: FaGitAlt,
    color: 'text-[#F34F29]'
  }
]

export default function Skills() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Skills
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border-[0.25px] border-blue-600/20 dark:border-[#16c98d]/20 shadow-lg"
            >
              <skill.icon className={cn('w-12 h-12 mb-4', skill.color)} />
              <span className="font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 