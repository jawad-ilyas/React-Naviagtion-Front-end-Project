import React, { useEffect } from 'react'
import Logo from "../assets/svg/MenuLogo.jsx"
import { LuExternalLink } from "react-icons/lu";
import { IoMoonOutline } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { themeChange } from '../features/theme/themeSlice.js';
import { IoSunnyOutline } from 'react-icons/io5';


function Header() {
    const dispatch = useDispatch()

    const themeValue = useSelector((state) => state.theme.themeValue)
    // console.log("themeValue", themeValue)
    const handleThmeChange = () => {

        const themeChangeValue = themeValue == "light" ? "dark" : "light"
        dispatch(themeChange(themeChangeValue))
        document.documentElement.classList.toggle('dark', themeChangeValue === 'dark');

    }



    return (
        <div id='header' className='container-fluid bg-white  dark:bg-black text-black sticky top-0 z-[100] p-4'>
            {/* <div className='container mx-auto p-4'> */}
            <div className='flex justify-between items-center'>
                <div className='flex items-center '>
                    <Link to="/">
                        <div className='  flex items-center '>
                            <Logo width={10} heigth={10} />
                            <span className='hover:text-bgColor dark:text-white font-semibold ms-2'>React Navigation</span>
                        </div>
                    </Link>
                    <Link to="/" className='dark:text-white font-semibold ms-8'>Docs</Link>
                    <Link to="/" className='dark:text-white font-semibold ms-8'>Blog</Link>
                    <Link to="/" className='dark:text-white font-semibold ms-8'>Help</Link>
                </div>
                <div className='flex flex-row items-center space-x-3 dark:text-white'>
                    <div className='flex  items-center dark:text-white  cursor-pointer text-xl hover:text-bgColor'><p className='me-1'>Github</p><span><LuExternalLink /></span></div>
                    <div className='size-7 flex items-center justify-center rounded-full hover:bg-secondary/70  hover:delay-100 hover:duration-100 cursor-pointer'>
                        {themeValue === 'light' ? <IoMoonOutline onClick={handleThmeChange} size={24} /> : <IoSunnyOutline onClick={handleThmeChange} size={24} />}
                    </div>

                </div>
            </div>
            {/* </div> */}
        </div>
    )
}

export default Header