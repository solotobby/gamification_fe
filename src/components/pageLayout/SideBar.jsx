import React, { forwardRef, useCallback } from "react";
import { dashMenuItems } from "../../data/homeData";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const SideBar = forwardRef(({ sidebarOpen }, ref) => {
    let location = useLocation();
    const pathname = location.pathname;

    const renderRoutes = useCallback((route) => {
        const { name, url, icon, dropdown } = route;
        const isActive = (pathname !== '/' && url !== '/' && pathname.includes(url)) || (pathname === "/" && url === "/");
        return (
            <li
                className="text-lg font-medium cursor-pointer"
                key={name}
            >
                <Link
                    to={url}
                    className={`flex items-center gap-3 py-3 w-auto pl-5 truncate transition-all duration-150 ${isActive
                        ? " bg-slate-200 bg-opacity-80 text-orange-600"
                        : "text-orange-400 hover:text-blue-900 hover:bg-slate-100"
                        }`}
                >
                    <span className={`text-orange-400 cursor-pointer ${isActive ? 'text-blue-900' : ''}`}>
                        <img src={icon} alt={name} className="icon" />
                    </span>
                    
                    <span
                        className={`transition-all duration-150 ${isActive ? ' text-slate-800' : 'text-slate-700'} ${isActive ? 'text-blue-900' : ''}`}
                    >
                        {name}
                    </span>
                    {dropdown && ( 
                        <span className={`text-orange-400 cursor-pointer ${isActive ? 'text-blue-900' : ''}`}>
                            <img src={dropdown} alt={name} className="icon" />
                        </span>
                    )}
                </Link>
            </li>
        );
    }, [pathname]);

    return (
        <div ref={ref} className="fixed z-20 w-56 h-full bg-white shadow-md ">
            <div className="flex flex-col h-[70%] pt-2">
                <ul className="flex flex-col w-full gap-4 mt-5">{dashMenuItems.map(renderRoutes)}</ul>
            </div>
           
        </div>
    );
});

SideBar.displayName = "SideBar";

export default SideBar;