import React, { Fragment, useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";




const Layout = (props) => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isSearchVisible, setSearchVisible] = useState(false);



    function handleResize() {
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
        <section>
            <div className="flex items-center justify-between w-full px-3 py-3 bg-white shadow-lg text-slate-700">
                <div className="flex items-center gap-16">
                    <img src="/images/freebyzlogo-blue.png" alt="freebyz-logo" />
                    <span
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        
                        className="flex items-center justify-center w-12 h-12 transition-all duration-300 cursor-pointer"
                    >
                      ...
                      </span>
                    <div className="flex flex-col">
                        <Link to="/dashboard" className="flex items-center gap-3">
                            <span className="flex flex-col text-base font-normal">
                                <span className="text-2xl font-semibold text-black">Dashboard</span>
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="flex items-center gap-4 ml-auto">
                    <div className="flex items-center p-4 text-blue-600 border-2 border-blue-500 rounded-full">
                        <img src="/images/switch.png" alt="switch-icon" className="mr-2" />
                        <button className="focus:outline-none">
                            switch to dollar
                        </button>
                    </div>
                    <img src="/images/Bell.png" alt="communication-bell-icon" />
                    <img src="/images/dp.png" alt="dp" />
                    <img src="/images/select-arrow.png" alt="select-arrow-icon" />
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
                className={`transition-all fixed w-full z-10 bg-gray-100 dashboard duration-[400ms] ${sidebarOpen && !isMobile ? "pl-56" : ""
                    }`}
            >
                {props.children}
            </div>
        </section>
    );
};

export default Layout;