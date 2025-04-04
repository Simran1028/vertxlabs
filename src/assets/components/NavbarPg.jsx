
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo1 from '../images/logo1.png';
import { EllipsisVertical } from 'lucide-react';

const pageTitles = {
    '/': 'Dashboard',
    '/analytics': 'Analytics',
    '/dealroom': 'Dealroom',
    '/connect': 'Connect',
    '/profile': 'Profile',
    '/settings': 'Settings',
};

const NavbarPg = () => {
    const location = useLocation();
    const pageTitle = pageTitles[location.pathname] || 'Page';
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-black text-white border-b border-gray-700 w-full h-13 flex items-center justify-between ">


            <div className="w-full flex items-center justify-between md:hidden px-4">

                <Link to="/profile">
                    <button
                        type="button"
                        className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                        <img
                            className="size-8 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="Profile"
                        />
                    </button>
                </Link>

               
                <img className="w-10 h-10" src={logo1} alt="Logo" />

            
                <div className="relative">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="focus:outline-none"
                    >
                        <EllipsisVertical className="w-6 h-6" />
                    </button>

                    {menuOpen && (
                        <div className="absolute right-0 mt-2 bg-white text-black rounded-md shadow-lg w-32 z-50">
                            <Link
                                to="/activity"
                                className="block px-4 py-2 hover:bg-gray-200"
                                onClick={() => setMenuOpen(false)}
                            >
                                Activity
                            </Link>
                            <Link
                                to="/logout"
                                className="block px-4 py-2 hover:bg-gray-200"
                                onClick={() => setMenuOpen(false)}
                            >
                                Logout
                            </Link>
                        </div>
                    )}
                </div>
            </div>


            <div className="hidden md:flex w-full h-full items-center">

                <div className=" border-gray-700 flex justify-center items-center h-full w-20">
                    <img className="w-10 h-10" src={logo1} alt="Logo" />
                </div>


                <div className="border-l border-gray-700 flex justify-center items-center text-lg font-semibold h-full w-64">
                    VertxLabs
                </div>


                <div className="border-l border-gray-700 flex items-center h-full flex-1 pl-4">
                    {pageTitle}
                </div>


                <div className="border-l border-gray-700 flex justify-center items-center h-full w-28">
                    <span>Activity</span>
                </div>


                <div className="border-l border-gray-700 flex justify-center items-center h-full w-28">
                    <Link to="/logout">Logout</Link>
                </div>
            </div>
        </nav>
    );

};

export default NavbarPg;

