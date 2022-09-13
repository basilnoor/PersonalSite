import React from 'react'

import Logo from '../assets/avatar_finished.svg';

const Hero = () => {
    return (
        <section id='home'
            className='lg:h-[85vh] flex items-center bg-[#202434]
            lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
            <div className='container mx-auto h-full'>
                <div className='flex items-center h-full pt-8'>
                    <div className='lg:flex flex-1 justify-center items-center h-full'>
                        <img src={Logo} alt='' />
                    </div>
                    <div className='flex-1 flex flex-col items-center lg:items-start'>
                        <p className='text-xl text-main mb-[22px] lg:text-2xl'>
                            Hello, I'm Basil
                        </p>
                        <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight md:tracking-[-2px]
                         lg:text-7xl lg:leading-[1.2] font-bold '>
                            I'm a <br /> Software Developer
                        </h1>
                        <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
                            Currently a student at Oregon State University
                        </p>
                        <button className='btn btn-md bg-main hover:bg-main_dark md:btn-lg transition-all'>
                            Download my CV
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero;