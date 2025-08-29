import React, { useEffect, useState } from 'react'
import { CiTimer } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { discoverMore as disWatchData } from "../data/DiscoverMoreData.ts"

type Watch = {
    link: string;
    image: string;
    type: string;
    title: string;
    description: string;
    price: string;
};

function Home() {
    useEffect(() => {
        AOS.init({
            duration: 3000, // animation duration
            once: true,     // whether animation should happen only once
        });
    }, []);

    const [width, setWidth] = useState<number>(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        console.log(width)
        window.addEventListener('resize', handleResize);

        // Cleanup on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, [width])

    return (
        <div data-aos='fade-up' className='font-serif bg-gray-50'>
            {width > 1270 ? (
                <div>
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
                            <Link to='products'><button className='border-2 text-center p-1'>ORDER NOW</button></Link>
                        </div>
                    </div>
                </div>
            ) : (
                width > 935 ? (
                    <div>
                        <div className='absolute w-[100%]'>
                            <img src="./banner.png" alt="" className='w-full h-[85vh]' />
                        </div>
                        <div className='relative text-white border-2 h-[85vh] w-[60%] flex flex-col justify-center items-end pr-[3%]'>
                            <div className='text-4xl flex items-center gap-1'>
                                <CiTimer className='h-25 w-22' />
                                <div className='flex flex-col items-end'>
                                    <p>1 DAY</p>
                                    <p>TO GO</p>
                                </div>
                            </div>
                            <div className='flex flex-col items-end pt-7 pb-10'>
                                <p className='text-7xl'>INTRODUCING</p>
                                <p className='text-4xl text-pink-300 font-bold flex'>BIRDS PERFUME</p>
                            </div>
                            <div className='flex items-end text-lg w-[75%]'>
                                <p className='flex text-end'>A Captivating Blend of Luxurious Notes, Crafted to Perfection, Elevate Your Presence and Leave a Lasting impression with Every Spritz.</p>
                            </div>
                            <div className='pt-5'>
                                <Link to='products'><button className='border-2 text-center p-1'>ORDER NOW</button></Link>
                            </div>
                        </div>
                    </div>
                ) : (
                    width > 730 ? (
                        <div>
                        <div className='absolute w-[100%]'>
                            <img src="./banner.png" alt="" className='w-full h-[85vh]' />
                        </div>
                        <div className='relative text-white border-2 h-[85vh] w-[60%] flex flex-col justify-center items-end pr-[3%]'>
                            <div className='text-2xl flex items-center gap-1'>
                                <CiTimer className='h-25 w-22' />
                                <div className='flex flex-col items-end'>
                                    <p>1 DAY</p>
                                    <p>TO GO</p>
                                </div>
                            </div>
                            <div className='flex flex-col items-end pt-7 pb-10'>
                                <p className='text-5xl'>INTRODUCING</p>
                                <p className='text-3xl text-pink-300 font-bold flex'>BIRDS PERFUME</p>
                            </div>
                            <div className='flex items-end text-lg w-[85%] text-sm'>
                                <p className='flex text-end'>A Captivating Blend of Luxurious Notes, Crafted to Perfection, Elevate Your Presence and Leave a Lasting impression with Every Spritz.</p>
                            </div>
                            <div className='pt-5'>
                                <Link to='products'><button className='border-2 text-center p-1'>ORDER NOW</button></Link>
                            </div>
                        </div>
                    </div>
                    ) : (
                        <div>
                        <div className='absolute w-[100%]'>
                            <img src="./banner-mobile.png" alt="" className='w-full h-[86vh]' />
                        </div>
                        <div className='relative text-white h-[85vh] w-[60%] flex flex-col justify-center items-end gap-5 pr-[1%]'>
                            <div className='text-3xl flex items-center gap-1'>
                                <CiTimer className='h-25 w-22' />
                                <div className='flex flex-col items-end'>
                                    <p>1 DAY</p>
                                    <p>TO GO</p>
                                </div>
                            </div>
                            <div className='flex flex-col items-end pt- gap-1 pb-10'>
                                <p className='text-2xl font-bold'>INTRODUCING</p>
                                <p className='text-xl text-pink-300 font-bold flex'>BIRDS PERFUME</p>
                            </div>
                            <div className='flex items-end text-lg w-[85%] text-sm'>
                                <p className='flex text-end'>A Captivating Blend of Luxurious Notes, Crafted to Perfection, Elevate Your Presence and Leave a Lasting impression with Every Spritz.</p>
                            </div>
                            <div className='pt-5'>
                                <Link to='products'><button className='border-2 text-center p-1'>ORDER NOW</button></Link>
                            </div>
                        </div>
                    </div>
                    )
                )
            )}
            <div className='text-3xl flex justify-center mt-10 text-gray-500'>
                Products
            </div>
            <div data-sos='fade-up' className="flex justify-center items-start flex-wrap p-5">
                {disWatchData.map((watch: Watch) => (
                    <Link to={watch.link} className="flex flex-col justify-center w-[240px] h-120 items-center ml-10 mr-10 mb-5 border-2 border-gray-300 shadow-xl pb-3" key={watch.title}>
                        <img
                            src={watch.image}
                            alt="Watch"
                            className="w-[767px] h-100"
                        />
                        <p className="text-blue-300 font-bold">{watch.type}</p>
                        <p className="text-center text-sm">{watch.title}</p>
                        <p className="text-center text-gray-500 text-sm">{watch.description}</p>
                        <p className="p-2">{watch.price}</p>
                        <button className="border-2 p-1 border-gray-500 text-sm text-black-500 font-bold">Add to Product</button>
                    </Link>

                ))}

            </div>
        </div>
    )
}

export default Home