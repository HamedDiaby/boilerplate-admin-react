import { FC, useCallback } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import XMarkIcon  from '@heroicons/react/24/outline/XMarkIcon';
import { sidebarRoutes } from "@navigations";
import { Subtitle } from "@components";

export const LeftSidebar:FC = ()=> {

    const location = useLocation();

    const close = useCallback(() => {
        //@ts-ignore
        document.getElementById('left-sidebar-drawer').click()
    }, []);

    return (
        <div className="drawer-side  z-30  ">
            <label htmlFor="left-sidebar-drawer" className="drawer-overlay"></label>

            <ul className="menu  pt-2 w-80 bg-base-100 min-h-full   text-base-content">

                <button className="btn btn-ghost bg-base-300  btn-circle z-50 top-0 right-0 mt-4 mr-2 absolute lg:hidden" onClick={() => close()}>
                    <XMarkIcon className="h-5 inline-block w-5"/>
                </button>

                <li className="mb-2 font-semibold text-xl">
                    <Link to={'/app/welcome'}>
                        <img 
                            className="mask mask-squircle w-10" 
                            src="/logo192.png" alt="React Admin Logo"
                        />React Admin
                    </Link> 
                </li>

                {
                    sidebarRoutes.map((route, index) => {

                        const displayDivider = index === 2 || index === 5;
                        const displayChatbotSettingSectionTitle = index === 3;

                        return(
                            <>
                                {
                                    displayChatbotSettingSectionTitle && (
                                        <Subtitle className="text-center text-gray-400 mb-2">RÉGLAGES CHATBOT</Subtitle>
                                    )
                                }
                                <li className="" key={index}>
                                    {/* {
                                        route.submenu ? 
                                            <SidebarSubmenu {...route}/> 
                                        : (
                                            <NavLink
                                                end
                                                to={route.path}
                                                className={({isActive}) => `${isActive ? 'font-semibold  bg-base-200 ' : 'font-normal'}`} >
                                                {route.icon} {route.name}
                                                    {
                                                        location.pathname === route.path ? (<span className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary "
                                                        aria-hidden="true"></span>) : null
                                                    }
                                            </NavLink>
                                        )
                                    } */}
                                    <NavLink
                                        end
                                        to={route.path}
                                        className={({isActive}) => `${isActive ? 'font-semibold  bg-base-200 ' : 'font-normal'}`} >
                                        {route.icon} {route.name}
                                            {
                                                location.pathname === route.path ? (<span className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary "
                                                aria-hidden="true"></span>) : null
                                            }
                                    </NavLink>
                                </li>
                                {
                                    displayDivider && <div className="divider" />
                                }
                            </>
                        )
                    })
                }

            </ul>
        </div>
    )
}
