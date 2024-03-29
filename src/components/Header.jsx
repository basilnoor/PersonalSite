import React, { useState, useEffect } from 'react';

// Importing components
import Logo from '../assets/name_logo.svg';
import Nav from '../components/Nav';
import NavMobile from '../components/NavMobile';
import Socials from '../components/Socials';

const Header = () => {
    const [bg, setBg] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 650 ? setBg(true) : setBg(false)
        })
    });

    return (
        <header className={`${bg ? 'bg-tertiary h-20' : 'h-24'} 
                        flex items-center fixed top-0 w-full
                        text-white z-20 transition-all duration-300`} >
            <div className='container mx-auto h-full flex items-center justify-between'>
                {/* logo */}
                <a href='/'>
                    <img className='h-8' src={Logo} alt='basil-home-logo' />
                </a>
                {/* Nav */}
                <div className='hidden lg:block'>
                    <Nav />
                </div>
                {/* Socials */}
                <div className='hidden lg:block'>
                    <Socials />
                </div>
                {/* Nav Mobile */}
                <div className='lg:hidden'>
                    <NavMobile />
                </div>
            </div>
        </header>
    )
}

export default Header;