import React from 'react'
import { EmailVerifiedtIcon } from '../../../public/icons/Icons'
import Link from 'next/link'
import Image from 'next/image'

function ValidLink() {
  return (
    <div>
            <nav className="h-[15vh] flex items-center">
        <Image src={"/Store-Logo.png"} width={150} height={150} alt="logo" />
      </nav>
      <div className="relative flex flex-col items-center overflow-hidden h-[75vh] mt-16 ">
          <EmailVerifiedtIcon className="w-[50vw] h-[20vh]" />
          <div className="max-w-xl px-5 text-center ">
            <h2 className="mb-4 text-[40px] font-bold text-white">
              Congratulations!
            </h2>
            <p className="mb-2 text-lg text-gray-50">
              We are glad that you're with us! Your account has been
              successfully verified.
            </p>
            <p className="mb-2 text-lg text-primary-color">
              Thank you for choosing us!
            </p>
            <Link
              href="/auth/login"
              className="mt-6 inline-block w-48 md:w-96 rounded bg-primary-color px-5 py-3 font-medium text-white shadow-md shadow-primary-color/20 hover:bg-primary-hard-color duration-200 transition-all"
            >
              Sign In →
            </Link>
          </div>
    </div>
    </div>

  )
}

export default ValidLink