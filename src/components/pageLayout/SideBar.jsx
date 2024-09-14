import React, { forwardRef, useCallback, useState } from "react";
import { dashMenuItems } from "../../data/homeData";
import { Link, useLocation } from "react-router-dom";

const SideBar = forwardRef(({ sidebarOpen }, ref) => {
    const location = useLocation();
    const pathname = location.pathname;
    const [openDropdowns, setOpenDropdowns] = useState({});

    const toggleDropdown = (name) => {
        setOpenDropdowns(prevState => ({
            ...prevState,
            [name]: !prevState[name]
        }));
    };

    const renderSubMenuItems = (subMenuItems) => {
        if (!subMenuItems) return null;

        return (
            <ul className="ml-8">
                {subMenuItems.map(subItem => (
                    <li key={subItem.name} className="text-base font-medium cursor-pointer">
                        <Link
                            to={subItem.url}
                            className={`flex items-center gap-3 py-3 w-auto truncate transition-all duration-150 ${
                                pathname.includes(subItem.url)
                                    ? "bg-slate-200 bg-opacity-80 text-blue-900"
                                    : "text-red-500 hover:text-red-900 hover:bg-slate-100"
                            }`}
                        >
                            <span
                                className={`transition-all duration-150 ${
                                    pathname.includes(subItem.url) ? 'text-blue-900' : 'text-gray-500'
                                }`}
                            >
                                {subItem.name}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        );
    };

    const renderRoutes = useCallback((route) => {
        const { name, url, icon, dropdown, subMenuItems } = route;
        const isActive = (pathname !== '/' && url !== '/' && pathname.includes(url)) || (pathname === "/" && url === "/");
    
        return (
            <li className="text-base font-medium cursor-pointer" key={name}>
                <Link
                    to={subMenuItems ? '#' : url}
                    className={`flex items-center justify-between gap-3 py-3 w-full px-5 truncate transition-all duration-150 ${
                        isActive ? "bg-slate-200 bg-opacity-80 text-blue-900" : "text-gray-500 hover:text-blue-900 hover:bg-slate-100"
                    }`}
                    onClick={() => subMenuItems && toggleDropdown(name)}
                >
                    <div className="flex items-center gap-3">
                        <img src={icon} alt={name} className="icon" />
                        <span
                            className={`transition-all duration-150 ${isActive ? 'text-blue-900' : 'text-gray-500'}`}
                        >
                            {name}
                        </span>
                    </div>
                    {dropdown && (
                        <img src={dropdown} alt={`${name} dropdown`} className="icon" />
                    )}
                </Link>
                {dropdown && openDropdowns[name] && renderSubMenuItems(subMenuItems)}
            </li>
        );
    }, [pathname, openDropdowns]);

    return (
        <div ref={ref} className="fixed z-20 w-56 h-full bg-white shadow-md ">
            <div className="flex flex-col h-full pb-10 overflow-y-auto">
                <ul className="flex flex-col w-full gap-4 mt-5">{dashMenuItems.map(renderRoutes)}</ul>
            </div>
        </div>
    );
});

SideBar.displayName = "SideBar";

export default SideBar;