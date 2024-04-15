import { kickstartJourney } from "../../data/homeData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

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
                        <p className='text-3xl font-medium leading-10 md:text-lg'>{el.title}</p>
                        <p className="md:text-sm">{el.description}</p>
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
                                <p className='text-3xl font-medium leading-10 md:text-lg'>{el.title}</p>
                                <p className="md:text-sm">{el.description}</p>
                                <img src={el.image} alt="kickstart-journey-image" />
                            </div>
                        </SwiperSlide>
                    ))} 
                    </Swiper>
                </div>

                
                <div className='relative flex h-8 md:hidden'>
                    <img className="" src="/images/left-button.png" alt="" />
                    <img src="/images/right-button.png" alt="" />
                   
                    <div className="flex items-center justify-center w-full gap-8">
                        <button className="items-center p-2 border-2 border-solid prevs-buttons border-sky-500" >
                            &#60;
                        </button>
                        <button className="p-2 border-2 border-solid nexts-buttons border-sky-500" >
                            &#62;
                        </button>
                    </div>
                </div>

            
            

            <button className="p-4 my-8 text-white rounded-full bg-customBlue">Sign up for free</button>
        </div>

        
    )
};

export default KickstartJourney;