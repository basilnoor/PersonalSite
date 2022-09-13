import React from 'react'

import { social } from '../data'
import Logo from '../assets/logo.svg'

const Footer = () => {
    return (
        <footer className='bg-primary py-8'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
                    <div className='flex space-x-6 items-center justify-center'>
                        {social.map((item, index) => {
                            const { href, icon } = item;
                            return (
                                <a className='text-main text-xl hover:text-main_light hover:scale-110' href={href} key={index}>
                                    {icon}
                                </a>
                            )
                        })}
                    </div>
                    <div>
                        <img className=' h-12' src={Logo} alt='' />
                    </div>

                    <p>&copy; 2022 Basil Noor. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;