
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import person from '../images/person.png';
import dealroom from '../images/dealroom.png';
import analytics from '../images/analytics.png';
import connect from '../images/connect.png';
import dashboard from '../images/dashboard.png';



const menuItems = [
    { name: 'Dashboard', to: '/',   icon: <img src={dashboard} alt="Dashboard" className="w-6 h-6" /> },
    { name: 'Analytics', to: '/analytics', icon: <img src={analytics} alt="Analytics" className="w-6 h-6" /> },
    { name: 'Dealroom', to: '/dealroom', icon: <img src={dealroom} alt="Dealroon" className="w-6 h-6" />  },
    { name: 'Connect', to: '/connect', icon: <img src={connect} alt="Connect" className="w-6 h-6" />  },
    { name: 'Profile', to: '/profile', icon: <img src={person} alt="Person" className="w-6 h-6" />  },
    // { name: 'Settings', to: '/settings', icon: <img src={dashboard} alt="Dashboard" className="w-6 h-6" />  },
];

const Sidebar = () => {
    const location = useLocation()

    return (
        <>
            <div className='flex'>
                <div className="hidden md:flex flex-col  w-20  p-4 flex  items-center">
                   
                    <Link to='/profile'>
                        <button
                            type="button"
                            className=" relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                            id="user-menu-button"
                            aria-expanded="false"
                            aria-haspopup="true"
                        >
                            <span className="absolute -inset-1.5"></span>
                            <span className="sr-only">Open user menu</span>
                            <img
                                className="size-8 rounded-full "
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="Profile"
                            />
                        </button>
                    </Link>
                </div>

                <div className='hidden  h-auto md:left-0 md:w-64 md:flex md:flex-col bg-[#000] text-gray-500  p-4 shadow-xl border border-gray-700 border-t-0 border-b-0'>
                    <nav className="flex flex-col gap-2 font-sans text-base font-normal">
                        {menuItems.map(({ name, to, icon }, index) => {
                            const isActive = location.pathname === to;
                            return (
                                <Link
                                    key={index}
                                    to={to}
                                    className={`flex items-center w-full p-3 rounded-lg transition-all hover:bg-white-50 hover:text-white-900 ${isActive ? 'font-bold text-white' : ''}`}

                                >
                                    <div className="grid mr-4 place-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                            <path d={icon} />
                                        </svg>
                                    </div>
                                    {name}
                                </Link>
                            )
                        }
                        )}
                    </nav>
                </div>

                <div className="fixed bottom-0 left-0 w-full bg-[#000] p-2 flex justify-around items-center md:hidden">
                    {menuItems.map(({ name, to, icon }, index) => {
                        const isActive = location.pathname === to;
                        return (
                            <Link
                                key={index}
                                to={to}
                                className={`flex flex-col items-center p-2 transition-all ${isActive ? 'text-white' : 'text-gray-500'
                                    }`}
                            >
                              
                                {icon}
                                <span className="text-xs">{name}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Sidebar;
