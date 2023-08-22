import { createClient } from "next-sanity";
import { NextResponse } from "next/server";
import { SanityClient } from "sanity";
import imageUrlBuilder from "@sanity/image-url"
import { client } from "../../../../sanity/lib/client";




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
