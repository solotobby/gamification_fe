import { useState } from 'react';
import { features } from '../../data/homeData';
import '../../styles/features.scss'

const Features = () => {
    const [activeFeature, setActiveFeature] = useState(0);

    return (
        <div className="container mt-8">
            <p className="w-3/4 my-20 text-5xl font-medium leading-10 font-bricolage-grotesque">Amazing platform packed with powerful features just-for-you!!</p>
            <div className='flex items-center gap-8'>
                <div className="flex flex-col w-1/2 gap-4 shrink-0">
                    {features.map((el, i) => (
                        <div
                            key={i}
                            className={`feature-item ${activeFeature === i ? 'active' : ''}`}
                            onMouseEnter={() => setActiveFeature(i)}
                            onMouseLeave={() => setActiveFeature(0)} 
                        >
                            <p className='text-3xl font-medium leading-10'>{el.title}</p>
                            <p>{el.description}</p>
                        </div>
                    ))}
                </div>
                <img src="/images/we.png" alt="we-image" />
            </div>
        </div>
    );
}

export default Features;