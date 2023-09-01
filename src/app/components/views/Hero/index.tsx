import React from "react";
import { heroimage } from "../../assets/Images";
import logo from "@/app/components/assets/Images/logo1.webp";
import logo1 from "@/app/components/assets/Images/logo2.webp";
import logo2 from "@/app/components/assets/Images/logo3.webp";
import logo3 from "@/app/components/assets/Images/logo4.webp";

import Image from "next/image";
import { BsCart2 } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="flex lg:flex-row flex-col space-y-20 justify-between items-center">
      {/* right side */}
      <div className="space-y-8 max-w-[30rem]">
        <button
          aria-label="redirect the user to sale page"
          className="rounded-md bg-[#e1edff] text-blue-700 font-semibold px-4 py-2 md:mt-0 mt-20"
        >
          Sale 70%
        </button>
        <h1 className="md:text-5xl text-4xl text-gray-800 font-bold ">
          An Industrial Take on Streetwear
        </h1>
        <p className="text-gray-700 ">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <button
          aria-label="redirect the user to sale page"
          className="rounded-md bg-[#212121] md:w-36 py-2 px-4 flex items-center gap-x-2"
        >
          <BsCart2 size={33} className="text-white" />
          <p className="text-primaryWhite md:whitespace-pre-line font-semibold ">
            Start Shopping
          </p>
        </button>
        <div className="flex space-x-10 ">
          <div className="w-12 lg:w-24">
            {" "}
            <Image height={100} width={70} src={logo} alt="brandimage" />
          </div>
          <div className="w-12 lg:w-24">
            {" "}
            <Image height={100} width={70} src={logo1} alt="brandimage" />
          </div>
          <div className="w-12 lg:w-24">
            {" "}
            <Image height={100} width={70} src={logo2} alt="brandimage" />
          </div>
          <div className="w-12 lg:w-24">
            {" "}
            <Image height={100} width={70} src={logo3} alt="brandimage" />
          </div>
        </div>
      </div>
      {/* left side */}
      <div className="bg-primaryWhite rounded-full ">
        <Image src={heroimage} alt="heroimage" />
      </div>
    </div>
  );
};

export default Hero;
