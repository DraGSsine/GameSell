import Link from 'next/link'
import React from 'react'
import { Hearticon, HomeIcon, ProfileIcon, CartIcon, SearchIcon } from '../../public/icons/Icons'
import Image from 'next/image'

function Navbar() {
    return (
        <nav className=' overflow-clip mb-10 top-0 flex justify-between items-center h-16 py-12 md:px-[8.5rem]'>
            <div className='ml-14 h-36 w-40 md:ml-0 relative late-300 hidden  sm:flex sm:items-center'>
                <Link href='/'>
                    <Image
                        height={0}
                        width={130}
                        alt='Store logo'
                        src={'/Store-Logo.png'}

                    />
                </Link>
            </div>
            <div className='mx-auto'>
                <div className=' cursor-pointer w-[90vw] bgred  lg:w-80 pl-5 rounded-full overflow-hidden flex items-center h-10 bg-[#323232]'>
                    <input className=' outline-none bg-inherit h-full grow text-slate-300' type="text" placeholder='Find Your Game' />
                    <span className='bg-primary-color rounded-full p-1 mr-1'>
                        <SearchIcon width={25} stroke='white' />
                    </span>
                </div>
            </div>
            <ul className=' bg-primary-color md:relative md:bg-inherit md:w-auto md:space-x-5 py-3 rounded-t-lg flex w-[100vw] px-7 md:px-0 text-center justify-between z-40 fixed bottom-0 '>
                <li className=' md:hidden flex flex-col items-center cursor-pointer'>
                    <HomeIcon className='w-7 md:w-7' stroke="white" />
                </li>
                <li className=' flex flex-col items-center cursor-pointer'>
                    <CartIcon className='w-7 md:w-7' stroke="white" />
                </li>
                <li className=' flex flex-col items-center cursor-pointer'>
                    <Hearticon className='w-7 md:w-7' stroke="white" />
                </li>
                <li className='  flex flex-col items-center cursor-pointer'>
                    <Link href='/profile' >
                        <ProfileIcon className='w-7 md:w-7' stroke="white" />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar