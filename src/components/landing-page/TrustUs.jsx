import { useState } from "react";
import { testimonial } from "../../data/homeData";

const TrustUs = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % testimonial.length);
    };

    const handlePrevious = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + testimonial.length) % testimonial.length);
    };

    return (
        <div className="py-8 mt-8 bg-blue-500">
            <div className="container">
                <p className="w-full mx-auto mt-20 text-3xl font-medium leading-10 text-center text-white font-bricolage-grotesque md:w-3/4 md:text-5xl">Don’t take our word for it. Over 100k people trust us.</p>
                <p className="my-8 text-center text-white">We don’t just say it, we put it to action and take pride in delivering results to all our users.</p>

                <div className="relative w-full p-8 mx-auto mb-10 bg-white rounded-lg shadow-lg md:w-1/2 md:p-14 h-96">
                    <h1 className="md:text-sm">{testimonial[currentIndex].testimony}</h1>
                    <h2 className="pt-6 text-sm md:text-base">- {testimonial[currentIndex].person}</h2>
                    <img className="absolute w-10 bottom-10 left-10" src={testimonial[currentIndex].platform} alt="platform" />
                </div>

                <div className="flex justify-center gap-2 md:gap-4">
                    <button className={`rounded-full p-1 md:p-1`} onClick={handlePrevious}>
                        <img src="/images/testimonial-left-button.png" alt="left-button" className="w-6 h-6 md:w-8 md:h-8" />
                    </button>
                    <button className={`rounded-full p-1 md:p-1`} onClick={handleNext}>
                        <img src="/images/testimonial-right-button.png" alt="right-button" className="w-6 h-6 md:w-8 md:h-8" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TrustUs;