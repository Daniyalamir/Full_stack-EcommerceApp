import React from 'react'
import Wrapper from '@/app/components/shared/Wrapper'
import Hero from '@/app/components/views/Hero'
import ProductType from '@/app/components/views/ProductTypes'
import BASE_PATH_FORAPI from '@/app/components/shared/Wrapper/BasePath'
import ProductCarousal from '@/app/components/views/ProductCarousal'
import Jewellery from './components/views/Jewellery'
import Footer from './components/views/Footer'
import Newsletter from './components/views/Newsletter'
import { responseType } from './components/utils/ProductsDataArrayAndType'



async function fetchAllProductsData(){
  let response = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-07-31/data/query/production?query=*%5B_type+%3D%3D+%22products%22%5D`, {
    next: {
      revalidate: 60
    }
  });
  // console.log(response)
    if(!response.ok){
      throw new Error("Data is not fetching");
    }
    return response.json()
  }
  export default async function Home() {
    let { result}  : responseType = await fetchAllProductsData();
    // console.log("im response :" , result);
    return (
      <div>
     <Hero/>
     <ProductType/>
    <ProductCarousal MyProductData ={result}/> 
    <Jewellery/>
    <Newsletter/>
    <Footer/>
    
    </div>
  )
}
