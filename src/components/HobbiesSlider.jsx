import React from 'react';
import { Autoplay, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { hobbies } from '../data';
import 'swiper/css';
import 'swiper/css/pagination';
import '../swiper.css';

const HobbiesSlider = () => {
    return (
        <>
            <Swiper modules={[Autoplay, Pagination]} pagination={{ clickable: true }} autoplay={{ delay: 7250, disableOnInteraction: false, }} className='mySwiper bg-secondary z-0'>
                {hobbies.map((item, index) => {
                    const { hobImg, hobText, hobTitle, hobDesc } = item;
                    return <SwiperSlide key={index} className='bg-secondary'>
                        <div className='flex flex-col lg:flex-row gap-12 lg:gap-32 bg-secondary'>
                            <div className='w-48 h-48 lg:w-[328px] lg:h-[328px]'>
                                <img className='rounded-2xl' src={hobImg} alt='' />
                            </div>
                            <div className='flex flex-col max-w-3xl bg-secondary'>
                                <h1 className='text-lg mb-8 font-roboto'>{hobText}</h1>
                                <div>
                                    <p className='text-lg text-main_light font-semibold'>{hobTitle}</p>
                                    <p>{hobDesc}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                })}
            </Swiper>
        </>
    )
}

export default HobbiesSlider;