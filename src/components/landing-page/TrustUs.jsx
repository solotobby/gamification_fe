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
                <p className="w-3/4 mx-auto mt-20 text-5xl font-medium leading-10 text-center text-white font-bricolage-grotesque">Don’t take our word for it. Over 100k people trust us.</p>
                <p className="my-8 text-center text-white mt-">We don’t just say it, we put it to action and take pride in delivering results to all our users.</p>

                <div className="w-1/2 mx-auto mb-10 bg-white p-14">
                    <h1>{testimonial[currentIndex].testimony}</h1>
                    <h2 className="pt-6">- {testimonial[currentIndex].person}</h2>
                    <img className="mt-3 w-11" src={testimonial[currentIndex].platform} alt="platform" />
                </div>

                <div className="flex justify-center gap-4">
                    <button onClick={handlePrevious}>
                        <img src="/images/left-button.png" alt="left-button" />
                    </button>
                    <button onClick={handleNext}>
                        <img src="/images/right-button.png" alt="rightbutton" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TrustUs;