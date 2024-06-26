import React, { Fragment, useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";




const Layout = (props) => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isSearchVisible, setSearchVisible] = useState(false);

    const handleSearchClick = () => {
        setSearchVisible(!isSearchVisible);
    };

    const handleDropDownClick = () => {
        console.log(dropdownOpen, 'is drop');
        setDropdownOpen(!dropdownOpen);
    };

    function handleResize(){
        if (innerWidth <= 640) {
            setSidebarOpen(false);
            setIsMobile(true);
        } else {
            setSidebarOpen(true);
            setIsMobile(false);
        }
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            addEventListener("resize", handleResize);
        }

        return () => {
            removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section className="">
            <div className="flex items-center justify-between w-full px-3 py-3 bg-white shadow-lg text-slate-700">
                <div className="flex items-center justify-between gap-16">
                    <img src="/images/freebyzlogo-blue.png" alt="freebyz-logo" />
                    <span
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="flex items-center justify-center w-10 h-10 transition-all duration-300 bg-red-500 rounded-full shadow-lg cursor-pointer hover:shadow-2xl"
                    >

                        {/* <XMarkIcon className="inline w-6 h-6" /> */}
                       
                    </span>
                    <div className="flex flex-col ">
                        <Link to="/dashboard" className="flex gap-3 items-cente">
                            {/* <span className="flex items-center justify-center w-10 h-10 text-base font-semibold text-white bg-black rounded-full ">JN</span> */}
                            <span className="flex flex-col text-base font-normal ">
                          
                                <span className="text-black ">Dashboard</span>
                            </span>
                        </Link>

                    </div>

                </div>
                <div className="items-center hidden gap-8 md:flex">
                    <div
                        className={`transition-all bg-slate-200 rounded-2xl h-12 shadow-xl bg-opacity-30 duration-300 ${isSearchVisible ? " w-[17rem] lg:w-[25rem] xl:w-[40rem]" : "w-0"
                            } overflow-hidden`}
                    >
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full h-full px-2 py-1 bg-transparent border-0 outline-none focus:bg-transparent"
                        />
                    </div>
                    <span onClick={handleSearchClick} className="flex items-center justify-center w-10 h-10 text-white transition-all duration-300 bg-orange-400 rounded-full cursor-pointer hover:bg-opacity-60">
                        
                    </span>
                    <span className="relative flex items-center">
                        <span className="flex items-center text-blue-400 cursor-pointer" onClick={() => handleDropDownClick()}>
                            <span className={`w-10 h-10 border-2 border-blue-400 flex items-center justify-center rounded-full mx-auto truncate transition-all duration-150 text-slate-700 hover:text-white hover:bg-slate-600 hover:bg-opacity-50
                            `}>
                                <span className="relative flex items-center justify-center w-full h-full bg-blue-400 rounded-full cursor-pointer ">
                                   
                                </span>

                            </span>
                            
                        </span>
                        <div className={` transition-all duration-300 absolute z-40 rounded-md right-0 top-10 w-28 bg-white shadow-md ${dropdownOpen ? ' max-h-[80vh] py-2 flex flex-col gap-2' : ' max-h-0 hidden'}`}>
                            <span className="flex items-center gap-2 px-2 text-base transition-all duration-300 cursor-pointer text-slate-600 hover:bg-orange-400 hover:bg-opacity-50">
                               
                                Settings
                            </span>
                            <span className="flex items-center gap-2 px-2 text-base transition-all duration-300 cursor-pointer text-slate-600 hover:bg-orange-400 hover:bg-opacity-50">
                               
                                Profile
                            </span>
                            <span className="flex items-center gap-2 px-2 text-base transition-all duration-300 cursor-pointer text-slate-700 hover:bg-orange-400 hover:bg-opacity-50">
                               
                                Logout
                            </span>
                        </div>
                    </span>
                    {/* <span className="flex items-center justify-center w-10 h-10 text-white transition-all duration-300 bg-orange-400 rounded-full cursor-pointer hover:bg-opacity-60">
                        <SVGIcon name="upload" size="tiny" />
                    </span> */}
                </div>
            </div>
            <Transition
                as={Fragment}
                show={sidebarOpen}
                enter="transform transition duration-[400ms]"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform duration-[400ms] transition ease-in-out"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
            >
                <SideBar sidebarOpen={sidebarOpen} />
            </Transition>
            <div
                className={`transition-all fixed w-full z-10 bg-gray-50 dashboard duration-[400ms] ${sidebarOpen && !isMobile ? "pl-56" : ""
                    }`}
            >
                {props.children}
            </div>
        </section>
    );
};

export default Layout;