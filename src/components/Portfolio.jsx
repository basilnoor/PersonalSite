import React from 'react'

import Projects from '../components/Projects';
import Outline from '../assets/outline-text/portfolio.svg'

const Portfolio = () => {
    return (
        <section id='portfolio' className='section bg-[#202434] min-h-[1400px]'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center text-center'>
                    <img className='hidden lg:block absolute  opacity-40' src={Outline} alt='' />
                    <h2 className='section-title'> My Recent Projects</h2>
                    <p className='subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto magni blanditiis optio natus aliquid sit aliquam repellat exercitationem in non doloremque, ipsum provident error amet voluptas. Corrupti soluta minima voluptate!</p>
                </div>
                <Projects />
            </div>
        </section>
    )
}

export default Portfolio;