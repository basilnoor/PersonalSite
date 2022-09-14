import React from 'react'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'

import im from "../assets/intro/I'm.svg"
import name from "../assets/intro/Basil.svg"
import imA from "../assets/intro/I'm_a.svg"
import title from "../assets/intro/Software_Developer.svg"

const Intro = () => {
    return (
        <div className='bg-secondary'>
            <div className='container mx-auto'>
                <ParallaxBanner className="flex flex-col text-center justify-center h-[75vh] w-full" >
                    <ParallaxBannerLayer translateY={[40, 55]} translateX={[49, 45]} speed={5} shouldAlwaysCompleteAnimation='true' expanded='false'>
                        <img className='md:w-12' src={im} alt='' />
                    </ParallaxBannerLayer>
                    <ParallaxBannerLayer translateY={[40, 55]} translateX={[55, 65]} speed={5} shouldAlwaysCompleteAnimation='true' expanded='false'>
                        <img className='md:w-28' src={name} alt='' />
                    </ParallaxBannerLayer>
                    <ParallaxBannerLayer translateY={[48, 73]} translateX={[30, 50]} speed={5} shouldAlwaysCompleteAnimation='true' expanded='false'>
                        <img src={imA} alt='' />
                    </ParallaxBannerLayer>
                    <ParallaxBannerLayer translateY={[50, 75]} translateX={[35, 25]} speed={5} shouldAlwaysCompleteAnimation='true' expanded='false'>
                        <img className='sm:w-56 md:w-96 lg:w-auto' src={title} alt='' />
                    </ParallaxBannerLayer>
                </ParallaxBanner>
            </div>
        </div>
    )
}

export default Intro;