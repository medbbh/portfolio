/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'

const About = () => {
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

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  const stats = [
    { label: "Projects Completed", value: "15+" },
    { label: "Technologies Mastered", value: "20+" },
    { label: "Years Experience", value: "2+" },
  ]

  const achievements = [
    {
      title: "Supabase Launch Week 14 Winner",
      description: "Led team to victory in international hackathon with Thimar AI platform",
      year: "2025"
    },
    {
      title: "SalamHack International",
      description: "Team leader and full-stack developer for winning solution",
      year: "2025"
    },
    {
      title: "Ecothon Moscow",
      description: "Ranked 16th out of 29 teams in Green Code competition",
      year: "2024"
    }
  ]

  return (
    <section className="py-20 bg-primary">
      <div className={`${styles.paddingX} max-w-7xl mx-auto`}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-accent-light uppercase tracking-wider text-lg mb-4">Introduction</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Description */}
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p 
              className="text-gray-300 text-lg leading-relaxed"
              variants={itemVariants}
            >
              I'm a passionate Full-Stack Developer currently working at Next Technology, 
              specializing in building modern web applications with React, Django, and AI integration. 
              My journey in software development has been driven by curiosity and a desire to create 
              meaningful digital experiences.
            </motion.p>

            <motion.p 
              className="text-gray-300 text-lg leading-relaxed"
              variants={itemVariants}
            >
              With expertise spanning from frontend frameworks to backend architectures, 
              I enjoy tackling complex problems and turning ideas into reality. I'm particularly 
              interested in AI/ML integration and blockchain technologies, always staying current 
              with emerging trends in the tech industry.
            </motion.p>

            <motion.p 
              className="text-gray-300 text-lg leading-relaxed"
              variants={itemVariants}
            >
              When I'm not coding, you can find me participating in hackathons, contributing to 
              open-source projects, or exploring new technologies that push the boundaries of 
              what's possible in web development.
            </motion.p>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div 
            className="grid grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="bg-secondary p-6 rounded-lg text-center"
                variants={statsVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="text-3xl font-bold text-accent mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Achievements Section */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-12">Key Achievements</h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-secondary p-6 rounded-lg border border-gray-700 hover:border-accent/50 transition-colors"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-accent font-semibold text-lg">{achievement.title}</h4>
                  <span className="text-accent-light text-sm bg-accent/20 px-2 py-1 rounded">
                    {achievement.year}
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default SectionWrapper(About, "about")