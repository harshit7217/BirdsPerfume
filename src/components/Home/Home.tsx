import React from 'react'
import { CiTimer } from 'react-icons/ci'

function Home() {
    return (
        <div className='font-serif'>
            <div className='absolute w-[100%]'>
                <img src="./banner.png" alt="" className='w-full h-[85vh]' />
            </div>
            <div className='relative text-white border-2 h-[85vh] w-[60%] flex flex-col justify-center items-end pr-[3%]'>
                <div className='text-5xl flex items-center gap-1'>
                    <CiTimer className='h-25 w-22' />
                    <div className='flex flex-col items-end'>
                        <p>1 DAY</p>
                        <p>TO GO</p>
                    </div>
                </div>
                <div className='flex flex-col items-end pt-7 pb-10'>
                    <p className='text-8xl'>INTRODUCING</p>
                    <p className='text-5xl text-pink-300 font-bold flex'>BIRDS PERFUME</p>
                </div>
                <div className='flex items-end text-lg w-[50%]'>
                    <p className='flex text-end'>A Captivating Blend of Luxurious Notes, Crafted to Perfection, Elevate Your Presence and Leave a Lasting impression with Every Spritz.</p>
                </div>
                <div className='pt-5'>
                    <button className='border-2 text-center p-1'>ORDER NOW</button>
                </div>
            </div>
        </div>
    )
}

export default Home