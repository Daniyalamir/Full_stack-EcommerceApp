import BASE_PATH_FORAPI from "@/app/components/shared/Wrapper/BasePath";
import { oneProductType, responseType } from "@/app/components/utils/ProductsDataArrayAndType";
import Card from "@/app/components/views/Card";
import { FC } from "react"

async function fetchAllProductsData(){
  let response = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-07-31/data/query/production?query=*%5B_type+%3D%3D+%22products%22+%26%26+productTypes%5B1%5D+%3D%3D+%22Female%22+%5D`)
   
  if(!response.ok){
     throw new Error("Failed to fetch");
   }
   return response.json()
 }





const Female : FC<{params : {ftype : string}}>= async ({params}) => {
  let response : responseType = await fetchAllProductsData();
 if(params.ftype !== "Female"){

     let orignalSortedDataOfParams =  response.result.filter((items:oneProductType)=>items.productTypes[0]=== params.ftype)
      console.log(orignalSortedDataOfParams)
     
     response = {result : orignalSortedDataOfParams}
    }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-center justify-center gap-4">
      {
        response.result.map((item: oneProductType,index:number)=>(
          <Card  key={index} singleProductData={item} />
        ))
      }

    </div>
  )
}

export default Female