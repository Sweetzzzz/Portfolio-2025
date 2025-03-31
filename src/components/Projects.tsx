'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'Aidio',
    description: 'A browser-based audio synthesizer that won 1st place at Google Student Developer Club Hackathon. Built with TypeScript and OOP patterns, featuring a dynamic React UI for real-time audio control.',
    image: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Aidio',
    tags: ['TypeScript', 'React', 'OOP'],
    liveUrl: 'https://samlyme.github.io/aidio/',
    githubUrl: 'https://github.com/samlyme/aidio'
  },
  {
    title: 'Intellilearn',
    description: 'A fullstack AI chatbot application that won 2nd place at Microsoft/Avanade AI for a Better Future Hackathon. Features a MERN stack implementation with local LLM deployment and dynamic React UI.',
    image: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Intellilearn',
    tags: ['MERN Stack', 'Express.js', 'MongoDB', 'React', 'Ollama'],
    liveUrl: 'https://www.youtube.com/watch?v=eulOAaetWMY',
    githubUrl: '#'
  },
  {
    title: 'BroncoPay',
    description: 'An Object-Oriented Programming final project optimizing BroncoBucks with faster transactions and campus business integration. Features a secure financial system with MySQL, Express, and role-based access.',
    image: 'https://placehold.co/600x400/1a1a1a/ffffff?text=BroncoPay',
    tags: ['React', 'MySQL', 'Express', 'Figma', 'Docker'],
    liveUrl: 'https://www.youtube.com/watch?v=G_7Tf0lIf_E',
    githubUrl: 'https://github.com/CS3560-03-9/BroncoPay'
  }
]

export default function Projects() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-sm border-[0.25px] border-blue-600/20 dark:border-[#16c98d]/20 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <FaExternalLinkAlt className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-sm px-3 py-1 bg-blue-600/10 text-blue-600 dark:text-[#16c98d] dark:bg-[#16c98d]/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 