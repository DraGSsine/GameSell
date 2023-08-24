import React from 'react'
import { FacebookIcon, InstagramIcon, TwitterIcon } from '../../public/icons/Icons'

const Footer = () => {
  return (
    <footer className="relative bg-primary-color mt-36 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <button className="flex space-x-2">
                <FacebookIcon hanging={30} width={30} />
                <TwitterIcon hanging={30} width={30} />
                <InstagramIcon hanging={30} width={30} />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                <ul className="list-unstyled text-white">
                  <li>
                    <a className="block pb-2 text-sm" href="#">About Us</a>
                  </li>
                  <li>
                    <a className="block pb-2 text-sm" href="#">Blog</a>
                  </li>
                  <li>
                    <a className="block pb-2 text-sm" href="#">Github</a>
                  </li>
                  <li>
                    <a className="block pb-2 text-sm" href="#">Free Products</a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
                <ul className="list-unstyled text-white">
                  <li>
                    <a className="block pb-2 text-sm" href="#">MIT License</a>
                  </li>
                  <li>
                    <a className="block pb-2 text-sm" href="#">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a className="block pb-2 text-sm" href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a className="block pb-2 text-sm" href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="mb-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2021</span>
              <a href="#" className="text-blueGray-500 hover:text-gray-800" target="_blank"> Notus JS by</a>
              <a href="#" className="text-blueGray-500 hover:text-blueGray-800">Creative Tim</a>.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer