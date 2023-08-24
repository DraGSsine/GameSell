"use client"
import React from 'react'
import { CloseIcon, ComplateOderIcon, Hearticon, InventoryIcon, LougOutIcon, ProfileIcon } from '../../../public/icons/Icons'
import Link from 'next/link'
import { AppDispatch, RootState } from '@/redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { toggle } from '@/redux/features/navbar-slice'
function SideBar() {
    const isOpen = useSelector((state: RootState) => state.toggleBarsReducer)
    const Dispatch = useDispatch<AppDispatch>()
    return (
        <div className={` ${isOpen ? 'absolute' : ' hidden sm:flex'} justify-between z-40 h-full absolute top-0 w-[50vw] sm:relative sm:w-fit lg:w-[20vw]  flex bg-primary-color flex-col text-[#ebebeb] font-medium`}>
            <div className='pt-20 md:pt-0'>
                <Link onClick={() => Dispatch(toggle())} href='/profile'>
                    <div className='hover:bg-[#cc7d23] bg-[#cc7d23] cursor-pointer p-4'>
                        <ProfileIcon width={30} strokeWidth={2} className='inline-block mr-2' stroke="#ebebeb" />
                        <span className="sm:hidden  lg:inline-block">Setting</span>
                    </div>
                </Link>
                <Link onClick={() => Dispatch(toggle())} href='/profile/orders'>
                    <div className='hover:bg-[#cc7d23] cursor-pointer p-4'>
                        <ComplateOderIcon width={30} strokeWidth={2.5} className='inline-block mr-2' stroke="#ebebeb" />
                        <span className="sm:hidden  lg:inline-block">Orders</span>
                    </div>
                </Link>
                <Link onClick={() => Dispatch(toggle())} href='/profile/wishlist'>
                    <div className='hover:bg-[#cc7d23] cursor-pointer p-4'>
                        <Hearticon width={30} strokeWidth={2} className='inline-block mr-2' stroke="#ebebeb" />
                        <span className="sm:hidden  lg:inline-block">wishlist</span>
                    </div>
                </Link>
                <Link onClick={() => Dispatch(toggle())} href='/profile/inventory'>
                    <div className='hover:bg-[#cc7d23] cursor-pointer p-4'>
                        <InventoryIcon width={30} strokeWidth={1.5} className='inline-block mr-2' stroke="#ebebeb" />
                        <span className="sm:hidden  lg:inline-block">Inventory</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default SideBar