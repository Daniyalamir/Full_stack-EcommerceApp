import { createClient } from "next-sanity";
import { NextResponse } from "next/server";
import { SanityClient } from "sanity";

let client: SanityClient = createClient({
   projectId:`${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`,
   dataset: `${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
   apiVersion: "2022-03-25",
   useCdn: false,
} )


export async function GET(){
   try{
      let response = await client.fetch(`*[_type == "products"]`)
      // return NextResponse.json({message : "hello"}) 
      console.log(response);
      return NextResponse.json({response})

      
   } catch(err){ /// module not found
      // return NextResponse.json({message : "failed"}) 
      console.log((err as { message : string}).message);
      return NextResponse.json({"Error": err})
      
   }
}
