import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { EarthCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] mx-w-7xl mx-auto flex felex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915eff]'> Manav </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A go-getter,quick to learn with great teamwork <br className='sm:block hidden' /> and leardership qualities.
            Driven by my love for<br className='sm:block hidden' /> problem solving I thrive on turning  complex 
            <br className='sm:block hidden' />ideas into  user-friendly solutions.  
          </p>
        </div>
      </div>

      <ComputersCanvas />
      <div className=' absolute xs:bottom-4 bottom-1 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 30, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity, repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />

          </div>
        </a>

      </div>
    </section>
  )
}

export default Hero