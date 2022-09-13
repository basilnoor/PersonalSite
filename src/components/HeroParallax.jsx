import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'

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
                className="h-[100vh] w-full bg-#bbe8f6"
                layers={[
                    {
                        className: 'bg-slate-900',
                        image: bg,
                        translateY: [0, 50],
                        shouldAlwaysCompleteAnimation: true,
                        expanded: false,
                    },
                    {
                        image: moon,
                        translateY: [0, 30],
                        translateX: [0, 30],
                        shouldAlwaysCompleteAnimation: true,
                        expanded: false,
                    },
                    {
                        image: bg1,
                        translateY: [0, 55],
                        shouldAlwaysCompleteAnimation: true,
                        expanded: false,
                    },
                    {
                        image: bg2,
                        translateY: [0, 35],
                        shouldAlwaysCompleteAnimation: true,
                        expanded: false,
                    },
                    {
                        image: bg3,
                        translateY: [0, 25],
                        shouldAlwaysCompleteAnimation: true,
                        expanded: false,
                    },
                    {
                        image: bg4,
                        translateY: [5, 10],
                        shouldAlwaysCompleteAnimation: true,
                        expanded: false,
                    },
                ]}
            >
            </ParallaxBanner>
        </header>

    )
}

export default HeroParallax;