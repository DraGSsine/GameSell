import React from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from '../../public/icons/Icons'
function Banner() {
  return (
    <div className=' xl:w-[58vw] md:h-[30vw] xl:h-auto h-[50vw] w-[100%]  group relative cursor-pointer'>
      <ChevronLeft className=' opacity-0 transition-all duration-700 group-hover:opacity-80 h-10  md:h-20 w-10  md:w-20 z-10 absolute top-[50%] -translate-y-[50%]'/>
      <div>
        <Image className='rounded-2xl' src={'/assets/images/diabloIV.jpeg'} objectFit='cover' objectPosition='top' layout='fill' alt='banner iamge' />
      </div>
      <ChevronRight className=' opacity-0 transition-all duration-1000 group-hover:opacity-60 h-10  md:h-20 w-10  md:w-20 z-10 right-0 absolute top-[50%] -translate-y-[50%]'/>
    </div>
  )
} 

export default Banner