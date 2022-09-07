import React from 'react'

// import social data
import { social } from '../data'

const Socials = () => {
    return (
        <ul className='flex space-x-6'>
            {social.map((item, index) => {
                return <li className='flex justify-center items-center text-cyan-700 hover:text-cyan-500' key={index}>
                    <a className='text-base' href={item.href}>
                        {item.icon}
                    </a>
                </li>
            })}
        </ul>
    )
}

export default Socials;