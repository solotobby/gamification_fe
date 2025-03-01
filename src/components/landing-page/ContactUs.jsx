import { faq } from '../../data/homeData';
import { useState } from 'react';

const ContactUs = () => {
    const [isOpen, setIsOpen] = useState(Array(faq.length - 4).fill(false));

    const toggleDescription = (index) => {
        const updatedOpenState = [...isOpen];
        updatedOpenState[index] = !updatedOpenState[index];
        setIsOpen(updatedOpenState);
    };

    return (
        <div>
            <div className="container pt-5 mt-8 md:pt-16">
                <h1 className="mt-8 text-4xl font-medium leading-10 text-center">Contact our friendly team</h1>
                <p className='mb-8 text-center'>Get in touch and let’s see how we can help you.</p>
                <div className="relative flex flex-col items-center w-3/4 gap-6 mx-auto md:gap-20 md:flex-row md:items-center md:justify-center">
                   
                    <a className="w-full h-full p-5 transition-transform duration-300 transform border border-blue-500 cursor-pointer md:w-1/2 shrink-0 hover:scale-105 hover:shadow-lg"
                        onClick={() => window.location.href = 'mailto:hello@freebyz.com'}
                    >
                        <img src="/images/mail-icon.png" alt="mail-icon" className="mb-12" />
                        <h2>Contact support</h2>
                        <h3>We would love to attend to your needs and concern. Just send us a mail.</h3>
                        <p>Send us an email</p>
                    </a>

                    <p className="text-center md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                        or
                    </p>

              
                    <div className="w-full h-full p-5 transition-transform duration-300 transform border border-blue-500 cursor-pointer md:w-1/2 shrink-0 hover:scale-105 hover:shadow-lg"
                        onClick={() => window.open('https://tawk.to/chat/6510bbe9b1aaa13b7a78ae75/1hb4ls2fd', '_blank', 'noopener,noreferrer')}
                    >
                        <img src="/images/chat-con.png" alt="chat-icon" className="mb-12" />
                        <h2>Live chat</h2>
                        <h3>Start a chat here and someone from the team would be in touch with you.</h3>
                        <p>Start live chat</p>
                    </div>
                </div>
                <p className="my-10 mb-8 text-4xl font-medium leading-10 text-center">Frequently Asked Questions</p>
                {faq.slice(4).map((el, i) => (
                    <div key={i} className="flex-grow p-5 mb-4 text-white bg-blue-500">
                        <div className="flex items-center justify-between">
                            <p className='text-2xl'>{el.title}</p>
                            <button onClick={() => toggleDescription(i)} className="text-2xl">
                                {isOpen[i] ? '-' : '+'}
                            </button>
                        </div>
                        {isOpen[i] && <p>{el.description}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContactUs;