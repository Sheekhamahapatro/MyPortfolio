/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
//images
import Image from '../assets/avatar.svg';
//icons
import {FaGithub, FaInstagram, FaLinkedinIn, FaSpotify} from 'react-icons/fa';
//type animation
import {TypeAnimation} from 'react-type-animation';
//motion
import {motion} from 'framer-motion';
//variants
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center pb-10' id='home'>
    <div className="container mx-auto">
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        {/* {Text} */}
        <div className='flex-1 text-center font-secondary lg:text-left' >
          <motion.h1
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once:false, amount:0.7}}
            className='text-[55px] font-tertiary font-bold leading-[0.8] lg:text-[60px]'
          >
          Sheekha<span> Mahapatro</span>
          </motion.h1>
          <motion.div
           variants={fadeIn('up', 0.4)}
           initial="hidden"
           whileInView={'show'}
           viewport={{once:false, amount:0.7}}
           className='mb-6 text-[26px] lg:text-[40px] font-secondary font-semibold leading-[2]'>
            <span className='text-white mr-5'>I am a </span>
            <TypeAnimation
              cursor={true}
              sequence={[
                'Web Developer',
                2000,
                'Web Designer',
                2000,
                'Freelancer',
                2000,
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
             />
          </motion.div>
          <motion.p
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once:false, amount:0.7}}         
          className='mb-8 max-w-lg mx-auto lg:mx-0'> 
            I am a web developer and UX/UI Designer. I have a passion for web
            development and love to create for web and mobile devices.
          </motion.p>
      <motion.div
  variants={fadeIn('up', 0.6)}
  initial="hidden"
  whileInView={'show'}
  viewport={{once:false, amount:0.7}}
  className='flex flex-wrap gap-6 items-center mb-12 mx-auto lg:mx-0'>
  
  <button className='btn btn-lg'>Contact me</button>

  <a href='#' className='text-gradient btn-link'>
    My Portfolio
  </a>

  <a
    href='/Sheekha_Mahapatro_Resume.pdf'
    download
    className='btn btn-lg'
  >
    Download Resume
  </a>
</motion.div>
          {/* Socials */}
          <motion.div
            variants={fadeIn('up', 0.7)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once:false, amount:0.7}}
           className='flex text-[20px] gap-x-9 max-w-max mx-auto
          lg:mx-5 items-center'>
          <a href='https://github.com/Sheekhamahapatro'>
            <FaGithub />
          </a>
          <a href='https://www.instagram.com/visual.arts_07/'>
            <FaInstagram />
          </a>
          <a href='https://www.linkedin.com/in/sheekha-mahapatro-72a7191b5/'>
            <FaLinkedinIn />
          </a>
          <a href='https://open.spotify.com/user/31dyf5cxlhqeqcmw2gelfvvgvhem'>
            <FaSpotify />
          </a>
           </motion.div >
        </div>
        {/* {Images} */}
        <motion.div
          variants={fadeIn('down', 0.5)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once:false, amount:0.3}} 
        className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[382px]
        '>
          <img src={Image} alt='' />
        </motion.div>
        {/* {Icons} */}
        <div> </div>
      </div>

   </div>
   </section>
  );
};

export default Banner;
