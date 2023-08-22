import React from 'react'

const Newsletter = () => {
  return (
    



<div className="max-w-7xl mx-auto my-16">
        <div className="relative -z-30">
      <div className=" absolute left-1/2 transform -translate-x-1/2 top-1/2 transform-translate-y-1/2 text-center font-extrabold  md:text-9xl text-6xl text-gray-200/80">
        Newsletter
      </div>
      </div>
      <div className="space-y-5">
        <div className="font-bold text-black text-center text-4xl ">
          
          Subscribe Our Newsletter
        </div>
        <p className="text-center text-base ">
          Get the latest information and promo offers directly
        </p>
        <div className="flex justify-center">
          <div className="flex w-full md:max-w-sm max-w-xs  items-center space-x-2">
            <input
              type="email"
              placeholder="Input email address"
              className="focus:border-transparent"
            />
            <button type="submit" className="whitespace-nowrap bg-black  text-white py-1 px-2 rounded-lg hover:border-0">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>



  )
}

export default Newsletter