import React from 'react'
import { discoverMore as disWatchData } from "../data/DiscoverMoreData.ts"
import { Link, Outlet, useLocation } from 'react-router-dom'

type Watch = {
    link: string;
    image: string;
    type: string;
    title: string;
    description: string;
    price: string;
};

function Product() {
  const location = useLocation();
  const isNestedRoute = location.pathname !== '/products';   
  return (
    <div>
      {!isNestedRoute && (
        <div data-sos='fade-up' className="flex justify-center items-start flex-wrap p-5">
          {disWatchData.map((watch: Watch) => (
            <Link
              to={watch.link}
              className="flex flex-col justify-center w-[240px] items-center ml-10 mr-10 border-2 border-gray-300 shadow-xl pb-3"
              key={watch.title}
            >
              <img
                src={watch.image}
                alt={watch.title}
                className="w-full h-48 object-cover"
              />
              <p className="text-blue-300 font-bold">{watch.type}</p>
              <p className="text-center text-sm">{watch.title}</p>
              <p className="text-center text-gray-500 text-sm">{watch.description}</p>
              <p className="p-2">{watch.price}</p>
              <button className="border-2 p-1 border-gray-500 text-sm text-black font-bold">Add to Cart</button>
            </Link>
          ))}
        </div>
      )}

      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Product