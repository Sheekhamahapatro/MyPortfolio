import React from 'react';
//motion
import {motion} from 'framer-motion';
//variants
import {fadeIn} from '../variants';
//img
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';
const Work = () => {
  return (
  <section className='section lg:section' id='work' style={{paddingTop:'100px'}}>
    <div className='container mx-auto '>
      <div  className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once:false, amount:0.3}} 
        className='flex-1 flex flex-col gap-y-10 mb-5  lg:mb-0'>
          {/* text */}
          <div>
            <h2 className=' h2 leading-tight text-epic mx-20'>
              My Latest <br />
              Work.
            </h2>
            <p className='max-w-sm mb-5 mx-20'>
              I created a website using React.js to showcase my top websites.
          It's a platform where I can share and highlight the websites that I'm most proud of. 
          This project allows me to exhibit my skills in web development and create a user-friendly interface 
          for presenting my work to visitors.
                </p>
                <button className='btn btn-sm mx-20'>View All Projects</button>
          </div>
          {/* image */}
          <div className=' group relative overflow-hidden border-2
          border-white/50 rounded-xl'>
            {/* Overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute
            z-40 transition-all duration-300'></div>
            {/* img */}
            <motion.img className='group-hover:scale-125 transition-all duration-500 '
             src={Img1} alt='portfolio' variants={fadeIn} />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12
            group-hover:bottom-24 transition-all duration-500 z-50 text-[36px] mb-15'>
              <span className='text-gradient'>
                React Project
                </span>
              </div>
            {/* title */}
            <div className='absolute -bottom-full left-12
            group-hover:bottom-14 transition-all duration-700 z-50 '>
              <span className='text-3xl text-white'>Weather-App</span>
            </div>
          </div>
        </motion.div>
        <motion.div 
         variants={fadeIn('left', 0.2)}
         initial="hidden"
         whileInView={'show'}
         viewport={{once:false, amount:0.3}}
        className='flex-1 flex flex-col gap-y-5' style={{paddingTop:'10px'}}>
          {/* image */}
          <div className=' group relative overflow-hidden border-2
          border-white/50 rounded-xl'>
            {/* Overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute
            z-40 transition-all duration-300'></div>
            {/* img */}
            <motion.img className='group-hover:scale-125 transition-all duration-500 '
             src={Img2} alt='portfolio' variants={fadeIn} />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12
            group-hover:bottom-24 transition-all duration-500 z-50 text-[36px] mb-15'>
              <span className='text-gradient'>
                UX/UI Design
                </span>
              </div>
            {/* title */}
            <div className='absolute -bottom-full left-12
            group-hover:bottom-14 transition-all duration-700 z-50 '>
              <span className='text-3x1 text-white'>Portfolio</span>
            </div>
          </div>
           {/* image */}
           <div className=' group relative overflow-hidden border-2
          border-white/50 rounded-xl'>
            {/* Overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute
            z-40 transition-all duration-300'></div>
            {/* img */}
            <motion.img className='group-hover:scale-125 transition-all duration-500 '
             src={Img3} alt='portfolio' variants={fadeIn} />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12
            group-hover:bottom-24 transition-all duration-500 z-50 text-[36px] mb-15'>
              <span className='text-gradient'>
                HTML,CSS & Javascript
                </span>
              </div>
            {/* title */}
            <div className='absolute -bottom-full left-12
            group-hover:bottom-14 transition-all duration-700 z-50 '>
              <span className='text-3x1 text-white'>Dev Detective</span>
            </div>
          </div>
        </motion.div>
        
      </div>
    </div>
  </section>
);};

export default Work;
