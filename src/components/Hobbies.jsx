import React from 'react'
import { Parallax } from 'react-scroll-parallax'

import HobbiesSlider from './HobbiesSlider';
import Outline from '../assets/outline-text/lifestyle.svg'

const Hobbies = () => {
    return (
        <section id='hobbies' className='section bg-secondary'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center text-center'>
                    <Parallax translateY={[120, 50]} speed={5}>
                        <img className='opacity-40' src={Outline} alt='' />
                    </Parallax>
                    <div className='pb-10 lg:pb-0 pt-6 md:pt-12'>
                        <h1 className='section-title'>Hobbies</h1>
                        <p className='subtitle'>I firmly believe that engaging hobbies contributes to a <b className='text-main'>healthier</b> lifestyle.
                            A good work-life balance is crucial for me as it helps me reduce stress and reset. Having said that, I think it is important to highlight some of my interests outside of programming so that you can get to know me better.</p>
                    </div>
                </div>
                <HobbiesSlider />
            </div>
        </section>
    )
}

export default Hobbies;