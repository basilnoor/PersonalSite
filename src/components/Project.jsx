import React from 'react'
import { FiGithub } from 'react-icons/fi';

const Project = ({ item }) => {
    return (
        <div key={item.id} className='flex flex-col items-center text-center border-2 p-2 bg-main_dark bg-opacity-5 shadow-2xl
         border-main_dark border-opacity-30 rounded-2xl hover:scale-105 hover:shadow-main hover:shadow-md'>
            <a href={item.href}>
                <div className='mb-8'>
                    <img className='rounded-2xl' src={item.image} alt='' />
                </div>
                <h3 className='text-xl font-smibold capitalize mb-3'>{item.name}</h3>
                <p className='capitalize text-main text-sm mb-3'>{item.skills}</p>
                <FiGithub />
            </a>
        </div>
    )
}

export default Project;