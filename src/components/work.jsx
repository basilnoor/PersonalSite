import React from 'react'
import { Parallax } from 'react-scroll-parallax'

import arrow from '../assets/arrow.svg'
import eleven from '../assets/work/7eleven.webp'
import freddie from '../assets/work/freddiemac.webp'
import Outline from '../assets/outline-text/work.svg'
import Resume from '../assets/resume.pdf'

const Work = () => {
    return (
        <section id='work' className='section bg-secondary min-h-[1400px] pt-12 pb-2'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center text-center'>
                    <Parallax translateY={[85, 20]} speed={5}>
                        <img className='opacity-40' src={Outline} alt='' />
                    </Parallax>
                    <div className='pt-6 md:pt-12'>
                        <h2 className='section-title'>Employment History</h2>
                        <p className='subtitle'>Please find below my professional timeline. Starting from my experience as a self-employed store franchisee and extending to my current role as a software engineer.
                            For detailed information, please refer to my resume by clicking <a href={Resume} target='_blank'><b className='text-main'>here</b></a>.
                        </p>
                    </div>
                </div>
                <div className='container mx-auto flex flex-col items-center justify-center mb-20'>
                    <section className=''>
                        <div className='sticky top-16 bg-secondary py-3 z-10 shadow-xl shadow-secondary'>
                            <h2 className='sm:text-3xl md:pr-24 text-4xl py-4 font-bold tracking-widest'>November 2017</h2>
                        </div>
                        <img className='h-32 pt-2' src={eleven} alt='' />
                        <div className='border-l-4 border-gray-200 sm:ml-6 md:ml-12 mt-4 ml-4 py-14 space-y-14'>
                            <div className='relative'>
                                <div className='absolute top-5 -left-3.5 bg-blue-400 h-6 w-6 rounded-full border-4 border-white'></div>
                                <div className='pl-10'>
                                    <span className='text-xs font-bold opacity-40 tracking-widest'>Nov 2017 - Nov 2022</span>
                                    <h3 className='text-2xl font-semibold tracking-widest mb-2'>7-Eleven</h3>
                                    <p className='text-main'>
                                        Store Franchisee
                                    </p>
                                </div>
                            </div>
                            <div className='relative'>
                                <div className='absolute top-5 -left-3.5 bg-blue-400 h-6 w-6 rounded-full border-4 border-white'></div>
                                <div className='pl-10'>
                                    <span className='text-xs font-bold opacity-40 tracking-widest'>Nov 2022 - Feb 2023</span>
                                    <h3 className='text-2xl font-semibold tracking-widest mb-2'>7-Eleven</h3>
                                    <p className='text-main'>
                                        Software Engineer (Contractor)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className=''>
                        <div className='sticky top-16 bg-secondary py-3 z-10 shadow-xl shadow-secondary'>
                            <h2 className='sm:text-3xl text-4xl px-3 py-4 font-bold tracking-widest'>May 2023</h2>
                        </div>
                        <img className='h-32' src={freddie} alt='' />
                        <div className='border-l-4 border-gray-200 sm:ml-6 md:ml-16 ml-9 mt-2 py-14 space-y-14'>
                            <div className='relative'>
                                <div className='absolute top-5 -left-3.5 bg-blue-400 h-6 w-6 rounded-full border-4 border-white'></div>
                                <div className='pl-10'>
                                    <span className='text-xs font-bold opacity-40 tracking-widest'>May 2023 - Aug 2023</span>
                                    <h3 className='text-2xl font-semibold tracking-widest mb-2'>Freddie Mac</h3>
                                    <p className='text-main'>
                                        Software Engineer Intern
                                    </p>
                                </div>
                            </div>
                            <div className='relative'>
                                <div className='absolute top-5 -left-3.5 bg-blue-400 h-6 w-6 rounded-full border-4 border-white' title="Most Recent Job">
                                    <div className='absolute bg-blue-400 h-6 w-6 rounded-full border-4 border-white -top-1 -left-1 animate-ping'></div>
                                </div>
                                <div className='pl-10'>
                                    <span className='text-xs font-bold opacity-40 tracking-widest'>Aug 2023 - Dec 2023</span>
                                    <h3 className='text-2xl font-semibold tracking-widest mb-2'>Freddie Mac</h3>
                                    <p className='text-main'>
                                        Software Engineer (Part-time)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className='sticky top-16 bg-secondary py-3 z-10 shadow-xl shadow-secondary'>
                        <h2 className='sm:text-3xl text-4xl py-4 font-bold tracking-widest'>Present</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work;