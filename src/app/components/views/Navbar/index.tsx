"use client";
import Image from "next/image";
import { useState } from "react";
// import { NavbarArray,NavbarItemType } from "../../utils/NavBarArraysAndTypes"
import {
  NavbarArray,
  NavbarItemType,
} from "@/app/components/utils/NavBarArraysAndTypes";
import Link from "next/link";
import { BiSearchAlt } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import DropDown from "@/app/components/views/Navbar/subComponents/DropDown";
// import MobileNavBar from "@/app/components/views/Navbar/subComponents/MobileNavBar";
///
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import Expand from "./subComponents/Expand";
import { useRouter } from "next/navigation";
export default function Navbar() {
  const router = useRouter();
  const [isNavbarOpen, setNavbarOpen] = useState<boolean>(false);
  const [cartItemNumber, setcartItemNumber] = useState<number>(0);
  const [SearchQuery, setSearchQuery] = useState("");


function  handleSearchCalledFunc(e: any){
  // console.log(e.key,e.keyCode)
  if(e.key === "Enter" && e.keyCode === 13){
    router.push(`/search/${SearchQuery}`);
    // console.log("enter")
  }
}


  return (
    <div className="coverdiv sticky top-0 bg-white/70 backdrop-blur-sm  z-50">
      <div className=" py-6 flex justify-around  items-center">
        {/* for logo */}
        <div className="1 w-36 flex-shrink-0">
          <Image
            className=""
            alt="logo"
            height={500}
            width={500}
            src={"/Logo.webp"}
          />
        </div>

        {/*  this div for hidden the desktop view  */}
        <div className="hidden lg:flex justify-between items-center   ">
          <ul className=" 2 flex space-x-5 font-light text-lg text-purple-950 mr-32">
            {NavbarArray.map((item: NavbarItemType, index: number) => (
              <li
                key={index}
                className="flex items-center relative rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer group "
              >
                <Link className="" href={item.href}>
                  {item.label}
                </Link>
                {/* ternary opreator */}
                {item.isDropDown ? (
                  <AiOutlineDown
                    className="  mt-1 -rotate-90 group-hover:rotate-0 duration-300"
                    size={12}
                  />
                ) : (
                  ""
                )}
                {/* conditional rendering */}
                {item.isDropDown && (
                  <div className="invisible group-hover:visible absolute top-8 left-0 mr-1  p-5 rounded-md bg-gray-100 font-light min-w-[7.8rem] my-2">
                    <DropDown item={item} />
                  </div>
                )}
              </li>
            ))}
          </ul>
          {/* input section */}
          <div className=" 3 border flex items-center px-3 rounded-md mr-10 ">
            <Link href={`/search/${SearchQuery}`}>
              <BiSearchAlt fill="gray" />{" "}
            </Link>
            <input
              type="text"
              value={SearchQuery}
              onKeyDown={handleSearchCalledFunc}
              onChange={(e)=>setSearchQuery(e.target.value)}
              className="pl-2 pr-4 py-[0.10] outline-none"
              placeholder="Search in Our Store"
            />
          </div>

          {/* add to card button */}
          <div className="4 flex-shrink-0 relative w-11 h-11 bg-gray-200 rounded-full flex items-center justify-center hover:cursor-pointer">
            <div className="4child absolute top-1 right-1 bg-red-400  font-light rounded-full w-4 h-4 flex justify-center items-center text-xs">
              {cartItemNumber}
            </div>
            <BsCart2 size={24} />
          </div>
        </div>
        <div className="parent" onClick={() => setNavbarOpen(!isNavbarOpen)}>
          {" "}
          {/* Hamburger  */}
          {isNavbarOpen ? (
            <div className="mobile-version flex lg:hidden cursor-pointer">
              <AiOutlineCloseCircle size={24} />
            </div>
          ) : (
            <div className="flex lg:hidden cursor-pointer">
              <GiHamburgerMenu size={24} />
            </div>
          )}
        </div>
      </div>
      {isNavbarOpen && <MobileNavbar />}
    </div>
  );
}
const MobileNavbar = () => {
  return (
    <div className="w-full px-6 py-4 bg-gray-100">
      {NavbarArray.map((item: NavbarItemType, index: number) => {
        return <Expand key={index} Dataitem={item} />;
      })}
    </div>
  );
};
