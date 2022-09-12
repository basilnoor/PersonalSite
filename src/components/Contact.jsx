import React from 'react'
import { Parallax } from 'react-scroll-parallax'

import { contact } from '../data'
import Outline from '../assets/outline-text/contact.svg'

const Contact = () => {
    return (
        <section className='section bg-tertiary' id='contact'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center text-center'>
                    <Parallax translateY={[120, 55]} speed={5}>
                        <img className='opacity-40' src={Outline} alt='' />
                    </Parallax>
                    <div className='pt-12'>
                        <h2 className='section-title'>Contact me</h2>
                        <p className='subtitle'>Your time is something I value greatly. Please don't hesitate to email me if you have any questions, want to hire me, or even just want to say hello.</p>
                    </div>
                </div>
                <div className='flex flex-col lg:gap-x-8 lg:flex-row'>
                    <div className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'>
                        {contact.map((item, index) => {
                            const { icon, title, subtitle, description } = item;
                            return <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                                <div className='text-cyan-700 rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>{icon}</div>
                                <div>
                                    <h4 className='font-body text-xl mb-1'>{title}</h4>
                                    <p className='mb-1'>{subtitle}</p>
                                    <p className='text-cyan-700 font-normal'>{description}</p>
                                </div>
                            </div>
                        })}
                    </div>
                    {/* form */}
                    <form className='space-y-8 w-full max-w-[780px]'>
                        <div className='flex gap-8'>
                            <input className='input' type='text' placeholder='Your name' />
                            <input className='input' type='text' placeholder='Your email' />
                        </div>
                        <input type='text' className='input' placeholder='Subject' />
                        <textarea className='textarea' placeholder='Your message'></textarea>
                        <button className='btn btn-lg bg-cyan-700 hover:bg-cyan-900'>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;