/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'

const ExperienceCard = ({ experience, index }) => (
  <VerticalTimelineElement 
    contentStyle={{ 
      background: 'rgba(22, 22, 54, 0.8)',
      backdropFilter: 'blur(16px)',
      color: '#fff',
      border: '1px solid rgba(107, 114, 128, 0.3)',
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    }}
    contentArrowStyle={{ 
      borderRight: '7px solid rgba(22, 22, 54, 0.8)' 
    }}
    date={
      <span className="text-accent-light font-medium">
        {experience.date}
      </span>
    }
    iconStyle={{ 
      background: `linear-gradient(135deg, ${experience.iconBg}, ${experience.iconBg}dd)`,
      border: '3px solid #6366F1',
      boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)',
    }}
    icon={
      <motion.div 
        className='flex justify-center items-center w-full h-full'
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        <img 
          src={experience.icon} 
          alt={experience.company_name}
          className='w-[70%] h-[70%] object-contain rounded-lg'
        />
      </motion.div>
    }
  >
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      {/* Header */}
      <div className="mb-6">
        <h3 className='text-white text-xl font-bold mb-2'>
          {experience.title}
        </h3>
        <p className='text-accent-light text-base font-medium mb-1'>
          {experience.company_name}
        </p>
        <div className="w-12 h-0.5 bg-gradient-to-r from-accent to-accent-light" />
      </div>

      {/* Description */}
      <ul className='space-y-3'>
        {experience.points.map((point, pointIndex) => (
          <motion.li
            key={`experience-point-${pointIndex}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: (index * 0.1) + (pointIndex * 0.05), duration: 0.3 }}
            className='flex items-start gap-3'
          >
            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
            <span className='text-gray-200 text-sm leading-relaxed'>
              {point}
            </span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  </VerticalTimelineElement>
)

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const contentVariants = {
    hidden: { 
      opacity: 0, 
      x: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      x: -20,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  }

  const pointVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }
    })
  }

  const indicatorVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-accent-light uppercase tracking-wider text-lg mb-4">Career Journey</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Work Experience</h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Tab Navigation */}
          <motion.div 
            className="flex flex-wrap gap-2 mb-8 border-b border-gray-700"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {experiences.map((experience, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-3 text-sm font-medium transition-all duration-300 border-b-2 relative ${
                  activeTab === index
                    ? 'text-accent border-accent'
                    : 'text-gray-400 border-transparent hover:text-gray-300'
                }`}
                variants={tabVariants}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-left">
                  <div className="font-semibold">{experience.company_name}</div>
                  <div className="text-xs opacity-75">{experience.date}</div>
                </div>
                {activeTab === index && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                    layoutId="activeTab"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="bg-secondary p-8 rounded-lg min-h-[300px]"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-2xl font-bold text-white mb-2">
                  {experiences[activeTab].title}
                </h3>
                <p className="text-accent-light font-medium text-lg mb-1">
                  {experiences[activeTab].company_name}
                </p>
                <p className="text-gray-400">
                  {experiences[activeTab].date}
                </p>
              </motion.div>

              <div className="space-y-4">
                <motion.h4 
                  className="text-white font-semibold mb-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Key Responsibilities & Achievements:
                </motion.h4>
                <ul className="space-y-3">
                  {experiences[activeTab].points.map((point, pointIndex) => (
                    <motion.li 
                      key={pointIndex} 
                      className="text-gray-300 leading-relaxed flex items-start gap-3"
                      variants={pointVariants}
                      initial="hidden"
                      animate="visible"
                      custom={pointIndex}
                    >
                      <motion.span 
                        className="text-accent mt-1 flex-shrink-0"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 + pointIndex * 0.1 }}
                      >
                        ▸
                      </motion.span>
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Indicators */}
          <motion.div 
            className="flex justify-center mt-6 gap-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {experiences.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeTab === index ? 'bg-accent' : 'bg-gray-600 hover:bg-gray-500'
                }`}
                variants={indicatorVariants}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SectionWrapper(Experience, "work")
