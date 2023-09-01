
import { responseType } from '@/app/components/utils/ProductsDataArrayAndType';
import ProductDetail from '@/app/components/views/ProductDetail';
import { FC } from 'react'

async function fetchPreviewData(imslug: string){
  let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-07-31/data/query/production?query=*%5B_type+%3D%3D+%22products%22+%26%26+slug.current+%3D%3D+%22${imslug}%22%5D`)
  return res.json();
}






const Catalog :FC<{params:{slug :string}}> = async({params}) => {
  let data: responseType = await fetchPreviewData(params.slug)
  // console.log("Im Data",data);
  // console.log("heyim slug",params.slug)
 
    return (
    <div>
      {/* {params.slug} */}
      <ProductDetail item={data.result[0]}/>
    </div>
  )
}

export default Catalog; 
