import React, { useState } from 'react'
import { CiMenuBurger } from 'react-icons/ci'
import { FaHome } from 'react-icons/fa'
import { MdOutlineProductionQuantityLimits } from 'react-icons/md'
import { Link } from 'react-router-dom'

type Props = {
    size: number;
}

function Navbar(props: Props) {
    const [menu, setMenu] = useState<boolean>(false);

    const handleNavbar = () => {
        setMenu(!menu);
    }

    return (
        <div>
            {props.size > 720 ? (
                <div className='bg-gray-50 flex justify-between items-center overflow-hidden'>
                    <div className='pl-[10%] h-30 flex items-center'>
                        <img src="./Logo.png" alt="" className='w-70 h-auto' />
                    </div>
                    <div className='flex gap-20 pr-[10%]'>

                        <Link to='' className='flex items-center gap-1 text-3xl font-serif text-gray-500 hover:text-pink-300'>
                            <FaHome /> Home
                        </Link>
                        <Link to='products' className='flex items-center gap-1 text-3xl font-serif text-gray-500 hover:text-pink-300'>
                            <MdOutlineProductionQuantityLimits /> Products
                        </Link>
                    </div>
                </div>
            ) : (
                <div className='flex justify-between items-center pr-10'>
                    <div className='pl-[10%] h-15 flex items-center'>
                        <img src="./Logo.png" alt="" className='w-40 h-auto' />
                    </div>
                    <div>
                        <button className='cursor-pointer' onClick={handleNavbar} ><CiMenuBurger className='w-7 h-auto' /></button>
                    </div>
                </div>
            )}
            {menu === true ? (
                <div data-aos='fade-right' className='flex flex-col justify-center items-start pl-20 '>
                    <Link to='' className='flex items-center gap-10 text-3xl font-serif text-gray-500'>
                        <FaHome /> Home
                    </Link>
                    <Link to='products' className='flex items-center gap-5 text-3xl font-serif text-gray-500'>
                        <MdOutlineProductionQuantityLimits /> Products
                    </Link>
                </div>
            ) : null}
        </div>
    )
}

export default Navbar