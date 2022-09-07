import React from 'react'

import Image from '../assets/avatar_finished.svg'
import Outline from '../assets/outline-text/about.svg'

const About = () => {
    return (
        <section id='about' className='section bg-secondary'>
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row gap-24'>
                    <img className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
                        src={Image} alt='' />
                    <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
                        <div className='flex flex-col'>
                            <img className='hidden lg:block absolute  opacity-40' src={Outline} alt='' />
                            <div className='pt-12'>
                                <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3'>
                                    Basil Noor
                                </h2>
                                <p className='mb-4 text-cyan-700'>Full Stack Developer</p>
                                <hr className='mb-8 opacity-5' />
                                <p className='mb-8'>
                                    I'm an aspiring software developer pursuing a post-baccalaureate degree at Oregon State University. It was difficult for me to pursue a career in programming because I had to give up a passion of mine, medicine.
                                    However, after having done so, it was clear that I should have probably done so much sooner. I've always been fascinated by innovation and technology, and now this is where I'm putting all of my attention and ambitions. Going forward,
                                    I intend to keep learning and honing my skills as a programmer. I'll keep updating this website so that everyone can follow my journey and learn more about who I am and what i'm currently working on.
                                </p>
                            </div>
                        </div>
                        <button className='btn btn-md bg-cyan-700 hover:bg-cyan-900 transition-all'>
                            Contact me
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;