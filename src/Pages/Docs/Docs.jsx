import React from 'react'
import Header from '../../Components/Header'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

function Docs() {
    return (
        <div className='fluid-container dark:bg-docsPrimary h-screen'>

                <div className='flex flex-row '>
                    {/* sidebar Section */}
                    <div className='w-3/12 sticky top-0 h-[700px] overflow-y-auto'>
                        <SideBar />
                    </div>
                    {/* content Section */}
                    <div className='w-9/12 '>
                        <Outlet />
                    </div>
                </div>
           
        </div>
    )
}

export default Docs