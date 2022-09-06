import React from 'react'
import Tippy from '@tippyjs/react/headless';

import { skills } from '../data'

const Skills = () => {
    return (
        <section className='bg-tertiary py-12'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-8 md:grid-flow-row'>
                    {skills.map((skill, index) => {
                        return (
                            <div className='flex items-center justify-center' key={index}>

                                <Tippy
                                    render={attrs => (
                                        <div className="box text-cyan-700 font-bold" tabIndex="-1" {...attrs}>
                                            {skill.name}
                                        </div>
                                    )}
                                >
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

export default Skills;