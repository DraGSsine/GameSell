import React from 'react'
import Banner from './Banner'
import Product from './Product'
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className='xl:h-[30vw] w-full h-auto xl:flex'>
            <Banner />
            <div className='xl:w-[20vw] w-full h-full lg:ml-5 '>
                <h1 className=" h-[10%] text-2xl text-content-color font-semibold">Recommed For You</h1>
                <div className='h-[90%] grid sm:grid-cols-3 grid-cols-1 xl:grid-cols-1 gap-4'>
                    {
                        Array.from({ length: 3 }).map((item, index) => (
                            <Link href={`product/${`54`}`} className=' h-[95%]'>
                                <Product CardSize={'xl:w-[24vw] h-[20vh] xl:text-[1.2rem] xl:h-full text-[1.2rem] bg-red-600 p-2'} ImageSize=" xl:w-[6vw] sm:w-[10vw] w-[25vw] h-full" ContentSize='px-2 ' />
                            </Link>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
