/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const nameVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5
      }
    }
  }

  const badgeVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  }

  return (
    <section className='w-full min-h-screen flex items-center justify-center bg-primary'>
      <div className={`${styles.paddingX} ${styles.container}`}>
        <motion.div 
          className="text-center space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          <motion.div variants={badgeVariants}>
            <div className="inline-block bg-accent/20 text-accent-light px-4 py-2 rounded-full text-sm mb-6">
              🏆 Supabase Launch Week 14 Winner
            </div>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            Hi, I'm{' '}
            <motion.span 
              className="text-accent"
              variants={nameVariants}
            >
              Mohamed
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-8"
            variants={itemVariants}
          >
            Full-Stack Developer at Next Technology. I build modern web applications 
            with React, Django, and AI integration.
          </motion.p>

          <motion.div 
            className="flex justify-center"
            variants={itemVariants}
          >
            <motion.a
              href="#projects"
              className="bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-lg transition-colors"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              View Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
