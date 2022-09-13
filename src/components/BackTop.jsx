import React, { useEffect, useState } from 'react';
import { animateScroll as scroll, Link } from 'react-scroll';

import { ChevronUpIcon } from '@heroicons/react/outline';


const BackTop = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 600 ? setShow(true) : setShow(false);
        })
    });

    const scrollTop = () => {
        scroll.scrollToTop();
    }

    return (
        show && (
            <button onClick={() => scrollTop()}
                className='bg-main w-10 h-10 hover:bg-main_dark text-white rounded-full 
                fixed right-24 bottom-24 cursor-pointer flex justify-center items-center transition-all'>
                <ChevronUpIcon className='w-6 h-6' />
            </button>
        )
    )
}

export default BackTop;