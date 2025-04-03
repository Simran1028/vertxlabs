import React from 'react'
import Sidebar from './Sidebar'
import NavbarPg from './NavbarPg'

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col h-screen bg-[#1D1D1D]">
            <NavbarPg />
            <div className="flex flex-1">
                <Sidebar />
                <div className="flex-1 p-2">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout
