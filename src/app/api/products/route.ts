import { NextRequest, NextResponse } from "next/server";
import { oneProductType } from "@/app/components/utils/ProductsDataArrayAndType";

export async function GET(request: NextRequest) {
    const orignalData: Array<oneProductType> = [];
    const url = request.nextUrl.searchParams;
    
   

    let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "products"]`);
    let dataFrom_APi = await res.json();
    orignalData.push(...dataFrom_APi.result)
   //  .has() method is used to check if a certain parameter exists in the URL's query parameters.
    if(url.has("start") || url.has("end")){
      if(orignalData[Number(url.get("start"))]){

         // Number(url.get("start")) and Number(url.get("end")): These expressions are converting the values of the "start" and "end" query parameters from the URL into numbers. 
         // .get method is simpily used to obtain/fetch information from query parameter that is on the end of url
       let productArray = orignalData.slice(Number(url.get("start")),Number(url.get("end")))
       return NextResponse.json({productArray})
      }
      return NextResponse.json({ productArray : "Not Found" })
   }

   


    return NextResponse.json({ orignalData })
};










   //  if (url.has("start") || url.has("end")) {
   //      if (orignalData[Number(url.get("start"))]) {
   //          let productArray = orignalData.slice(Number(url.get("start")), Number(url.get("end")))
   //          return NextResponse.json({ productArray })
   //      }
   //      return NextResponse.json({ productArray: "Not found" })

   //  }
