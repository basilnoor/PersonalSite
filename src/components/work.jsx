import React from 'react'
import { Parallax } from 'react-scroll-parallax'

import arrow from '../assets/arrow.svg'
import eleven from '../assets/work/7eleven.webp'
import freddie from '../assets/work/freddiemac.webp'
import Outline from '../assets/outline-text/work.svg'
import Resume from '../assets/resume.pdf'

const Work = () => {
    return (
        <section id='work' className='section bg-secondary min-h-[1400px] pt-12 pb-48'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center text-center'>
                    <Parallax translateY={[80, 20]} speed={5}>
                        <img className='opacity-40' src={Outline} alt='' />
                    </Parallax>
                    <div className='pt-6 md:pt-12'>
                        <h2 className='section-title'>Timeline</h2>
                        <p className='subtitle'>Below, you will find my professional timeline. Starting with my work as a self-employed store franchisee
                            and extending to my current position as a software engineer. Please refer to my <a href={Resume} target='_blank'><b className='text-main'>resume</b></a> for details.
                        </p>
                    </div>
                </div>
                <div className='container mx-auto'>
                    <div className='flex flex-col items-center text-center'>
                        <p className='text-white'>Freddie Mac</p>
                        <p className=''>Software Engineer Intern</p>
                        <p className='text-main pb-2 text-sm'>May 2023 - Aug. 2023</p>
                        <img className='h-32' src={freddie} alt='' />
                        <br></br>
                        <img className='h-20 opacity-90' src={arrow} alt='' />
                        <br></br>
                        <p className='text-white pt-4'>7-Eleven</p>
                        <p className=''>Software Engineer (Contract)</p>
                        <p className='text-main pb-2 text-sm'>Nov. 2022 - Jan. 2023</p>
                        <br></br>
                        <img className='h-20 opacity-90' src={arrow} alt='' />
                        <br></br>
                        <p className='text-white pt-4'>7-Eleven</p>
                        <p className=''>Store Franchisee</p>
                        <p className='text-main pb-4 text-sm'>2017-2021</p>
                        <img className='h-36' src={eleven} alt='' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work;