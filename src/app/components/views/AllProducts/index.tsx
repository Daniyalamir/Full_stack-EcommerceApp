// // import React from "react";
// "use client"
// import { Component } from "react"
// import { oneProductType } from "../../utils/ProductsDataArrayAndType"
// import InfiniteScroll from 'react-infinite-scroll-component';
// import BASE_PATH_FORAPI from "../../shared/Wrapper/BasePath";
// import Card from "../Card";
// interface PropsType{
//     productArray:  Array<oneProductType>
// }



// export default class AllProductCompo extends Component <{ImProductData : PropsType}>{
//    start : number = 0;
//    end : number = 20;
//    state:{ items : Array<oneProductType> ,hasMore: boolean }={
//        items:[...this.props.ImProductData.productArray],
//        hasMore : true,
//    }
//    fetchDataFromApiGradullually = async ( start : number,end : number) => {
//     const res = await fetch(`${BASE_PATH_FORAPI}/api/products?start=${start}&end=${end}`)
//     const dataToCheckAndSend = await res.json();
//     if(dataToCheckAndSend.productArray === "not found"){
//         this.setState({
//             hasMore : false })
//  }
//      return dataToCheckAndSend;
//     }

   
   
//     getData = async ()=>{
//         let alltogether = await this.fetchDataFromApiGradullually(this.start,this.end)
//         if(alltogether.productArray !== "not found"){

        
//         this.setState({
//             items:this.state.items.concat(alltogether.productArray)
//     })
// }else{
//     this.setState({
//         hasMore : false
//     })
// }
//  this.start = this.start + 10;
//  this.end = this.end + 10;

//         // console.log(this.props.ProductData.productArray[0].price)
//     }
//     render() {
//         return(
//             <div onClick={this.getData}>
//             <InfiniteScroll
//             dataLength={this.state.items.length} //This is important field to render the next data
//             next={this.getData}
//             hasMore={this.state.hasMore}
//             loader={<h4>Loading...</h4>}
//             endMessage={
//               <p style={{ textAlign: 'center' }}>
//                 <b>Yay! You have seen it all</b>
//               </p>
//             }
//           >
//             {/* HelloWorld */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-center justify-center gap-4 ">
//             {this.state.items.map((item : oneProductType ,index:number) =>(
//                 <Card key={index} singleProductData={item}/>
//             ))}
//             </div>
//           </InfiniteScroll>
//           </div>
//         )
        
//     }
// }

/// funntional way
import { oneProductType } from "../../utils/ProductsDataArrayAndType";
import Card from "../Card";
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
const allProducts = async () => {
    const AllData =  await fetchAllProductsData();
    // console.log("imData",AllData)
    
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-center justify-center gap-4">
      {
        AllData.result.map((item: oneProductType,index:number)=>(
          <Card key={index} singleProductData={item} />
        ))
      }

    </div>
  )
}

export default allProducts;
