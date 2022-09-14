import React from 'react'
import { Parallax } from 'react-scroll-parallax'

import Projects from '../components/Projects';
import Outline from '../assets/outline-text/portfolio.svg'

const Portfolio = () => {
    return (
        <section id='portfolio' className='section bg-secondary min-h-[1400px] pt-12 pb-48'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center text-center'>
                    <Parallax translateY={[120, 50]} speed={5}>
                        <img className='opacity-40' src={Outline} alt='' />
                    </Parallax>
                    <div className='pt-6 md:pt-12'>
                        <h2 className='section-title'> My Recent Projects</h2>
                        <p className='subtitle'>Here are a few of the projects I've worked on since I started my programming journey.
                            These projects allowed me to channel my motivation and make apps that I find helpful to others or simply enjoyed making.
                            My desire to create new projects only grows as I learn more. Every project is like a new puzzle that needs to be solved.
                            My love of programming and my passion for the field are both driven by this excitement for learning and solving problems.
                            <br /> <br />
                            Please don't hesitate to <b className='text-main'>click</b> any of the projects below to view the <b className='text-main'>github repo</b>. In the readme files I go into more details about each project,
                            design decisions, skills / technologies and more!
                        </p>
                    </div>
                </div>
                <Projects />
            </div>
        </section>
    )
}

export default Portfolio;