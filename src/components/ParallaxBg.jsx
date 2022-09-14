import React from 'react';
import { Parallax } from 'react-parallax';

import BgImg from '../assets/paraGoku.jpg'

const ParallaxBg = () => {
    return (
        <div >
            <div className='bg-tertiary h-10'></div>
            <Parallax className='absolute bg-white sm:h-[15vh] sm:pt-20 md:h-[20vh] md:pt-18 lg:h-[25vh] lg:pt-0'
                bgImage={BgImg} bgImageAlt='parallaxImage' strength={400} />
            <div className='bg-tertiary h-10'></div>
        </div>
    )
}

export default ParallaxBg;