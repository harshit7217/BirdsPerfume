import React from 'react'
import { FaHome } from 'react-icons/fa'
import { MdOutlineProductionQuantityLimits } from 'react-icons/md'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <div className='bg-yellow-50 flex justify-between items-center overflow-hidden'>
            <div className='pl-[10%] h-30 flex items-center'>
                <img src="./Logo.png" alt="" className='w-70 h-auto'/>
            </div>
            <div className='flex gap-20 pr-[10%]'>

                <Link to='' className='flex items-center gap-1 text-5xl font-serif text-gray-500'>
                    <FaHome /> Home
                </Link>
                <Link to='products' className='flex items-center gap-1 text-5xl font-serif text-gray-500'>
                    <MdOutlineProductionQuantityLimits/> Products
                </Link>

            </div>
            
        </div>
    )
}

export default Navbar