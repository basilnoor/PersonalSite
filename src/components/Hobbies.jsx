import React from 'react'

import HobbiesSlider from './HobbiesSlider';

const Hobbies = () => {
    return (
        <section id='hobbies' className='section bg-secondary'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center text-center'>
                    <h2 className='section-title'>Hobbies</h2>
                    <p className='subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eius inventore quas, officia quasi cumque aut, doloribus animi earum similique omnis repudiandae maxime voluptas alias, quam architecto suscipit? Repudiandae, ducimus?</p>
                </div>
                <HobbiesSlider />
            </div>
        </section>
    )
}

export default Hobbies;