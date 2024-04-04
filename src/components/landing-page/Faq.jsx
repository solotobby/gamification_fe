import { useState } from "react";
import { Link } from "react-router-dom";
import { faq } from "../../data/homeData";

const Faq = () => {
    const [isOpen, setIsOpen] = useState(Array(4).fill(false));

    const toggleDescription = (index) => {
        const updatedOpenState = [...isOpen];
        updatedOpenState[index] = !updatedOpenState[index];
        setIsOpen(updatedOpenState);
    };

    return (
        <div className="container mx-auto mt-8">
            <div className="text-center">
                <p className="mb-8 text-3xl font-medium leading-8 md:text-4xl">Frequently asked questions</p>
                {faq.slice(0, 4).map((el, i) => ( 
                    <div key={i} className="p-4 mb-4 bg-customGray">
                        <div className="flex items-center justify-between">
                            <p className='text-lg md:text-2xl'>{el.title}</p>
                            <button onClick={() => toggleDescription(i)} className="text-lg md:text-2xl">
                                {isOpen[i] ? '-' : '+'}
                            </button>
                        </div>
                        {isOpen[i] && (
                            <p className="text-sm text-left md:text-base">{el.description}</p>
                        )}
                    </div>
                ))}
                
                <p>
                    Can’t find what you’re looking for? <Link to="/contact-us" className="text-blue-500 cursor-pointer">See more questions</Link>
                </p>
            </div>
        </div>
    );
};

export default Faq;