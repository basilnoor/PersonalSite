import React from 'react'

import Projects from '../components/Projects';
import Outline from '../assets/outline-text/portfolio.svg'

const Portfolio = () => {
    return (
        <section id='portfolio' className='section bg-secondary min-h-[1400px]'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center text-center'>
                    <img className='hidden lg:block absolute  opacity-40' src={Outline} alt='' />
                    <div className='pt-12'>
                        <h2 className='section-title'> My Recent Projects</h2>
                        <p className='subtitle'>Here are a few of the projects I've worked on since I first started programming. Not all of them are technical, but they served as my introduction to programming. These projects allowed me to maintain my motivation and make things that I thought were enjoyable or useful. My desire to produce new projects only grows as I learn more. Every undertaking is a fresh puzzle that needs to be solved. My love of programming and my passion for the field are both driven by this excitement for learning and solving problems.</p>
                    </div>
                </div>
                <Projects />
            </div>
        </section>
    )
}

export default Portfolio;