import { kickstartJourney } from "../../data/homeData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const KickstartJourney = () => {
    return (
        <div className="container mt-8">
            
            <p className="w-full mt-20 text-2xl font-medium leading-10 font-bricolage-grotesque md:text-5xl md:w-3/4">
                Kick-start your journey to financial emancipation
            </p>
            <p className="mb-8">Here’s how Freebyz works.</p>

            
            <div className="hidden gap-4 md:flex">
                {kickstartJourney.map((el, i) => (
                    <div key={i} className="flex-grow p-5 bg-customGray">
                        <p className='text-3xl font-medium leading-10 md:text-base'>{el.title}</p>
                        <p className="md:text-base">{el.description}</p>
                        <img src={el.image} alt="kickstart-journey-image" />
                    </div>
                ))}
            </div>

            

            <div className='relative flex pt-6 pb-6 mt-2 overflow-x-hidden transition-all duration-300 md:hidden'
                >
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
                    >

                    {kickstartJourney.map((el, i) => (
                        <SwiperSlide key={i} >
                            <div className="w-full p-5 bg-customGray h-120">
                                <p className='text-3xl font-medium leading-10 md:text-base'>{el.title}</p>
                                <p className="md:text-base">{el.description}</p>
                                <img src={el.image} alt="kickstart-journey-image" />
                            </div>
                        </SwiperSlide>
                    ))} 
                    </Swiper>
                </div>

                
                
            
            
                    <Link><button to="/registration" className="px-4 py-3 my-8 text-white rounded-full bg-customBlue">Sign up for free</button></Link>
            
        </div>

        
    )
};

export default KickstartJourney;