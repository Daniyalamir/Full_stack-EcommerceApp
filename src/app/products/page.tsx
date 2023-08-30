import BASE_PATH_FORAPI from "../components/shared/Wrapper/BasePath"
// import AllProductCompo from "../components/views/AllProducts"
import AllProducts from "@/app/components/views/AllProducts"

async function FetchAllProductData(){
  let res = await fetch(`${BASE_PATH_FORAPI}/api/products?start=0&end=20`);
  // let data = await res.json() 
  // console.log(data)
  if(!res.ok){
    throw new Error("Failed to fetch")
    }
    return res.json()
  }

const Products = async () => {
    const ImProductData =  await FetchAllProductData();
    // console.log(ProductData)
  return (
    <div>
         {/* <AllProductCompo ImProductData={ImProductData}/> */}
         <AllProducts/>
         

    </div>
  )
}

export default Products