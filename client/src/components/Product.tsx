import Image from 'next/image';
import React from 'react';
import { NextPage } from 'next';
import { ProductProps } from '@/types/types';



const Product: NextPage<ProductProps> = ({ CardSize,ImageSize,ContentSize}) => {
  return (
    <div className={` text-[0.8rem] cursor-pointer xl:justify-start flex justify-between space-y-2 rounded-2xl  ${CardSize} bg-white/10 backdrop-filter backdrop-blur-lg`}>
      <div className={`relative ${ImageSize} `}>
        <Image
          className='rounded-2xl'
          alt='game image'
          objectFit='cover'
          layout='fill'
          src='/assets/images/sekiro.jpg'
        />
      </div>
      <div className={`flex  flex-col xl:pl-4  justify-between ${ContentSize}} `}>
        <div>
          <h1 className='text-white text-lg'>Sekiro Shadow die twice</h1>
          <ul className='space-x-2 text-xs flex uppercase text-content-color font-medium my-2'>
            <li>ps4</li>
            <li>pc</li>
            <li>xbox</li>
          </ul>
        </div>
        <div className='flex justify-between items-center'>
          <span className='font-bold text-xl text-primary-color'>$48</span>
          <button className=' hover:bg-primary-color/20 cursor-pointer text-[16px] bg-primary-color w-3/6 rounded-2xl capitalize font-semibold py-1'>
            buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
