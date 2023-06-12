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
                        <h2 className='section-title'>Archived Projects</h2>
                        <p className='subtitle'>Here are some of the projects I've worked on since I started my programming journey.
                            These projects have given me the chance to stay motivated and create apps that I found helpful or just really enjoyed making.
                            My love for programming and my passion for the field are fueled by this excitement to keep learning and creating new projects.
                            <br /> <br />
                            To learn more, please <b className='text-main'>click</b> any of the projects below to view the <b className='text-main'>github repo</b>.
                            In the readme files I go into more details about each project, design decisions, and skills / technologies used.
                        </p>
                    </div>
                </div>
                <Projects />
            </div>
        </section>
    )
}

export default Portfolio;