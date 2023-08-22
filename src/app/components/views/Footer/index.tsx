import React from "react";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <>   
    <div className="flex justify-start md:justify-center items-center max-w-7xl mx-auto pl-5">
      <div className="grid grid-cols-1 md:grid-cols-4 space-x-0 md:space-x-40 space-y-5">
        <div className="col-span-1 md:mt-5 space-y-10 text-lg text-gray-600">
          <Image src="/logo.webp" alt="logo" height={100} width={200} />
          <p>
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>

          {/* <p> */}
            {" "}
            <div className="flex items-center gap-x-5">
              <div className="bg-gray-300 rounded-md p-2">
                <FaFacebook size={20} className="text-black" />
              </div>
              <div className="bg-gray-300 rounded-md p-2">
                <FaTwitter size={20} className="text-black" />
              </div>
              <div className="bg-gray-300 rounded-md p-2">
                <FaLinkedin size={20} className="text-black" />
              </div>
            </div>
          {/* </p> */}
        </div>
        <div className="col-span-1 space-y-4 text-lg text-gray-600">
          <p className="font-bold text-lg"> Company</p>
          <p> About</p>
          <p> Terms of Use</p>
          <p> Privacy Policy</p>
          <p> How it Works</p>
          <p>Contact Us</p>
        </div>
        <div className="col-span-1 space-y-4 text-lg text-gray-600">
          <p className="font-bold text-lg"> Support</p>
          <p> Support Carrer</p>
          <p> 24h Service</p>
          <p>Quick Chat</p>
        </div>
        <div className="col-span-1 space-y-4 text-lg text-gray-600">
          <p className="font-bold text-lg"> Contact</p>
          <p> Whatsapp</p>
          <p> Support 24h</p>
        </div>
      </div>
    </div>

{/* Last Section */}
<div>
    <div className='w-full bg-gray-300 h-[1.5px] mt-10 text-gray-300'></div>
    <div className='grid md:grid-cols-3 grid-cols-1 max-w-7xl mx-auto p-14 md:space-y-0 space-y-5 md:pl-10 mt-3 text-lg text-gray-600'>
      <p className='col-span-1'>Copyright © 2023 Bazar Ghar</p>
      <p className='col-span-1'>Design by. <strong className='text-black'> Trackterra</strong></p>
      <p className='col-span-1'>Code by. <strong className='text-black'> Daniyalaamir on GitHub </strong></p>
    </div>
    
  </div>


    </>
 
  );
}
