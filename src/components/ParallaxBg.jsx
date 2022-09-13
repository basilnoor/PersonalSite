import React from 'react';
import { Parallax } from 'react-parallax';

import BgImg from '../assets/paraB2.jpg'

const ParallaxBg = () => {
    return (
        <div >
            <div className='bg-tertiary h-10'></div>
            <Parallax className='absolute h-[25vh]' bgImage={BgImg} strength={-200} />
            <div className='bg-tertiary h-10'></div>
        </div>
    )
}

export default ParallaxBg;