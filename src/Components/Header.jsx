import React from 'react'
import Logo from "../assets/svg/MenuLogo.jsx"
import { Link } from 'react-router-dom'
function Header() {
    return (
        <div id='header' className='container-fluid bg-black sticky top-0 z-[100]'>
            <div className='container mx-auto p-4'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center '>
                        <Link to="/">
                            <div className='  flex items-center '>
                                <Logo width={10} heigth={10} />
                                <span className='hover:text-bgColor text-white font-semibold ms-2'>React Navigation</span>
                            </div>
                        </Link>
                        <Link to="/" className='text-white font-semibold ms-8'>Docs</Link>
                        <Link to="/" className='text-white font-semibold ms-8'>Docs</Link>
                        <Link to="/" className='text-white font-semibold ms-8'>Docs</Link>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Header