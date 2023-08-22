import React from 'react'
import Image from "next/image"

const Jewellery = () => {
  return (
    <div>    
    {/* First Portion */}
    <div className="max-w-7xl mx-auto text-center md:text-right mt-28">
      <div className="text-3xl md:text-6xl">
        <div className="flex flex-col items-center md:items-end leading-tight font-semibold">
          <span className="mb-2 md:mb-0">Unique and Authentic</span>
          <span className="mb-2 md:mb-0 md:mr-[129px]">Vintage Designer</span>
          <span className="mb-2 md:mb-0 md:mr-[353px]">Jewellery</span>
        </div>
      </div>
    </div>
    {/* Secound Portion */}

    <div className='max-w-7xl flex md:flex-row flex-col md:mx-auto mx-5  '>
    <div className="1 grid grid-cols-2 md:gap-10  gap-10 my-20  md:ml-[57px] ">
    <div className="col-span-1"><p className='font-bold mb-2 text-base'>Using Good Quality <br /> Materials </p><p> Lorem ipsum dolor sit amt, consectetur adipiscing elit. </p></div>
    <div className="col-span-1"> <p className='font-bold mb-2 text-base'>100% Handmade <br /> Products </p><p> Lorem ipsum dolor sit amt, consectetur adipiscing elit. </p></div>
    <div className="col-span-1"><p className='font-bold mb-2 text-base'>Modern Fashion Design </p><p> Lorem ipsum dolor sit amt, consectetur adipiscing elit. </p></div>
    <div className="col-span-1"><p className='font-bold mb-2 text-base'>Discount for Bulk Orders </p><p> Lorem ipsum dolor sit amt, consectetur adipiscing elit. </p></div>
  </div>
  <div className='2  md:w-2/4 flex md:flex-row flex-col  md:ml-32 md:my-20   '>
    <Image src={"/hero4.webp"} alt="image" width={200} height={100} className='flex items-center mx-auto md:h-42'/>
    <div className=''><p className='text-justify md:ml-10'>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
    <button className='bg-black text-white md:ml-10 mt-2 px-4 py-2 font-bold'>See all products </button></div>



  </div>
  </div>
    
    </div>

  )
}

export default Jewellery