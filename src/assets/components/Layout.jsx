import React from 'react'
import Navbar from './navbar'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col h-screen">
            <Navbar />
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
