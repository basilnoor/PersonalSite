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
                        <p className='subtitle'>I firmly believe that engaging in hobbies contributes to a <b className='text-main'>healthier</b> lifestyle.
                            Maintaining a good work-life balance is crucial, as it enables me to reduce stress and recharge. With that being said,
                            I think it's important to highlight some of my interests outside of programming, giving you a better understanding of who I am.</p>
                    </div>
                </div>
                <HobbiesSlider />
            </div>
        </section>
    )
}

export default Hobbies;