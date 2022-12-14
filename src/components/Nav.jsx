import React from 'react'
import { Link } from 'react-scroll'

import { navigation } from '../data'


const Nav = () => {
    return (
        <nav>
            <div className='flex space-x-8 capitalize text-[15px]'>
                {navigation.map((item, index) => {
                    return (
                        <li className='text-white hover:text-main cursor-pointer list-none' key={index}>
                            <Link to={item.href} href={item.href} activeClass='active' spy={true} smooth={true} duration={400} offset={-70}
                                className='transition-all duration-300'>
                                {item.name}
                            </Link>
                        </li>
                    )
                })}
            </div>
        </nav>
    )
}

export default Nav;