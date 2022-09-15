import React from 'react'

// import social data
import { social } from '../data'

const Socials = () => {
    return (
        <ul className='flex space-x-6'>
            {social.map((item, index) => {
                return <li className='flex justify-center items-center text-main hover:text-main_light hover:scale-110 hover:animate-spin' key={index}>
                    <a className='text-base' href={item.href} title={item.title} >
                        {item.icon}
                    </a>
                </li>
            })}
        </ul>
    )
}

export default Socials;