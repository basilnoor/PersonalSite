import React from 'react'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'
import { motion } from 'framer-motion'

import bg from "../assets/hero/stars.png";
import moon from "../assets/hero/moon.png";
import bg1 from "../assets/hero/bg-2.png";
import bg2 from "../assets/hero/bg-3.png";
import bg3 from "../assets/hero/bg-4.png";
import bg4 from "../assets/hero/bg-5s.svg";

const HeroParallax = () => {
    return (
        <header>
            <ParallaxBanner
                id='home'
                className="h-[100vh] w-full bg-slate-900" >
                <ParallaxBannerLayer image={bg} translateY={[0, 50]} shouldAlwaysCompleteAnimation='true' expanded='false' />
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 4 }}>
                    <ParallaxBannerLayer image={moon} translateY={[0, 30]} translateX={[0, 30]} shouldAlwaysCompleteAnimation='true' expanded='false' />
                </motion.div>
                <ParallaxBannerLayer image={bg1} translateY={[20, 50]} shouldAlwaysCompleteAnimation='true' expanded='false' />
                <ParallaxBannerLayer image={bg2} translateY={[16, 35]} shouldAlwaysCompleteAnimation='true' expanded='false' />
                <ParallaxBannerLayer className='flex text-center flex-col justify-center' translateY={[13, 35]} translateX={[5, 5]} shouldAlwaysCompleteAnimation='true' expanded='false'>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
                        <h1 className='font-roboto font-bold sm:text-8xl md:text-9xl drop-shadow-2xl'>Hello</h1>
                    </motion.div>
                </ParallaxBannerLayer>
                <ParallaxBannerLayer image={bg3} translateY={[15, 25]} shouldAlwaysCompleteAnimation='true' expanded='false' />
                <ParallaxBannerLayer image={bg4} translateY={[15, 0]} shouldAlwaysCompleteAnimation='true' expanded='false' />
            </ParallaxBanner>
        </header>

    )
}

export default HeroParallax;