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
                        <h2 className='section-title'>Hobbies</h2>
                        <p className='subtitle'>I firmly believe that engaging hobbies contribute to a healthier life style. Really, any activity that can help you relax and reduce stress is crucial. Having said that, I thought it was important to highlight some of my interests here so that you could get to know me better.</p>
                    </div>
                </div>
                <HobbiesSlider />
            </div>
        </section>
    )
}

export default Hobbies;