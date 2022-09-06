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
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ab fuga eveniet tempore corporis odio repellendus quos blanditiis numquam consequuntur, nihil quis earum quidem reprehenderit distinctio reiciendis dolore dolores recusandae.
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