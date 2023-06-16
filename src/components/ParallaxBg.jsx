import React from 'react';
import { Parallax } from 'react-parallax';
import { ParallaxBanner } from 'react-scroll-parallax';

import BgImg from '../assets/paraGoku.webp'
import BgImg2 from '../assets/motorcycle.webp'
import BgImg3 from '../assets/motorcycle2.webp'
import spider from '../assets/spiderman.webp'

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
            <Parallax className='absolute bg-white sm:h-[8vh] sm:pt-8 md:h-[15vh] md:pt-20 lg:h-[25vh] lg:pt-4'
                bgImage={spider} bgImageAlt='parallaxImageMotor' strength={450} />
            <div className='bg-tertiary h-10' />
        </div>
    )
}

export default ParallaxBg;