import React from 'react';
import { Parallax } from 'react-parallax';
import { ParallaxBanner } from 'react-scroll-parallax';

import BgImg from '../assets/paraGoku.webp'
import spider from '../assets/spider.webp'

const ParallaxBg = () => {
    return (
        <div >
            {/* Goku
            <div className='bg-tertiary h-10' />
            <Parallax className='absolute bg-white sm:h-[15vh] sm:pt-20 md:h-[20vh] md:pt-18 lg:h-[25vh] lg:pt-0'
                bgImage={BgImg2} bgImageAlt='parallaxImageGoku' strength={400} />
            <div className='bg-tertiary h-10' />
            */}
            <div className='bg-tertiary h-10' />
            <Parallax className='absolute bg-white sm:h-[15vh] sm:pt-10 md:h-[20vh] md:pt-6 lg:h-[25vh] lg:pt-4'
                bgImage={spider} bgImageAlt='parallaxImageMotor' strength={400} />
            <div className='bg-tertiary h-10' />
        </div>
    )
}

export default ParallaxBg;