import React from 'react';
//countup
import CountUp from 'react-countup';
//intersection observer hook
import { useInView } from 'react-intersection-observer';
//motion
import {motion} from 'framer-motion';
//variants
import { fadeIn } from '../variants';


const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className='section pb-10' id='about' ref={ref}>
      <div className='container mx-auto pt-10'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:item-center
        lg:gap-x-20 lg:gap-y-0  h-screen'>
          {/* {img} */}
          <motion.div 
          variants={fadeIn('right',0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once:false, amount:0.3}}
          className='flex-1 bg-about bg-contain bg-no-repeat h-[640px]
          mix-blend-lighten bg-top'></motion.div>
          {/* {text} */}
          < motion.div 
          variants={fadeIn('left',0.5)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once:false, amount:0.3}}
          className='flex-1'>
            <h2 className='h2 text-epic font-primary'>About Me</h2>

            <h3 className='h3 mb-4'>I am a  Freelance Front-end Developer with over 5 years of 
              experience
            </h3>
            <p className='mb-6'>
            As an aspiring web developer, I craft stunning, intuitive websites using my expertise in HTML, CSS, and JavaScript.
            Currently pursuing an MCA at Lovely Professional University,I immerse myself in web development to create exceptional digital experiences. 
            My academic projects and certifications demonstrate my passion for the field.
            I'm driven to continuously learn and leverage emerging technologies to make a significant impact through innovative web solutions.
            </p>
            {/* {stats} */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient
                mb-2'>
                 {inView ?  <CountUp start={0} end={5} duration={3} /> :null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years Of <br />
                 Experience
                </div>
        
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient
                mb-2'>
                  {inView ?  <CountUp start={0} end={5} duration={3} /> :null}

                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br />
                  Completed
                </div>
        
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient
                mb-2'>
                  {inView ?  <CountUp start={0} end={5} duration={3} /> :null}

                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Knowledge of <br />
                  Programming Langauge
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
            {/* {button} */}
            <button className='btn btn-lg'>Contact me</button>
             <a href='/portfolio' className='text-gradient btn-link'> 
              My Portfolio
             </a>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default About;
