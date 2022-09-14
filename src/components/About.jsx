import React from 'react'
import { Parallax } from 'react-scroll-parallax'

import Image from '../assets/avatar_finished.svg'
import Outline from '../assets/outline-text/about.svg'
import Resume from '../assets/resume.pdf'

const About = () => {
    return (
        <section id='about' className='section bg-secondary pb-20'>
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row gap-24'>
                    <img className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
                        src={Image} alt='' />
                    <div className='flex flex-col items-center text-center lg:items-start lg:text-left pb-5'>
                        <div className='flex flex-col'>
                            <Parallax translateY={[120, 50]} speed={5}>
                                <img className='opacity-40' src={Outline} alt='' />
                            </Parallax>
                            <div className='pt-12'>
                                <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3'>
                                    Basil Noor
                                </h2>
                                <p className='mb-4 text-main'>Full Stack Developer</p>
                                <hr className='mb-8 opacity-5' />
                                <p className='mb-8'>
                                    I'm an aspiring software developer pursuing a post-baccalaureate degree at <a href="https://oregonstate.edu/" target="_blank" ><b className='text-main'>Oregon State University</b></a>.
                                    I began my journey in programming later in life as I was originally pursuing another passion of mine, medicine.
                                    Unsuprisingly, after I began studying to become a developer, it was clear that I should have made the decision much sooner.
                                    I have always had an interest in technology, and working in software development allows me to explore this passion.
                                    Going forward, I intend to keep learning and honing my skills as a developer.
                                    I'll keep my portfolio updated so you can follow along my journey and keep up with my growth as a person and programmer.
                                </p>
                            </div>
                        </div>
                        <a href={Resume} target='_blank'>
                            <button className='btn btn-md bg-main hover:bg-main_dark transition-all'>
                                My Resume
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;