import { FC } from "react"
import { HiOutlineChevronDown } from "react-icons/hi"
import Link from "next/link"
import { useState } from "react"
import { NavbarItemType } from "@/app/components/utils/NavBarArraysAndTypes"

const Expand : FC<{Dataitem : NavbarItemType}> = ({Dataitem}) => {
    const [isExpended, setExpended] = useState<boolean>(false);
    const [isTimeOut, setTimeOut] = useState<boolean>(false);

    function handleExpand() {
        setExpended(!isExpended);
        setTimeout(() => {
            setTimeOut(!isTimeOut);
        }, 50);
    }

  return (
    
        <li className={`${isExpended ? "h-56" : "h-12"} duration-300 list-none`}>
            <div onClick={handleExpand} className=" py-2 px-3 flex duration-300 rounded-md hover:bg-purple-600 items-center justify-between group">
                <Link href={Dataitem.href}>{Dataitem.label}</Link>
                {Dataitem.isDropDown ? <HiOutlineChevronDown className="mt-1 -rotate-90 group-hover:rotate-0 duration-300" size={15} /> : ""}
            </div>
            <div className="flex flex-col space-y-1 mt-2">
                {isTimeOut && Dataitem.dropDownData?.map((subItem: NavbarItemType, index: number) => (
                    <Link key={index} className="hover:bg-black hover:text-white rounded-md py-1 px-5 duration-300 " href={subItem.href}>
                        {subItem.label}
                    </Link>
                ))}
            </div>
        </li>
          
    
  )
}

export default Expand