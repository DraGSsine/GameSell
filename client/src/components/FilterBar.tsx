'use client'
import React, { useState } from 'react'
import CheckBox from './CheckBox'
function FilterBar() {
    return (
        <aside className=' hidden top-16 sticky lg:flex justify-between flex-col p-10 space-y-5 rounded-2xl min-w-[16vw] max-w-[35vw] h-[85vh] bg-white/10 backdrop:filter backdrop:blur-lg'>
            <div>
                <h1 className='mb-5 text-xl text-slate-100 font-semibold'>Categories</h1>
                <div className=' space-y-2 ml-3'>
                    {
                        Array.from({ length: 6 }).map((categorie, index) => (
                            <div key={index}>
                                <CheckBox item='indy' />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <h1 className='mb-5 text-xl text-slate-100 font-semibold'>Platforms</h1>
                <div className=' space-y-2 ml-3'>
                    {
                        Array.from({ length: 4 }).map((categorie, index) => (
                            <div key={index}>
                                <CheckBox item='indy' />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <h1 className='mb-5 text-xl text-slate-100 font-semibold'>Price</h1>
                <div className='flex items-center'>
                    <div className=' p-2 flex max-w-[80px] rounded-lg overflow-hidden bg-secondary-color'>
                        <span className=' text-content-color mr-2'>$</span>
                        <input className='w-full bg-inherit outline-none text-white' type="text" placeholder='0' />
                    </div>
                    <span className=' text-content-color mx-2'>-</span>
                    <div className=' p-2 flex max-w-[80px] rounded-lg overflow-hidden bg-secondary-color'>
                        <span className=' text-content-color mr-2'>$</span>
                        <input className='w-full bg-inherit outline-none text-white ' type="text" placeholder='999'  />
                    </div>
                </div>
            </div>
            <button className=' self-center w-[8rem] py-2 rounded-full font-semibold bg-primary-color'>Aplly Filters</button>
        </aside>
    )
}

export default FilterBar