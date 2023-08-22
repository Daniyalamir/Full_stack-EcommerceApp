import React from 'react'
import Wrapper from '@/app/components/shared/Wrapper'
import Hero from '@/app/components/views/Hero'
import ProductType from '@/app/components/views/ProductTypes'
import BASE_PATH_FORAPI from '@/app/components/shared/Wrapper/BasePath'
import ProductCarousal from '@/app/components/views/ProductCarousal'
import Jewellery from './components/views/Jewellery'
import Footer from './components/views/Footer'
import Newsletter from './components/views/Newsletter'



async function fetchAllProductsData(){
   let response = await fetch(`${BASE_PATH_FORAPI}/api/products`)
    if(!response.ok){
      throw new Error("Failed to fetch");
    }
    return response.json()
  }
export default async function Home() {
  let {response}  = await fetchAllProductsData();
  // console.log("response :" , response);
return (
    <div>
     <Hero/>
     <ProductType/>
    <ProductCarousal ProductData ={response}/> 
    <Jewellery/>
    <Newsletter/>
    <Footer/>
    
    </div>
  )
}
