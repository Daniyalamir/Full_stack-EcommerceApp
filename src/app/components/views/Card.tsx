import React, { FC } from 'react'
import { oneProductType } from '../utils/ProductsDataArrayAndType'
import  ImageUrlBuilder  from '@sanity/image-url'
import { client } from '../../../../sanity/lib/client'
import Image from 'next/image'
import PortableText from 'react-portable-text'
import Link from 'next/link'


const builder = ImageUrlBuilder(client)
 
function urlFor(source : any ){
  return builder.image(source)
}
const Card:FC<{singleProductData:oneProductType}> = ({singleProductData}) => {
  // console.log(singleProductData)
  //   console.log(urlFor(singleProductData.image[0]).width(500).url())  
  // console.log(singleProductData.slug.current)
  return (
    <Link href={`/catalog/${singleProductData.slug.current}`} >  
    <div className='border max-w-sm space-y-3 hover:scale-110 duration-300'>
        <div className='relative w-full'>
          <div className='absolute inset-0 z-10 '/>
            <Image width={500} height={500} src={urlFor(singleProductData.image[0]).width(1000).height(1000).url()} alt={singleProductData.image[0].alt}/>
        </div>
        <div className='space-y-1 text-gray-600 font-semibold '>
          <h5>{singleProductData.productName}</h5>
          {/* <p>
            <PortableText className='text-sm font-normal' content={singleProductData.description}/>
          </p> */}
          <p className='font-bold'>${singleProductData.price}</p>

          
        </div>

    </div>
    </Link>
  )
}

export default Card



