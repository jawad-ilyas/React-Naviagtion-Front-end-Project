import React from 'react'
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt } from "react-icons/fa";


function Menu({ title, data, hoverColor, icon = false }) {

    return (
        <div>
            <p className='text-lightBorder dark:text-colorText/90 font-bold py-2'>{title}</p>
            <div className='flex flex-col text-myBlack dark:text-white'>
                {data?.map((item, index) => {
                    return <div key={index} className='py-1 flex  items-center '>
                        <Link to={item.link} className={`font-light me-2  ${hoverColor} hover:underline `}>{item.text}</Link>
                        {item.icon == true ? < FaExternalLinkAlt size={12} className='text-light ' />
                            : null}
                    </div>

                })}
            </div>
        </div>
    )
}

export default Menu