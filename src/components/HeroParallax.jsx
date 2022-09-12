import React from 'react'
import { Parallax } from 'react-parallax'

import Background from '../assets/hero/background.png'
import CloudBack from '../assets/hero/cloud_back.png'
import CloudFront from '../assets/hero/cloud_front.png'
import Trees from '../assets/hero/fore_trees.png'
import House from '../assets/hero/house.png'
import Mountain from '../assets/hero/mountain_back.png'

const HeroParallax = () => {
    return (
        <Parallax className='relative h-[1080px]' bgImage={Background} strength={800}>
            <div className='flex items-center justify-center absolute h-[1080px] w-full'>
                <div>
                    <img src={CloudBack} alt='' />

                </div>
                <img src={Mountain} alt='' />
                <img src={House} alt='' />

                <div>
                    <img src={Trees} alt='' />
                </div>
                <div>
                    <img src={Mountain} alt='' />
                </div>
            </div>

        </Parallax>

    )
}

export default HeroParallax;