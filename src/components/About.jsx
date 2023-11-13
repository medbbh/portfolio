/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../Utils/motion'
import { SectionWrapper } from '../hoc'

// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
const ServiceCard = ({ index, title, icon }) => {

  return (
    <tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        
        <div options={{ max: 45,scale: 1,speed: 450}}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex 
          justify-evently items-center flex-col'
        >

          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3
            className='text-white text-[20px] font-bold text-center'>{title}
          </h3>
        </div>
      </motion.div>
    </tilt>
  )
}


// eslint-disable-next-line react-refresh/only-export-components
const About = () => {
  return (
    <>

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h1 className={styles.sectionHeadText}>Overview</h1>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px'>
        I am adaptable diplomat and patient.
        I am ready to learn and collaborate in an ever-changing environment.
        My goal is to meet the challenges of web development and design
        to create sustainable impacts on the user experience.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}

      </div>

    </>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(About, "about")