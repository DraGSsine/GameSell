import React, { useState } from 'react'
import { Check } from '../../public/icons/Icons'

function CheckBox({item}:{item:string}) {
    const [IsCheck, setIsCheck] = useState(false)
    const ChoseCategorie = () => {
        setIsCheck(!IsCheck)
    }
    return (
        <>
            <input type="checkbox" id='indy' className=' hidden' />
            <label onClick={ChoseCategorie} htmlFor="indy" className='flex items-center space-x-2'>
                <span className={`rounded-[5px] w-[18px] h-[18px] block ${IsCheck ? ' bg-primary-color' : 'bg-secondary-color'} `}>

                    {IsCheck && <Check />}
                </span>
                <p className=' text-lg capitalize text-content-color'>{item}</p>
            </label>
        </>
    )
}

export default CheckBox