import { discoverMore as disWatchData } from "../data/DiscoverMoreData.ts"
import { Link, Outlet, useLocation } from 'react-router-dom'
import 'aos/dist/aos.css'

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
    <div data-aos='fade-down' className='bg-gray-50'>
      {!isNestedRoute && (
        <div data-sos='fade-up' className="flex justify-center items-start flex-wrap p-5">
          {disWatchData.map((watch: Watch) => (
            <Link to={watch.link} className="flex flex-col justify-center w-[240px] h-120 items-center ml-10 mr-10 mb-5 border-2 border-gray-300 shadow-xl p-1 hover:border-gray-500 rounded" key={watch.title}>
              <img
                src={watch.image}
                alt="Watch"
                className="w-[767px] h-100 rounded"
              />
              <p className="text-pink-300 font-bold">{watch.type}</p>
              <p className="text-center text-sm">{watch.title}</p>
              <p className="text-center text-gray-500 text-sm">{watch.description}</p>
              <p className="p-2">{watch.price}</p>
              <div className="border-2 p-1 border-white text-sm text-black-500 font-bold cursor-pointer hover:text-pink-300 hover:border-gray-500 rounded">Add to Card</div>
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