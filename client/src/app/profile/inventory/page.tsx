import Image from 'next/image'
import React from 'react'

function Inventory() {
  return (
    <div className="w-full lg:text-center text-sm font-light flex flex-col gap-8 lg:gap-0">
      <div className="w-full lg:bg-inherit bg-white font-medium lg:flex">
        <div className='flex lg:flex-col border-b-2 lg:border-0 items-center lg:w-[13%]'>
          <div className=" hidden lg:flex bg-gray-50 lg:h-14 w-[30%] lg:w-full text-content-color font-light lg:font-normal pl-2 h-full lg:px-6 py-1 lg:py-2"></div>
          <div className=" px-2 lg:justify-center bg-white lg:h-full w-[70%] lg:w-full lg:px-6 lg:py-2 flex items-center pr-2">
            <div className=' md:w-[10vw] w-[16vw] h-[20vw] lg:w-[5vw] relative md:h-[10vw] lg:h-[7vw]'>
              <Image alt='game photo' layout='fill' src='/assets/images/sekiro.jpg' className=' rounded-sm' />
            </div>
          </div>
        </div>
        <div className='flex lg:flex-col border-b-2 lg:border-0 items-center lg:w-[13%]'>
          <div className=" bg-gray-50 lg:h-14 w-[30%] lg:w-full text-content-color font-light lg:font-normal pl-2 h-full lg:px-6 py-1 lg:py-2">Date</div>
          <div className="lg:justify-center bg-white lg:h-full w-[70%] lg:w-full lg:col-span-1 flex items-center lg:px-6 lg:py-2 pr-2 font-medium">12/11/2022, 4:29 PM</div>
        </div>
        <div className='flex lg:flex-col border-b-2 lg:border-0 items-center lg:w-[13%]'>
          <div className=" bg-gray-50 lg:h-14 w-[30%] lg:w-full text-content-color font-light lg:font-normal pl-2 h-full lg:px-6 py-1 lg:py-2">Order ID</div>
          <div className="lg:justify-center bg-white lg:h-full w-[70%] lg:w-full lg:px-6 lg:py-2 flex items-center pr-2 font-medium">o-ye398qe</div>
        </div>
        <div className='flex lg:flex-col border-b-2 lg:border-0 items-center lg:w-[28%]'>
          <div className=" bg-gray-50 lg:h-14 w-[30%] lg:w-full text-content-color font-light lg:font-normal pl-2 h-full lg:px-6 py-1 lg:py-2">Order Title</div>
          <div className=" lg:justify-center bg-white lg:h-full w-[70%] lg:w-full lg:px-6 lg:py-2 flex items-center pr-2 font-medium">Xbox Game Pass Ultimate - 1 Month TRIAL Subscription (Xbox/Windows) Non-stackable Key UNITED STATES</div>
        </div>
        <div className='flex lg:flex-col border-b-2 lg:border-0 items-center lg:w-[13%]'>
          <div className=" bg-gray-50 lg:h-14 w-[30%] lg:w-full text-content-color font-light lg:font-normal pl-2 h-full lg:px-6 py-1 lg:py-2">Seller</div>
          <div className="lg:justify-center bg-white lg:h-full w-[70%] lg:w-full lg:px-6 lg:py-2 flex items-center pr-2 font-medium">OuchenStore</div>
        </div>
        <div className='flex lg:flex-col border-b-2 lg:border-0 items-center lg:w-[15%] lg:min-w-fit'>
          <div className=" bg-gray-50 lg:h-14 w-[30%] lg:w-full text-content-color font-light lg:font-normal pl-2 h-full lg:px-6 py-1 lg:py-2">Payment Method</div>
          <div className="lg:justify-center bg-white lg:h-full w-[70%] lg:w-full lg:px-6 lg:py-2 flex items-center pr-2 font-medium">PayPal</div>
        </div>
        <div className='flex lg:flex-col border-b-2 lg:border-0 items-center lg:min-w-fit lg:w-[13%]'>
          <div className=" bg-gray-50 lg:h-14 w-[30%] lg:w-full text-content-color font-light lg:font-normal pl-2 h-full lg:px-6 py-1 lg:py-2">Price</div>
          <div className="lg:justify-center bg-white lg:h-full w-[70%] lg:w-full lg:px-6 lg:py-2 flex items-center pr-2 font-medium">$5</div>
        </div>
        <div className='flex lg:flex-col border-b-2 lg:border-0 items-center lg:w-[13%]'>
          <div className=" bg-gray-50 lg:h-14 w-[30%] lg:w-full text-content-color font-light lg:font-normal pl-2 h-full lg:px-6 py-1 lg:py-2">Key</div>
          <div className="lg:justify-center bg-white lg:h-full w-[70%] lg:w-full lg:px-6 lg:py-2 flex items-center pr-2 font-medium cursor-pointer text-primary-color underline">View Keys</div>
        </div>
      </div>
      <div className="w-full lg:bg-inherit bg-white font-medium lg:flex">
        <div className='flex lg:flex-col border-b-2 lg:border-0 items-center lg:w-[13%]'>
          <div className=" lg:h-0 lg:invisible hidden lg:flex bg-gray-50 w-[30%] lg:w-full text-content-color font-light lg:font-normal pl-2 h-full lg:px-6 py-1 lg:py-2"></div>
          <div className=" px-2 lg:justify-center bg-white lg:h-full w-[70%] lg:w-full lg:px-6 lg:py-2 flex items-center pr-2">
            <div className=' md:w-[10vw] w-[16vw] h-[20vw] lg:w-[5vw] relative md:h-[10vw] lg:h-[7vw]'>
              <Image alt='game photo' layout='fill' src='/assets/images/sekiro.jpg' className=' rounded-sm' />
            </div>
          </div>
        </div>
        <div className='flex lg:flex-col border-b-2 lg:border-0 items-center lg:w-[13%]'>
          <div className=" lg:h-0 lg:invisible bg-gray-50  w-[30%] lg:w-full text-content-color font-light lg:font-normal pl-2 h-full lg:px-6 py-1 lg:py-2">Date</div>
          <div className="lg:justify-center bg-white lg:h-full w-[70%] lg:w-full lg:col-span-1 flex items-center lg:px-6 lg:py-2 pr-2 font-medium">12/11/2022, 4:29 PM</div>
        </div>
        <div className='flex lg:flex-col border-b-2 lg:border-0 items-center lg:w-[13%]'>
          <div className=" lg:h-0 lg:invisible bg-gray-50  w-[30%] lg:w-full text-content-color font-light lg:font-normal pl-2 h-full lg:px-6 py-1 lg:py-2">Order ID</div>
          <div className="lg:justify-center bg-white lg:h-full w-[70%] lg:w-full lg:px-6 lg:py-2 flex items-center pr-2 font-medium">o-ye398qe</div>
        </div>
        <div className='flex lg:flex-col border-b-2 lg:border-0 items-center lg:w-[28%]'>
          <div className=" lg:h-0 lg:invisible bg-gray-50  w-[30%] lg:w-full text-content-color font-light lg:font-normal pl-2 h-full lg:px-6 py-1 lg:py-2">Order Title</div>
          <div className=" lg:justify-center bg-white lg:h-full w-[70%] lg:w-full lg:px-6 lg:py-2 flex items-center pr-2 font-medium">Xbox Game Pass Ultimate - 1 Month TRIAL Subscription (Xbox/Windows) Non-stackable Key UNITED STATES</div>
        </div>
        <div className='flex lg:flex-col border-b-2 lg:border-0 items-center lg:w-[13%]'>
          <div className=" lg:h-0 lg:invisible bg-gray-50  w-[30%] lg:w-full text-content-color font-light lg:font-normal pl-2 h-full lg:px-6 py-1 lg:py-2">Seller</div>
          <div className="lg:justify-center bg-white lg:h-full w-[70%] lg:w-full lg:px-6 lg:py-2 flex items-center pr-2 font-medium">OuchenStore</div>
        </div>
        <div className='flex lg:flex-col border-b-2 lg:border-0 items-center lg:w-[15%] lg:min-w-fit'>
          <div className=" lg:h-0 lg:invisible bg-gray-50  w-[30%] lg:w-full text-content-color font-light lg:font-normal pl-2 h-full lg:px-6 py-1 lg:py-2">Payment Method</div>
          <div className="lg:justify-center bg-white lg:h-full w-[70%] lg:w-full lg:px-6 lg:py-2 flex items-center pr-2 font-medium">PayPal</div>
        </div>
        <div className='flex lg:flex-col border-b-2 lg:border-0 items-center lg:min-w-fit lg:w-[13%]'>
          <div className=" lg:h-0 lg:invisible bg-gray-50  w-[30%] lg:w-full text-content-color font-light lg:font-normal pl-2 h-full lg:px-6 py-1 lg:py-2">Price</div>
          <div className="lg:justify-center bg-white lg:h-full w-[70%] lg:w-full lg:px-6 lg:py-2 flex items-center pr-2 font-medium">$5</div>
        </div>
        <div className='flex lg:flex-col border-b-2 lg:border-0 items-center lg:w-[13%]'>
          <div className=" lg:h-0 lg:invisible bg-gray-50  w-[30%] lg:w-full text-content-color font-light lg:font-normal pl-2 h-full lg:px-6 py-1 lg:py-2">Key</div>
          <div className="lg:justify-center bg-white lg:h-full w-[70%] lg:w-full lg:px-6 lg:py-2 flex items-center pr-2 font-medium cursor-pointer text-primary-color underline">View Keys</div>
        </div>
      </div>
    </div>
  )
}

export default Inventory