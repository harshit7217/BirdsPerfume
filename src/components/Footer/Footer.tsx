import { FaHome } from 'react-icons/fa'
import { MdOutlineProductionQuantityLimits } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-gray-50 pt-10 h-[40vh]'>
      <hr className='text-gray-400'/>
      <div className='flex'>
        <div className='w-[50%] flex justify-center items-center'>
          <img src="../Logo.png" alt="" className='h-[35vh] w-110' />
        </div>
        <div className='flex flex-col justify-center items-center w-[50%] gap-20 pr-[10%]'>

                <Link to='' className='flex items-center gap-1 text-3xl font-serif text-gray-500 hover:text-pink-300'>
                    <FaHome /> Home
                </Link>
                <Link to='products' className='flex items-center gap-1 text-3xl font-serif text-gray-500 hover:text-pink-300'>
                    <MdOutlineProductionQuantityLimits/> Products
                </Link>

            </div>
      </div>
    </div>
  )
}

export default Footer