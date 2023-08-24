import WishListProduct from '@/components/profile/WishListProduct'
import React from 'react'

const Wishlist = () => {
  return (
    <div className='lg:px-10 px-4 mt-10 flex flex-col justify-center'>
      <h1 className=' text-primary-color font-semibold text-2xl mb-3'>Make Your Wish True</h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <WishListProduct />
        <WishListProduct />
        <WishListProduct />
        <WishListProduct />
        <WishListProduct />
        <WishListProduct />
        <WishListProduct />
      </div>
    </div>
  )
}

export default Wishlist