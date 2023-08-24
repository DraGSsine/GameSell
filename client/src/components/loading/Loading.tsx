import Image from 'next/image'
import React from 'react'

function Loading() {
    return (
        <div className="relative flex justify-center items-center h-[100vh] w-[100vw]">
            <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-primary-hard-color"></div>
            <Image width={1000} height={1000} alt='loading image' src="/favicon-32x32.png" className="rounded-full h-28 w-28"/>
        </div>
    )
}

export default Loading