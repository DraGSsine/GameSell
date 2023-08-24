import React from 'react'
import { BrokenLinktIcon } from '../../../public/icons/Icons';
import Link from 'next/link';
import Image from 'next/image';

function InvalidLink({ }) {
    return (
        <div>
            <nav className="h-[15vh] flex items-center">
                <Image src={"/Store-Logo.png"} width={150} height={150} alt="logo" />
            </nav>
            <div className="relative flex flex-col items-center overflow-hidden h-[85vh] mx-5 pt-20 ">
                <BrokenLinktIcon className="w-[30vw] h-[15vh]" />
                <div className="max-w-xl px-5 text-center mt-10">
                    <h2 className="mb-4 text-[37px] sm:text-[45px] font-bold text-white">
                        Link is not valid!
                    </h2>
                    <p className="mb-2 text-base text-gray-50">
                        Oops! This verification URL is no longer valid.
                    </p>
                    <Link href="/" className="mt-6 inline-block w-48 md:w-96 rounded bg-primary-color px-5 py-3 font-medium text-white shadow-md shadow-primary-color/20 hover:bg-primary-hard-color duration-200 transition-all">
                        Go Home →
                    </Link>
                </div>
            </div>
        </div>

    );
}

export default InvalidLink