import { NavbarItemType } from '@/app/components/utils/NavBarArraysAndTypes'
import Link from 'next/link'
import React from 'react'
import {FC} from 'react'

const DropDown : FC<{item:NavbarItemType}> = ({ item }) => {
  return (
    <ul>
        {item.dropDownData?.map((item:NavbarItemType,index:number)=>(
           <li key={index} className='hover:ml-2 group-hover:duration-200 -translate-y-7 group-hover:translate-y-0'>
            <Link href={item.href}>{item.label}</Link>
           </li>
        ))}
    </ul>
  )
}

export default DropDown