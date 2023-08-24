"use client"
import Image from 'next/image'
import React from 'react'
import { CheckMarkIcon, ImportantIcon, StarIcon } from '../../../../public/icons/Icons'
import ProductRecomendtion from '../../../components/ProductRecomendtion'

function ProductPage() {
  return (
    <div className='lg:px-36 mx-auto px-20'>
      <div className=' grid md:grid-cols-4 gap-4'>
        <div className=' col-span-1'>
          <div>
            <Image className=' rounded-lg' width={400} height={260} src='/assets/images/sekiro.jpg' alt='Product Image preview' />
          </div>
        </div>
        <div className='  col-span-2 space-y-3'>
          <h1 className=' text-xl lg:text-4xl text-[#EEEE] font-semibold'>Sekiro shadow die tweice </h1>
          <div className='flex'>
            <StarIcon width={20} height={20} stroke='#F5CF18' fill="#F5CF18" />
            <StarIcon width={20} height={20} stroke='#F5CF18' fill="#F5CF18" />
            <StarIcon width={20} height={20} stroke='#F5CF18' fill="#F5CF18" />
            <StarIcon width={20} height={20} stroke='#F5CF18' fill="#F5CF18" />
            <StarIcon width={20} height={20} stroke='#F5CF18' />
          </div>
          <div className=' space-x-2'>
            <span className=' py-1 px-3 rounded-xl bg-primary-color text-[#eeee] text-xs'>Action</span>
            <span className=' py-1 px-3 rounded-xl bg-primary-color text-[#eeee] text-xs'>Action</span>
          </div>
          <div className='pt-10 lg:w-8/12'>
            <div className='flex space-x-2'>
              <ImportantIcon width={20} />
              <h3 className=' font-semibold text-[#FAC917]'>Important Notice:</h3>
            </div>
            <p className=' lg:text-base text-sm text-[#eeee]'>Experience Rockstar Games critically acclaimed open world game, Grand Theft Auto V. Grand Theft Auto V also comes with Grand Theft Auto Online, the dynamic and ever-evolving Grand Theft Auto universe with online play fo</p>
          </div>
        </div>
        <div className='bg-white/10 lg:max-h-[60%] min-h-[60%] rounded-xl col-span-2 md:col-span-1 w-full flex flex-col justify-between mt-10 md:mt-0'>
          <div className='bg-black/20 flex justify-center items-center'>
            <CheckMarkIcon width={20}/>
            <h1 className='  py-2 text-green-600 uppercase text-xs ml-1 font-semibold'> CAN BE accses Anywaher</h1>
          </div>
          <div className=' space-y-2 px-3 lg:px-10'>
            <div className='text-[#eeee]'>
              <span>Seller:</span>
              <span> OcuneStore</span>
            </div>
            <div className=' space-y-3'>
              <span className=' font-bold text-[#eeee] text-3xl'>$5.00</span>
              <button className=' rounded-md w-full py-1 bg-primary-color text-[#eee]'>buy</button>
              <button className=' rounded-md w-full py-1 border-2 border-primary-color text-[#eee]'>Add to Cart</button>
            </div>
          </div>
          <h1 className=' text-center bg-black/20 py-2 text-green-600 text-xs font-semibold'>YOUR TRANSACTION IS SECURE</h1>
        </div>
      </div>
      <div className=' mt-10'>
        <h1 className=' text-xl capitalize font-semibold text-[#eee] mb-4'>Image Inside The Game</h1>
        <div className='flex gap-10 flex-wrap'>
        <Image className=' rounded-lg' width={400} height={260} src='/assets/images/diabloIV.jpeg' alt='Product Image preview' />
        <Image className=' rounded-lg' width={400} height={260} src='/assets/images/diabloIV.jpeg' alt='Product Image preview' />
        <Image className=' rounded-lg' width={400} height={260} src='/assets/images/diabloIV.jpeg' alt='Product Image preview' />
        </div>
      </div>
      <div className=' mt-20'>
        <h1 className=' text-xl capitalize font-semibold text-[#eee] mb-4'>You may also like</h1>
        <ProductRecomendtion/>
      </div>
    </div>
  )

}

export default ProductPage