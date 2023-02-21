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
                                    Greetings! I am Basil, an aspiring software developer. My programming journey began in 2021, when I enrolled in a post-baccalaureate degree program at <a href="https://oregonstate.edu/" target="_blank" ><b className='text-main'>Oregon State University</b></a>.
                                    Although I have experience in medicine and business, i've found a deep passion for the world of software development.
                                    Moving forward, I'm committed to continuous learning and refining my skills as a developer.
                                    You can keep track of my progress here as I plan to regularly update my portfolio.
                                    I invite you to join me on my journey as a professional and programmer.
                                </p>
                            </div>
                        </div>
                        <a href={Resume} target='_blank'>
                            <button className='btn btn-md bg-main_button hover:bg-main_button_hover transition-all'>
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