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
        <div className="container pt-5 mt-8 md:pt-16">
            <h1 className="mt-8 text-4xl font-medium leading-10 text-center">Contact our friendly team</h1>
            <p className='mb-8 text-center'>Get in touch and let’s see how we can help you.</p>
            <div className='relative grid w-3/4 grid-cols-1 gap-12 mx-auto md:grid-cols-2'>
                <div className='w-full h-full p-5 border border-gray-500 shrink-0'>
                    <img src="/images/mail-icon.png" alt="mail-icon" className='mb-12' />
                    <h2>Contact support</h2>
                    <h3>We would love to attend to your needs and concern. Just send us a mail.</h3>
                    <p>Send us an email</p>
                </div>
                <p className="absolute mb-4 -translate-x-1/2 -translate-y-1/2 md:mb-0 top-1/2 left-1/2">or</p>
                <div className='w-full h-full p-5 border border-gray-500 shrink-0'>
                    <img src="/images/chat-con.png" alt="chat-icon" className='mb-12' />
                    <h2>Live chat</h2>
                    <h3>Start a chat here and someone from the team would be in touch with to you.</h3>
                    <p>Start live chat</p>
                </div>
            </div>
            <p className="my-10 mb-8 text-4xl font-medium leading-10 text-center">Frequently Asked Questions</p>
            {faq.slice(4).map((el, i) => (
                <div key={i} className="flex-grow p-5 mb-4 bg-customGray">
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
    );
};

export default ContactUs;