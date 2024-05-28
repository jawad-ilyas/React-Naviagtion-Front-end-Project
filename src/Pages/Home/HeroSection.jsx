import React from 'react'
import MobileSvg from '../../assets/svg/MobileSvg'
import HeroSvg from '../../assets/svg/HeroSvg'
import Logo from '../../assets/svg/Logo'
import { Link } from "react-router-dom"
function HeroSection() {
    return (
        <div className='container-flude md:h-full mx-auto bg-gradient-to-b  dark:from-primary dark:to-secondary  from-ligthPrimary to-ligthSecondory'>
            {/* wrapper */}
            <div className='container mx-auto px-10 py-12 md:pt-32'>
                {/* layout */}
                <div className='flex lg:justify-between justify-center w-full lg:flex-row md:flex-col'>
                    {/* top one  */}
                    <div className='lg:flex  hidden lg:w-3/12 md:w-5/12 lg:order-1 md:order-2'>
                        <MobileSvg />
                    </div>
                    <div className='relative  lg:w-6/12 md:w-full  md:h-full lg:order-2 md:order-1'>
                        <div className='absolute top-[45%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 opacity-20'>
                            <Logo />
                        </div>
                        <div className='relative md:border-8 py-16 border-lightBorder dark:md:border-white rounded-xl  text-center flex flex-col justify-center gap-y-6 z-[10]'>

                            <h1 className='text-6xl dark:text-colorText text-lightBorder font-bold'>React Navigation</h1>
                            <p className='text-xl dark:text-colorText text-lightBorder font-semibold'>Routing and navigation for Expo and React Native apps.
                            </p>
                            <div className='grid grid-rows-2 md:grid-rows-1 grid-cols-6 items-center justify-center  gap-4  '>
                                <button className='md:col-start-2 text-lightBorder dark:text-white md:col-end-4 col-start-2 col-end-6 border-4 hover:bg-bgColor hover:border-bgColor  hover:text-primary dakr:text-colorText font-bold text-xl border-lightBorder dark:border-white rounded-xl px-8 py-4'>
                                    Read Docs
                                </button>
                                <button className='md:col-start-4 md:col-end-6 col-start-2 col-end-6 border-4 hover:text-primary text-white dark:text-primary hover:bg-bgColor hover:border-bgColor   bg-lightBorder dark:bg-white font-bold text-xl border-lightBorder dark:border-white rounded-xl px-8 py-4'>
                                    Try It
                                </button>
                            </div>
                        </div>
                        <div className='bg-colorText hidden md:block w-[93%] mx-auto rounded-full h-3 opacity-50 absolute bottom-[-3%] left-5'></div>
                    </div>
                    <div className='lg:flex hidden lg:w-3/12   md:w-5/12  md:justify-end lg:order-3 md:order-3'>
                        <HeroSvg />
                    </div>

                </div>
                {/* bottom one */}
                <div>
                    <div className='max-w-xl text-center lg:mt-0 md:mt-8 mt-4     mx-auto px-6 py-5 rounded-md backdrop-blur-md bg-primary/50  text-white/80'>
                        💡 Coming from an older version? Check out our <Link to="/" className='hover:underline font-bold' >migration guides.</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeroSection