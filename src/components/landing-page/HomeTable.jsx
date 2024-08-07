import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const HomeTable = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.allorigins.win/raw?url=https://freebyz.com/landing/api');
                const responseData = await response.json();
                setTransactions(responseData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [transactions]);

    return (
        <div className="container mt-8">

            <div className="flex flex-col items-center justify-between md:flex-row">
                <div className="text-left">
                    <p className="w-full mt-20 text-4xl font-medium leading-10 text-left font-bricolage-grotesque md:text-5xl ">See some payouts</p>
                    <p className="w-full my-8 text-xl text-left md:w-4/5 ">This could be you today. All you need to do is sign up for free, hire workers, or get hired and earn!</p>
                </div>
                <div className="justify-center hidden gap-6 md:flex md:justify-end">
                    <img className="prevs-buttons" src="/images/left-gray-button.png" alt="left-button" />
                    <img className="nexts-buttons" src="/images/right-gray-button.png" alt="right-button" />
                </div>
            </div>
           
            <div className='relative flex pt-6 pb-6 mt-2 overflow-x-hidden transition-all duration-300'>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    speed={800}
                    navigation={{ nextEl: '.nexts-buttons', prevEl: '.prevs-buttons' }}
                    modules={[Navigation]}
                    className="process-swiper"
                >
                    {transactions.map((transaction, index) => {
                        const descriptionParts = transaction.description.split(' ');
                        const withdrawal = descriptionParts.length > 1 ? `${descriptionParts[0]} ${descriptionParts[1]}` : '';

                        return (
                            <SwiperSlide key={index}>
                                <div className={`p-6 mb-10 rounded-lg shadow-md h-atm-card flex flex-col ${index % 2 === 0 ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}>
                                    <div className="flex-grow ">
                                        <div className="flex justify-between mb-4">
                                            <div className="flex flex-col">
                                                <p className="text-xl font-bold md:text-4xl">#{transaction.amount}</p>
                                                <p className="mt-2 text-sm">{withdrawal}</p>
                                            </div>
                                            <p className="text-sm">{new Date(transaction.created_at).toLocaleString()}</p>
                                        </div>
                                    </div>
                                    <div className="mt-auto">
                                        <p className="text-sm">{transaction.user.name}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            
                <div className="absolute left-0 right-0 z-10 flex justify-center gap-4 bottom-8 md:hidden">
                    <img src="/images/left-gray-button.png" alt="left-button" className="w-10 h-10 prevs-buttons" />
                    <img src="/images/right-gray-button.png" alt="right-button" className="w-10 h-10 nexts-buttons" />
                </div>
            </div>
        </div>
    );
};

export default HomeTable;

