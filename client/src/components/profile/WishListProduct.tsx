import Image from 'next/image'
import React from 'react'
import { MoreIcon } from '../../../public/icons/Icons'

function WishListProduct() {
  return (
    <div className='flex items-center gap-5 bg-black/20 md:w-[40vw] w-full rounded-xl pr-5'>
      <div className=' w-[20%] h-full'>
        <Image className=' rounded-lg' src='/assets/images/sekiro.jpg' width={100} height={130} alt='Wishlist game photo' />
      </div>
      <div className='flex w-[70%] items-center text-xs lg:text-base'>
        <div>
          <h1 className='font-semibold text-white'>Assassin's Creed Unity Xbox one cd key</h1>
          <div className='flex text-xs text-white gap-3 mt-5'>
            <span className='border py-1 px-2 rounded-xl'>Action</span>
            <span className='border py-1 px-2 rounded-xl'>adevnture</span>
          </div>
        </div>
        <button className=' ml-3 lg:ml-14 text-primary-color border-2 hover:bg-primary-color hover:text-white transition-all duration-500 border-primary-color py-2 px-5 w-[10rem] rounded-2xl'>Buy <span className=' hidden lg:inline-block font-semibold'>$1.39</span></button>
        <div className=' min-w-10 min-h-full' >
        <MoreIcon width={50} height={50} stroke="white"/>
        </div>
      </div>
    </div>
  )
}

export default WishListProduct