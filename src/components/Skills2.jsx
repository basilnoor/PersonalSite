import React from 'react'
import Tippy from '@tippyjs/react/headless';

import { skills2 } from '../data'

const Skills2 = () => {
    return (
        <section className='bg-tertiary py-12'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-7 md:grid-flow-row'>
                    {skills2.map((skill, index) => {
                        return (
                            <div className='flex items-center justify-center' key={index}>
                                <Tippy hideOnClick={false}
                                    render={attrs => (
                                        <div className="box text-main_light font-bold" tabIndex="-1" {...attrs}>
                                            {skill.name}
                                        </div>
                                    )} >
                                    <img className='w-20 hover:scale-110 hover:animate-pulse' src={skill.image} alt='' />
                                </Tippy>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Skills2;