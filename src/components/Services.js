/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
//icons
import { BsArrowUpRight } from 'react-icons/bs';
//motion
import { motion } from 'framer-motion';
//variants
import{ fadeIn } from '../variants';

//service data
const services=[
  {
    name: 'UI/UX Design',
    description: 'Intuitive UX/UI designer crafting engaging digital interfaces.I bridge visual design and technology to create delightful products.',
    link:'Learn More'
  },
  {
    name: 'Frotend developer',
    description: 'As a frontend developer, I create responsive, visually appealing websites with HTML, CSS ,JavaScript and ReactJS.',
    link:'Learn More'
    
  },
  {
    name: 'Backend Designer',
    description: 'Skilled backend developer engineering robust, scalable web applications and APIs.',
    link:'Learn More'
  },
  {
    name: 'Software Developer',
    description: 'As a software developer, I create full-stack web and mobile applications using modern frameworks and tools. ',
    link:'Learn More'
  }
]
const Services = () => {
  return (
  <section className='section' id='services'>
    <div className='container mx-auto pt-20'style={{paddingTop:'50px'}}>
      <div className='flex flex-col lg:flex-row'>
        {/* text & image */}
        <motion.div
        variants={fadeIn('right',0.3)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once:false, amount:0.3}}
        className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat
        mix-blend-lighten mb12 lg:mb-0'>
          <h2 className='h2 text-epic mb-6'>What I do</h2>
          <h3 className='h3 max-w-[455px] mb-16 '>
            I am a  Freelance Front-end Developer with over 1 years of 
              experience</h3>

            <button className='btn btn-sm mb-5'>See My Work</button>
        </motion.div>
        {/* Services */}
        <motion.div 
        variants={fadeIn('left',0.5)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once:false, amount:0.3}}
        className='flex-1'>
          {/* services list */}
          <div >
            {services.map((services, index) => {
              // destructure service
              const { name, description, link } = services;
              return (
              <div className='border-b border-white/20 h-[146px] mb-[38px]
              flex'
               key={index}>
                <div className='max-w-[476px]'>
                  <h4 className='text-[20px] tracking-wider font-primary
                  font-semibold mb-6'>{name}</h4>
                  <p className='font-secondary leading-tight'>
                    {description}</p>
                </div>
                <div className=' flex flex-col flex-1 items-end '>
                 <a href= '#' className='btn w-9 h-9 mb-[42px] flex 
                 justify-center items-center' >
                  <BsArrowUpRight />
                 </a>
                <a href='#' className='text-gradient text-sm'>
                  {link}</a>
                </div>
              </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </section>);
};

export default Services;
