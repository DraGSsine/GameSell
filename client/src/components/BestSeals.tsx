import React from 'react'
import Link from 'next/link'
import Product from './Product'
function BestSeals() {
  return (

    <div className="gap-5 grid md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 sm:grid-cols-3 grid-cols-2 w-full">
      {
        Array.from({ length: 15 }).map((item, index) => (
          <Link href={`product/${`500`}`}>
            <Product CardSize='flex-col text-[1.1rem]  h-[45vh] lg:h-[43vh] p-2' ImageSize=' h-[100%] w-full' />
          </Link>
        ))
      }
    </div>
  )
}

export default BestSeals