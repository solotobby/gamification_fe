import { useState, useEffect } from 'react';
import { features } from '../../data/homeData';
import '../../styles/features.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const Features = () => {
    const [activeFeature, setActiveFeature] = useState(0);

    const handlePaginationClick = (index) => {
        setActiveFeature(index);
    };

    useEffect(() => {
        const handleWindowResize = () => {
            if (window.innerWidth <= 768) {
                setActiveFeature(activeFeature);
            }
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [activeFeature]);

    const renderImage = (index) => {
        switch (index) {
            case 1:
                return "/images/cash-back.png";
            case 2:
                return "/images/we.png";
            case 3:
                return "/images/safe-lock.png";
            default:
                return "/images/stack-of-cash.png";
        }
    };

    return (
        <div className="container mt-8">
            <p className="w-full my-10 text-2xl font-medium leading-10 font-bricolage-grotesque md:text-5xl md:w-3/4 md:my-20 desktop-only">
                Complete Tasks, Earn Bonuses and Hire Workers
            </p>
            <div className="flex flex-col items-center md:flex-row md:gap-8">
                <div className="flex flex-col w-full gap-4 md:w-1/2 shrink-0 desktop-only">
                    {features.map((el, i) => (
                        <div
                            key={i}
                            className={`feature-item ${activeFeature === i ? 'active' : ''}`}
                            onMouseEnter={() => window.innerWidth > 768 && setActiveFeature(i)}
                        >
                            <p className="text-3xl font-medium leading-10">{el.title}</p>
                            <p>{el.description}</p>
                        </div>
                    ))}
                </div>
                <div className="desktop-only">
                    <img src={renderImage(activeFeature)} alt="feature-image" className="w-full h-auto md:w-auto" />
                </div>
            </div>

            <div className="mobile-only">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    speed={800}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={{
                        nextEl: '.nexts-buttons',
                        prevEl: '.prevs-buttons'
                    }}
                    modules={[Pagination, Navigation]}
                    className="process-swiper"
                    onSlideChange={(swiper) => setActiveFeature(swiper.activeIndex)}
                >
                    {features.map((el, i) => (
                        <SwiperSlide key={i}>
                            <div>
                                <img 
                                    src={renderImage(i)} 
                                    alt="feature-image" 
                                    className="w-full h-auto" 
                                />
                                <div className="mt-4 text-center">
                                    <p className="text-3xl font-medium leading-10">{el.title}</p>
                                    <p>{el.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                
            </div>
        </div>
    );
};

export default Features;