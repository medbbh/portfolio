import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../constants'
import { SectionWrapper } from '../hoc'

const ProjectCard = ({ project, index }) => {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: 0.5 + index * 0.1,
        ease: "easeOut"
      }
    })
  }

  return (
    <motion.div
      className="bg-secondary p-6 rounded-lg border border-gray-700 hover:border-accent/50 transition-colors"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
    >
      <motion.div 
        className="mb-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-white">{project.name}</h3>
          <span className="text-accent-light text-sm bg-accent/20 px-2 py-1 rounded">
            {project.year}
          </span>
        </div>
        
        {project.name === "Thimar - AI Productivity Platform" && (
          <motion.div 
            className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm mb-3 inline-block"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
            viewport={{ once: true }}
          >
            🏆 Supabase Launch Week 14 Winner
          </motion.div>
        )}
      </motion.div>

      <motion.p 
        className="text-gray-300 mb-4 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
        viewport={{ once: true }}
      >
        {project.description}
      </motion.p>

      <motion.div 
        className="mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
        viewport={{ once: true }}
      >
        <h4 className="text-white font-semibold mb-2">Key Highlights:</h4>
        <ul className="space-y-1">
          {project.highlights.map((highlight, highlightIndex) => (
            <motion.li 
              key={highlightIndex} 
              className="text-gray-300 text-sm flex items-start gap-2"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.2 + 0.7 + highlightIndex * 0.1 
              }}
              viewport={{ once: true }}
            >
              <motion.span 
                className="text-accent mt-0.5 flex-shrink-0"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.2 + 0.8 + highlightIndex * 0.1 
                }}
                viewport={{ once: true }}
              >
                •
              </motion.span>
              <span>{highlight}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, tagIndex) => (
          <motion.span
            key={tagIndex}
            className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
            variants={tagVariants}
            initial="hidden"
            whileInView="visible"
            custom={tagIndex}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
          >
            {tag.name}
          </motion.span>
        ))}
      </div>

      {project.source_code_link && (
        <motion.a
          href={project.source_code_link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-accent hover:bg-accent-dark text-white px-4 py-2 rounded text-sm transition-colors"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View on GitHub
        </motion.a>
      )}
    </motion.div>
  )
}

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-accent-light uppercase tracking-wider text-lg mb-4">My Work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Featured Projects</h2>
          <motion.p 
            className="text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            A collection of projects that showcase my skills in full-stack development, 
            AI integration, and modern web technologies.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default SectionWrapper(Projects, "projects") 