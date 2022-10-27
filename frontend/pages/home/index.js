import Image from 'next/image'
import React from 'react'

function Home() {
    return (
        <div style={{
            backgroundImage: `url('/bg.png')`,
            backgroundSize: '100vw 100vh',
            backgroundRepeat: 'no-repeat',
        }} className='bg-bg-prm  '>
            
            <div className="min-h-screen">

            <ul className='flex text-lg font-semibold pt-6 justify-end pr-20'>
                <li className='text-[#4E7AEA] mr-12'>Home</li>
                <li className='text-white mr-12'>Pricing</li>
                <li className='text-white mr-12'>Dashboard</li>
                <li className='text-text-prm mr-12'>Log in/Sign up</li>
            </ul>
            <div className="bg-hero mt-60 ml-32">
                <Image src='/Logo.png' width={200} height={100} />
                <p className='text-text-prm text-4xl font-semibold max-w-[30ch] mt-8'>Develop your website’s backend
                    efforlessly with XCode </p>
            </div>
            
        </div>
        <h3 className='text-5xl text-center font-bold text-text-prm'>Pricing</h3>
        <div className=" flex pb-12 justify-evenly mt-20">
        <PriceCard />
        <PriceCard />
        <PriceCard />

            
        </div>
            </div>
    )
}

const PriceCard = () => {
    return (
        <div style={{
            background: 'linear-gradient(152.97deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%)',
            backdropFilter: 'blur(21px)',
            borderRadius: '16px',

        }} className="text-white p-12 flex flex-col items-center ">
            <h3 className='text-5xl font-bold text-white min-w-[10rem] rounded-lg'>
                Plan 1
            </h3>
            <ul className='text-3xl mt-8'>
                <li className='mt-4'>Feature</li>
                <li className='mt-4'>Feature</li>
                <li className='mt-4'>Feature</li>
            </ul>
            <h3 className='text-5xl font-bold mt-6'>Rate</h3>
        </div>
    )
}
export default Home