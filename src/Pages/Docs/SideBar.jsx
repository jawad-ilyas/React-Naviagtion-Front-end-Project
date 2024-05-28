import React, { useState } from 'react';
import { sideBarData } from './SideBarData';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';

function SideBar() {
    const [openItemIndex, setOpenItemIndex] = useState(0)

    const toggleItem = (index) => {
        setOpenItemIndex((prevIndex) => prevIndex == index ? null : index)
    }
    return (
        <div className='px-4 py-2 text-white '>
            {sideBarData?.map((item, index) => (
                <div key={index}>
                    <div className={`flex flex-row justify-between items-center dark:text-docsWhite text-docsLightBlack dark:hover:bg-docsGrey/30 hover:bg-docsGrey/10  ps-1 py-2 pe-2 cursor-pointer rounded-md mb-1  ${openItemIndex === index ? ' text-docsHeadingColor' : ''} `}

                        onClick={() => toggleItem(index)}
                    >
                        {item.title}
                        <MdOutlineKeyboardArrowRight size={25} className='text-docsGrey' />

                    </div>
                    {openItemIndex === index && <ul className='w-full'>
                        {item.pages?.map((lin, idx) => (
                            <li key={idx} className='dark:hover:bg-docsGrey/30 hover:bg-docsGrey/10 rounded-md  ps-0
                             ms-2   '>
                                <NavLink
                                    className={({ isActive }) => (`${isActive ? "bg-docsSecondory/30 dark:bg-docsSecondory/30 dark:text-docsHover text-docsHeadingColor  " : ""}  text-myBlack dark:text-docsWhite py-1 ps-2 block`)}
                                    to={lin.link}
                                >
                                    {lin.name}
                                </NavLink>
                              

                            </li>
                        ))}
                    </ul>}
                </div>
            ))}
        </div>
    );
}

export default SideBar;
