import { NextResponse } from "next/server";
import { client } from "../../../../sanity/lib/client";
import { oneProductType } from "@/app/components/utils/ProductsDataArrayAndType";
import Card from "@/app/components/views/Card";
// ujgvu1fi
async function getallProductsForSearch(){
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


const Search = async({params}:{params : {query : string}}) => {
 let slug = params.query.toLowerCase();    /// muscle
   let data = await getallProductsForSearch();
   console.log("heyim",data);
 let dataToMap = await data.result.filter((item: oneProductType)=>{
//  console.log((item.productName).toLowerCase().indexOf(slug)>=0);
 if((item.productName).toLowerCase().indexOf(slug)>=0){
  return true
 }
 return false
});

//  console.log("data" , dataToMap)
 //  console.log(data)
 // console.log(params.query)
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-center justify-center gap-4">
      {
        dataToMap && dataToMap.map((item: oneProductType,index:number)=>(
          <Card  key={index} singleProductData={item} />
        ))
      }

    </div>
  )
}

export default Search;