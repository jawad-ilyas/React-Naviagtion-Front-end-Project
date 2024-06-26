import React from 'react'
import Card from '../../Components/Card'
import SmileSvg from '../../assets/svg/SmileSvg'
import PhoneCoverSvg from '../../assets/svg/PhoneCoverSvg'
import StartBoxSvg from '../../assets/svg/StartBoxSvg'
import AdapterSvg from '../../assets/svg/AdapterSvg'

function CardSection() {
    return (
        <div className='container-flude  bg-myBlack'>

            <div className='container mx-auto p-4 md:px-10 md:py-24'>
                <div className='grid  md:grid-cols-2'>
                    <Card icon={<SmileSvg />} title="Easy to Use" message="Start quickly with built-in navigators that deliver a seamless out-of-the-box experience." />
                    <Card icon={<PhoneCoverSvg />} title="Components built for iOS and Android" message="Components built for iOS and AndroidStart quickly with built-in navigators that deliver a seamless out-of-the-box experience." />
                    <Card icon={<StartBoxSvg />} title="Completely customizable" message="Start quickly with built-in navigators that deliver a seamless out-of-the-box experience." />
                    <Card icon={<AdapterSvg />} title="Extensible platform
" message="Start quickly with built-in navigators that deliver a seamless out-of-the-box experience." />

                </div>
            </div>
        </div>
    )
}

export default CardSection