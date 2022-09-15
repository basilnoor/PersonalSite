import React from 'react'

import { social } from '../data'
import Logo from '../assets/logo.svg'
import Socials from './Socials'

const Footer = () => {
    return (
        <footer className='bg-primary py-8'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
                    <div className='flex space-x-6 items-center justify-center'>
                        <Socials />
                    </div>
                    <div>
                        <img className='h-12' src={Logo} alt='' />
                    </div>
                    <p className='text-sm'>Handcrafted by me &copy; 2022</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;