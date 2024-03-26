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
        <div className="container mt-8">
            <p className="mb-8 text-4xl font-medium leading-10">Full List of Frequently Asked Questions</p>
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