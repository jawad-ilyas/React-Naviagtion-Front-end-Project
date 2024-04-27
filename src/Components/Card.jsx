import React from 'react'

function Card({ icon, title, message }) {
    return (
        <div className='text-colorText px-4 py-8 '>
            <div className='size-20  mt-auto'>
                {icon}
            </div>
            <h3 className='my-4 font-bold text-3xl'>{title}</h3>
            <p className='text-xl text-colorText/75'>{message}</p>
        </div>
    )
}

export default Card