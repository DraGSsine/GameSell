import React from 'react'
import { EmailVerifiedtIcon } from '../../../public/icons/Icons'
import Link from 'next/link'

function EmailReseted() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden h-[75vh] mt-16 ">
          <EmailVerifiedtIcon className="w-[50vw] h-[20vh]" />
          <div className="max-w-xl px-5 text-center ">
            <h2 className="mb-4 text-[40px] font-bold text-white">
              Congratulations!
            </h2>
            <p className="mb-2 text-lg text-gray-50">
            Your email has been successfully updated. If you have any further questions or concerns, please don't hesitate to contact us. <span className="mb-2 text-lg text-primary-color">Thank you!</span> 
            </p>
            <Link
              href="/"
              className="mt-6 inline-block w-48 md:w-96 rounded bg-primary-color px-5 py-3 font-medium text-white shadow-md shadow-primary-color/20 hover:bg-primary-hard-color duration-200 transition-all"
            >
              Go Home →
            </Link>
          </div>
        </div>
  )
}

export default EmailReseted