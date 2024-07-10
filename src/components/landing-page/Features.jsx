import { useState, useEffect } from 'react';
import { features } from '../../data/homeData';
import '../../styles/features.scss';

const Features = () => {
    const [activeFeature, setActiveFeature] = useState(0);
    const [mobileActiveFeature, setMobileActiveFeature] = useState(0);

    const handlePaginationClick = (index) => {
        setActiveFeature(index);
    };

    const handleMobilePaginationClick = (index) => {
        setMobileActiveFeature(index);
    };

    useEffect(() => {
        const handleWindowResize = () => {
            if (window.innerWidth <= 768) {
                setActiveFeature(mobileActiveFeature);
            }
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [mobileActiveFeature]);

    const renderImage = (index) => {
        switch (index) {
            case 1:
                return "/images/phone-image.png";
            case 2:
                return "/images/cash-back.png";
            case 3:
                return "/images/stack-of-cash.png";
            default:
                return "/images/we.png";
        }
    };

    return (
        <div className="container mt-8">
            <p className="w-full my-10 text-2xl font-medium leading-10 font-bricolage-grotesque md:text-5xl md:w-3/4 md:my-20">Amazing platform packed with powerful features just-for-you!!</p>
            <div className='flex flex-col items-center md:flex-row md:gap-8'>
                <div className="flex flex-col w-full gap-4 md:w-1/2 shrink-0">
                    {features.map((el, i) => (
                        <div
                            key={i}
                            className={`feature-item ${activeFeature === i ? 'active' : ''} ${window.innerWidth <= 768 ? 'mobile-only' : ''} ${window.innerWidth <= 768 ? (mobileActiveFeature === i ? 'active' : '') : ''}`}
                            onClick={() => window.innerWidth > 768 && setActiveFeature(i)}
                            onMouseEnter={() => setActiveFeature(i)}
                            style={{ display: window.innerWidth <= 768 ? (mobileActiveFeature === i ? 'block' : 'none') : 'block' }}
                        >
                            <p className='text-3xl font-medium leading-10'>{el.title}</p>
                            <p>{el.description}</p>
                        </div>
                    ))}
                </div>
                <img src={renderImage(activeFeature)} alt="feature-image" className="w-full h-auto md:w-auto" />
                <div className="flex items-center gap-4 md:hidden">
                    <img
                        src="/images/pagination-gray.png"
                        alt="pagination-when-not-active"
                        onMouseEnter={() => handleMobilePaginationClick(mobileActiveFeature - 1 >= 0 ? mobileActiveFeature - 1 : features.length - 1)}
                    />
                    <img
                        src="/images/pagination.png"
                        alt="pagination-image-when-active"
                        onMouseEnter={() => handleMobilePaginationClick(mobileActiveFeature + 1 < features.length ? mobileActiveFeature + 1 : 0)}
                    />
                </div>
            </div>
        </div>
    );
}

export default Features;