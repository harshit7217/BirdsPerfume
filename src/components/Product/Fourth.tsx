import React, { useEffect, useState } from 'react'
import { discoverMore as disWatchData } from "../data/DiscoverMoreData.ts"
import { FaStar } from 'react-icons/fa';
import 'aos/dist/aos.css'
import { Link, useLocation } from 'react-router-dom';

type Watch = {
  link: string;
  id: number;
  image: string;
  type: string;
  title: string;
  description: string;
  price: string;
  quantity: string;
  review: number;
  rating: number;
  discount: string;
  long: string;
};

function Fourth() {
  const location = useLocation();
  let isNestedRoute = location.pathname !== '/fourth';
  if (isNestedRoute) {
    isNestedRoute = location.pathname !== '/products/fourth';
  }

  const [width, setWidth] = useState<number>(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    console.log(width)
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [width])


  return (
    <div data-aos='fade-up' className='bg-gray-50'>
      {disWatchData.map((watch: Watch) => (
        watch.id === 4 ? (
          <div>
            {width > 1200 ? (
              <div>
                <div key={watch.id} className='flex w-[100%] h-[90vh] justify-around items-center'>
                  <img src={watch.image} alt="Perfume Image" className='w-[40%] border-2 border-gray-400 shadow-xl' />
                  <div className='flex flex-col justify-start items-start gap-10 w-[30%] h-[90vh] pt-20'>
                    <p className='text-3xl text-gray-500 font-bold'>{watch.title}</p>
                    <p className='text-lg text-gray-400 '><b className='text-3xl text-gray-900'>Size:</b> {watch.quantity}</p>
                    <div className='flex gap-5 text-xl text-gray-500 '>
                      <p><b className='text-3xl text-gray-700'>Rating :</b> {watch.review}</p>
                      <p><b className='text-3xl text-gray-700'>Review :</b> {watch.rating}</p>
                    </div>
                    <p className='flex gap-5 text-2xl text-gray-500 ' ><b className='text-3xl text-gray-700'>Price : </b>{watch.price}</p>
                    <p className='flex gap-5 items-center text-xl text-gray-500 '><b className='text-3xl text-gray-700'>Discount :</b> {watch.discount}</p>
                    <div className="border-2 p-1 w-60 border-gray-200 text-xl text-gray-500 font-bold cursor-pointer hover:text-pink-300 hover:border-gray-500 rounded text-center">Add to Cart</div>
                  </div>
                </div>
                <div className='px-20 py-5'>
                  <p className='text-left text-lg text-gray-500 pb-5'><b className='text-3xl text-gray-700'>Description:</b> {watch.long}</p>
                  <hr className='text-gray-500' />
                  <div>
                    <div className='flex justify-center text-5xl text-gray-700 py-10'>Rating</div>
                  </div>
                  <div className='flex justify-evenly text-4xl text-gray-400'>
                    <p className='flex gap-5'>{watch.review} <FaStar className='text-green-300' /></p>
                    <p>Total Customer : {watch.rating}</p>
                  </div>
                </div>
              </div>
            ) : (
              width > 750 ? (
                <div>
                  <div key={watch.id} className='flex flex-col w-[100%] justify-around items-center'>
                    <img src={watch.image} alt="Perfume Image" className='w-[70%] border-2 border-gray-400 shadow-xl' />
                    <div className='flex flex-col justify-start items-start gap-10 h-[90vh] pt-20'>
                      <p className='text-3xl text-gray-500 font-bold'>{watch.title}</p>
                      <p className='text-lg text-gray-400 '><b className='text-3xl text-gray-900'>Size:</b> {watch.quantity}</p>
                      <div className='flex gap-5 text-xl text-gray-500 '>
                        <p><b className='text-3xl text-gray-700'>Rating :</b> {watch.review}</p>
                        <p><b className='text-3xl text-gray-700'>Review :</b> {watch.rating}</p>
                      </div>
                      <p className='flex gap-5 text-2xl text-gray-500 ' ><b className='text-3xl text-gray-700'>Price : </b>{watch.price}</p>
                      <p className='flex gap-5 items-center text-xl text-gray-500 '><b className='text-3xl text-gray-700'>Discount :</b> {watch.discount}</p>
                      <div className="border-2 p-1 w-60 border-gray-700 text-xl text-gray-500 font-bold  cursor-pointer hover:text-pink-300 hover:border-gray-500 rounded text-center">Add to Cart</div>
                    </div>
                  </div>
                  <div className='px-20 py-5'>
                    <p className='text-left text-lg text-gray-500 pb-5'><b className='text-3xl text-gray-700'>Description:</b> {watch.long}</p>
                    <hr className='text-gray-500' />
                    <div>
                      <div className='flex justify-center text-5xl text-gray-700 py-10'>Rating</div>
                    </div>
                    <div className='flex justify-evenly text-4xl text-gray-400'>
                      <p className='flex gap-5'>{watch.review} <FaStar className='text-green-300' /></p>
                      <p>Total Customer : {watch.rating}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div key={watch.id} className='flex flex-col w-[100%] justify-around items-center'>
                    <img src={watch.image} alt="Perfume Image" className='w-[100%]p-2 border-2 border-gray-400 shadow-xl' />
                    <div className='flex flex-col justify-start items-start gap-10 h-[90vh] pt-20 pl-3'>
                      <p className='text-3xl text-gray-500 font-bold'>{watch.title}</p>
                      <p className='text-lg text-gray-400 '><b className='text-3xl text-gray-900'>Size:</b> {watch.quantity}</p>
                      <div className='flex gap-5 text-xl text-gray-500 '>
                        <p><b className='text-3xl text-gray-700'>Rating :</b> {watch.review}</p>
                        <p><b className='text-3xl text-gray-700'>Review :</b> {watch.rating}</p>
                      </div>
                      <p className='flex gap-5 text-2xl text-gray-500 ' ><b className='text-3xl text-gray-700'>Price : </b>{watch.price}</p>
                      <p className='flex gap-5 items-center text-xl text-gray-500 '><b className='text-3xl text-gray-700'>Discount :</b> {watch.discount}</p>
                      <div className="border-2 p-1 w-60 border-gray-700 text-xl text-gray-500 font-bold  cursor-pointer hover:text-pink-300 hover:border-gray-500 rounded text-center">Add to Cart</div>
                    </div>
                  </div>
                  <div className='p-1 mt-[-60px]'>
                    <p className='text-left text-sm text-gray-500 pb-5'><b className='text-xl text-gray-700'>Description:</b> {watch.long}</p>
                    <hr className='text-gray-500' />
                    <div>
                      <div className='flex justify-center text-2xl text-gray-700 py-10'>Rating</div>
                    </div>
                    <div className='flex justify-evenly text-xl text-gray-400'>
                      <p className='flex gap-5 items-center'>{watch.review} <FaStar className='text-green-300' /></p>
                      <p className='flex'>Total Customer : {watch.rating}</p>
                    </div>
                  </div>
                </div>
              )
            )}

            <hr className='text-gray-500' />
            <div className='text-3xl flex justify-center mt-10 text-gray-500'>Similar Products</div>
          </div>
        ) : null
      ))}
      {!isNestedRoute && <div data-sos='fade-up' className="flex justify-center items-start flex-wrap p-5">
        {disWatchData.map((watch: Watch) => (
          watch.id != 4 ? (
            <Link
              to={watch.link}
              className="flex flex-col justify-center w-[240px] items-center ml-10 mr-10 border-2 border-gray-300 shadow-xl p-1 rounded hover:border-gray-500"
              key={watch.title}
            >
              <img
                src={watch.image}
                alt={watch.title}
                className="w-full h-48 object-cover rounded"
              />
              <p className="text-blue-300 font-bold">{watch.type}</p>
              <p className="text-center text-sm">{watch.title}</p>
              <p className="text-center text-gray-500 text-sm">{watch.description}</p>
              <p className="p-2">{watch.price}</p>
              <div className="border-2 p-1 border-white text-sm text-black font-bold cursor-pointer hover:text-pink-300 hover:border-gray-500 rounded">Add to Cart</div>
            </Link>
          ) : null
        ))}
      </div>
      }
    </div>
  )
}

export default Fourth