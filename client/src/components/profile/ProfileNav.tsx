"use client"
import Image from 'next/image'
import React from 'react'
import { ProfileIcon } from '../../../public/icons/Icons'
import Link from 'next/link'
import { toggle } from '@/redux/features/navbar-slice'
import {useDispatch} from "react-redux"
import { AppDispatch } from '@/redux/store'
import { SwagButton } from '../SwagButton'
function ProfileNav() {
    const dispatch = useDispatch<AppDispatch>()
    return (
        <nav className='w-full h-20 bg-black/10 flex items-center justify-between p-5'>
            <button onClick={()=>dispatch(toggle())} className='sm:hidden'>
                <SwagButton/>
            </button>
            <Link href='/'>
                <Image width={115} height={100} src='/Store-Logo.png' alt='Store Logo Image'/>
            </Link>
            <div className='flex gap-2 items-center'>
                <h1 className='text-primary-color hidden md:inline-block text-sm'>Ouchen606@gmail.com</h1>
                <div>
                    <ProfileIcon width={45} />
                </div>
            </div>
        </nav>
    )
}

export default ProfileNav