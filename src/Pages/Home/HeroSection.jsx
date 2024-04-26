import React from 'react'
import MobileSvg from '../../assets/svg/MobileSvg'
import HeroSvg from '../../assets/svg/HeroSvg'
import Logo from '../../assets/svg/Logo'

function HeroSection() {
    return (
        <div className='container-flude md:h-screen mx-auto bg-gradient-to-b  from-primary to-secondary  '>
            {/* wrapper */}
            <div className='container mx-auto px-10 py-12 md:pt-32'>
                {/* layout */}
                <div className='grid md:grid-cols-4 gap-x-8'>
                    {/* top one  */}
                    <div className='md:block hidden'>
                        <MobileSvg />
                    </div>
                    <div className='relative col-span-2 w-full md:h-full'>
                        <div className='absolute md:left-36 md:top-8 top-32 opacity-20 flex items-center justify-center'>
                            <Logo />
                        </div>
                        <div className='relative md:border-8 py-16 md:border-white rounded-xl  text-center flex flex-col justify-center gap-y-6 z-[10]'>

                            <h1 className='text-6xl text-colorText font-bold'>React Navigation</h1>
                            <p className='text-xl text-colorText font-semibold'>Routing and navigation for Expo and React Native apps.
                            </p>
                            <div className='grid grid-rows-2 md:grid-rows-1 grid-cols-6 items-center justify-center  gap-4  '>
                                <button className='md:col-start-2 md:col-end-4 col-start-2 col-end-6 border-4 hover:bg-bgColor hover:border-bgColor  hover:text-primary text-colorText font-bold text-xl border-white rounded-xl px-8 py-4'>
                                    Read Docs
                                </button>
                                <button className='md:col-start-4 md:col-end-6 col-start-2 col-end-6 border-4 hover:text-primary  text-primary hover:bg-bgColor hover:border-bgColor  bg-white font-bold text-xl border-white rounded-xl px-8 py-4'>
                                    Try It
                                </button>
                            </div>
                        </div>
                        <div className='bg-colorText hidden md:block w-[95%] mx-auto rounded-full h-4 opacity-70 absolute bottom-10 left-3'></div>
                    </div>
                    <div className='md:block hidden'>
                        <HeroSvg />
                    </div>

                </div>
                <div>
                    {/* bottom one */}

                </div>

            </div>
        </div>
    )
}

export default HeroSection