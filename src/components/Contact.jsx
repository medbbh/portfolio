/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { useRef, useState } from 'react'
import { SectionWrapper } from '../hoc'

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    // Simple form submission without emailjs for now
    // You can configure emailjs later by adding environment variables
    setTimeout(() => {
      setLoading(false)
      alert('Thank you for your message! I will get back to you soon.')
      
      setForm({
        name: '',
        email: '',
        message: ''
      })
    }, 1000)

    // Uncomment and configure this when you have emailjs set up:
    /*
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Mohamed',
          from_email: form.email,
          to_email: 'your-email@email.com',
          message: form.message
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false)
          alert('Thank you! I will get back to you as soon as possible.')

          setForm({
            name: '',
            email: '',
            message: ''
          })
        },
        (error) => {
          setLoading(false)
          console.error(error)
          alert('Ahh, something went wrong. Please try again.')
        }
      )
    */
  }

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-accent-light uppercase tracking-wider text-lg mb-4">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Contact</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects.
            Let's connect and create something amazing together!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-tertiary p-8 rounded-lg"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-primary border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent"
                  required
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-primary border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent"
                  required
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What would you like to say?"
                  className="w-full px-4 py-3 bg-primary border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-accent hover:bg-accent-dark text-white font-medium py-3 px-6 rounded-lg transition-colors disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>

          {/* Simple Contact Info */}
          <div className="mt-12 text-center">
            <h3 className="text-white font-semibold mb-4">Other Ways to Connect</h3>
            <div className="flex justify-center gap-6">
              <a
                href="mailto:contact@mohamed.dev"
                className="text-accent hover:text-accent-light transition-colors"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-babah-6a954b211/"
                className="text-accent hover:text-accent-light transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/medbbh"
                className="text-accent hover:text-accent-light transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionWrapper(Contact, "contact")