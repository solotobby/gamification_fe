import { useState } from "react";
import { faq } from "../../data/homeData";

const Faq = () => {
    const [isOpen, setIsOpen] = useState(Array(4).fill(false));

    const toggleDescription = (index) => {
        const updatedOpenState = [...isOpen];
        updatedOpenState[index] = !updatedOpenState[index];
        setIsOpen(updatedOpenState);
    };

    
     const navigateToFullFaq = () => {
        history.push("/faq");
    };

    return (
        <div>
            <div className="container w-1/2 mt-8 text-center">
                <p className="mb-8 text-4xl font-medium leading-10">Frequently asked questions</p>
                {faq.slice(0, 4).map((el, i) => ( 
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
                <p onClick={navigateToFullFaq} className="text-blue-500 cursor-pointer">Can’t find what you’re looking for? See more questions</p>
                
            </div>
        </div>
    );
};

export default Faq;