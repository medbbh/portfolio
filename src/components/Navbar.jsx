/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter, Menu, X } from 'lucide-react'
import { navLinks } from '../constants'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: -20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  }

  const mobileItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  const socialIcons = [
    { icon: Mail, href: "mailto:mohamed@example.com", label: "Email" },
    { icon: Github, href: "https://github.com/BahMbeirik", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/mhamed-elbah-6a954b211/", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/mohamed", label: "Twitter" }
  ]

  return (
    <motion.nav
      className={`w-full flex items-center py-4 fixed top-0 z-20 transition-all duration-300 ${
        scrolled ? 'bg-primary/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto px-6'>
        
        {/* Left - Navigation Links */}
        <motion.div 
          className="hidden md:flex items-center gap-8"
          variants={itemVariants}
        >
          {navLinks.map((nav) => (
            <motion.a
              key={nav.id}
              href={`#${nav.id}`}
              className={`text-sm font-medium transition-colors duration-300 ${
                active === nav.title ? "text-accent" : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setActive(nav.title)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {nav.title}
            </motion.a>
          ))}
        </motion.div>

        {/* Center - Brand Name */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to='/'
            className='flex items-center gap-2'
            onClick={() => {
              setActive("")
              window.scrollTo(0, 0)
            }}
          >
            <motion.p 
              className='text-white text-lg font-bold cursor-pointer'
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              Mohamed
            </motion.p>
          </Link>
        </motion.div>

        {/* Right - Social Icons */}
        <motion.div 
          className="hidden md:flex items-center gap-4"
          variants={itemVariants}
        >
          {socialIcons.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-accent transition-colors p-2 rounded-full hover:bg-accent/10"
              whileHover={{ 
                scale: 1.2,
                rotate: 5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                transition: { 
                  duration: 0.5, 
                  delay: 0.8 + index * 0.1,
                  ease: "easeOut"
                }
              }}
            >
              <social.icon size={18} />
            </motion.a>
          ))}
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.div 
          className='md:hidden flex flex-1 justify-end items-center'
          variants={itemVariants}
        >
          <motion.button
            onClick={() => setToggle(!toggle)}
            className="p-2 text-gray-300 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {toggle ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {toggle && (
              <motion.div
                className='absolute top-20 right-0 mx-4 my-2 min-w-[140px] bg-secondary rounded-lg shadow-xl border border-gray-700'
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className='p-4 space-y-3'>
                  {navLinks.map((nav) => (
                    <motion.a
                      key={nav.id}
                      href={`#${nav.id}`}
                      className={`block text-sm font-medium transition-colors duration-300 ${
                        active === nav.title ? "text-accent" : "text-gray-300 hover:text-white"
                      }`}
                      onClick={() => {
                        setToggle(!toggle)
                        setActive(nav.title)
                      }}
                      variants={mobileItemVariants}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {nav.title}
                    </motion.a>
                  ))}
                  
                  <motion.div 
                    className="border-t border-gray-700 pt-3 mt-3"
                    variants={mobileItemVariants}
                  >
                    <div className="flex justify-center gap-4">
                      {socialIcons.map((social) => (
                        <motion.a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-accent transition-colors p-2"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <social.icon size={16} />
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar