import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Parallax } from 'react-scroll-parallax';
import { ToastContainer, toast } from 'react-toastify';

import { contact } from '../data';
import 'react-toastify/dist/ReactToastify.min.css';
import Outline from '../assets/outline-text/contact.svg';



const Contact = () => {
    // setup for contact form with emailJS
    const form = useRef();

    const [success, setSuccess] = useState(1);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3fnj3jm', 'template_vbnxcwk', form.current, 'uVbDPN1Gin4SPcN9j')
            .then((result) => {
                console.log(result.text);
                setSuccess(1)
            }, (error) => {
                setSuccess(0)
                console.log(error.text);
            });
    };

    let notifyMsg = ''
    const notify = () => {
        if (success === 1) {
            notifyMsg = '😊 Thank you for your message. I will get back to you shortly!'
        } else {
            notifyMsg = '😱 Something went wrong! Please email me directly or try again later.'
        }
        toast(notifyMsg,
            { theme: 'dark', position: toast.POSITION.TOP_RIGHT, autoClose: 5000, hideProgressBar: false, newestOnTopcloseOnClickrtl: false, pauseOnFocusLoss: true, draggable: true, pauseOnHover: true, success: true })
    };

    return (
        <section className='section bg-tertiary' id='contact'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center text-center'>
                    <Parallax translateY={[120, 50]} speed={5}>
                        <img className='opacity-40' src={Outline} alt='' />
                    </Parallax>
                    <div className='pt-12'>
                        <h2 className='section-title'>Contact me</h2>
                        <p className='subtitle'>Your time is very important to me. If you have any <b className='text-main'>questions</b>, would like to discuss employement, or even just want to say hello; don't hesitate to <b className='text-main'>email me</b>. I'll get back to you as soon as possible.</p>
                    </div>
                </div>
                <div className='flex flex-col lg:gap-x-8 lg:flex-row'>
                    <div className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'>
                        {contact.map((item, index) => {
                            const { icon, title, subtitle, description } = item;
                            return <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                                <div className='text-main rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>{icon}</div>
                                <div>
                                    <h4 className='font-body text-xl mb-1'>{title}</h4>
                                    <p className='mb-1'>{subtitle}</p>
                                    <p className='text-main font-normal'>{description}</p>
                                </div>
                            </div>
                        })}
                    </div>
                    {/* form */}
                    <form className='space-y-8 w-full max-w-[780px]' ref={form} onSubmit={sendEmail} >
                        <div className='flex gap-8'>
                            <input className='input font-roboto' name='user_name' type='text' placeholder='Your name' required />
                            <input className='input font-roboto' name='user_email' type='email' placeholder='Your email' required />
                        </div>
                        <input type='text' className='input font-roboto' name='user_subject' placeholder='Subject' required />
                        <textarea className='textarea font-roboto' name='message' placeholder='Your message' required />
                        <button className='btn btn-lg bg-main hover:bg-main_dark' type='submit' value='Send' onClick={notify}>Send Message</button>
                        <ToastContainer />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;