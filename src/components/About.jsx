import React from 'react'
import { Parallax } from 'react-scroll-parallax'

import Image from '../assets/avatar_finished.svg'
import Outline from '../assets/outline-text/about.svg'

const About = () => {
    return (
        <section id='about' className='section bg-secondary pb-20'>
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row gap-24'>
                    <img className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
                        src={Image} alt='' />
                    <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
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
                                    I'm an aspiring software developer pursuing a post-baccalaureate degree at Oregon State University. It was difficult for me to pursue a career in programming because I had to give up a passion of mine, medicine.
                                    However, after having done so, it was clear that I should have made the decision much sooner. I've always been fascinated by innovation and technology, and now this is where I'm putting all of my attention and ambitions. Going forward,
                                    I intend to keep learning and honing my skills as a developer. I'll keep my portfolio updated so that all of you can follow along my journey and keep up with my growth as a person and programmer.
                                </p>
                            </div>
                        </div>
                        <button className='btn btn-md bg-main hover:bg-main_dark transition-all'>
                            Contact me
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;