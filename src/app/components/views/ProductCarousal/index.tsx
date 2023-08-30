"use client"
import React, { FC } from 'react'
import { oneProductType } from '../../utils/ProductsDataArrayAndType'
import Card from '../Card'
///////
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// const ProductCarousal:FC<{ProductData : Array<oneProductType>}> = ({ProductData}) => {
//   return (
//     <div className=''>
//       {
//        ProductData.map((item:oneProductType,index:number )=>(

//          <Card  singleProductData={item} />
//        ))}
//     </div>
//   )
// }

// export default ProductCarousal





// const ProductCarousal:FC<{ProductData : Array<oneProductType>}> = ({ProductData}) => {
//     let initialX: number;
//     let isDragging = false;
//     let tabBox: any;

//     const isBrowser = () => typeof window !== "undefined";

//     if (isBrowser()) {
//         tabBox = document.querySelector(".scrollGrab");
//     }

//     // Desktop functions
//     function mouseMoves(e: any) {
//         if (!isDragging) return;
//         if (tabBox) {
//             tabBox.scrollLeft -= e.movementX;
//         }
//     };
//     function mouseDown() {
//         console.log("moving orignal")
//         isDragging = true;
//     }
//     function mouseUp() {
//         isDragging = false
//     }

//     // mobile functions
//     function mouseMovesForMobile(e: any) {
//         if (!isDragging) return;
//         if (tabBox) {
//             var currentX = e.touches[0].clientX;
//             var movementX = currentX - initialX;
//             tabBox.scrollLeft -= movementX / 4;
//         }
//     };
//     function mouseDownForMobile(e: any) {
//         isDragging = true;
//         initialX = e.touches[0].clientX;
//     };

// let dataToIterate = ProductData.slice(0,15);
//     return (
//       <>
//       <div className="1 text-center  border space-y-3 mb-10">
//       <p className="text-blue-800 text-sm font-bold ">Promtions</p>
//       <h3 className="text-3xl font-bold ">Our Promotions Events</h3>
//     </div>
//      <div
//             onMouseMove={mouseMoves}
//             onMouseDown={mouseDown}
//             onMouseUp={mouseUp}
//             className="select-none flex gap-4 overflow-y-hidden overflow-x-hidden scrollGrab"
//             onTouchMove={mouseMovesForMobile}
//             onTouchStart={mouseDownForMobile}
//             onTouchEnd={mouseUp}
//         >
//             {dataToIterate.map((item: oneProductType, index: number) => (
//                 <Card key={index + 4} singleProductData={item} />
//             ))}
//         </div>
//         </>
//     )
// }

// export default ProductCarousal

//////////////////////////////////////////////
const ProductCarousal:FC<{MyProductData : Array<oneProductType>}> = ({MyProductData}) => {
    let dataToIterate = MyProductData.slice(0,15);
    // console.log(ProductData)
  return (
     <>   
     <div className="1 text-center  border space-y-3">
      <p className="text-blue-800 text-sm font-bold ">Promtions</p>
      <h3 className="text-3xl font-bold ">Our Promotions Events</h3>
    </div>
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      navigation
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 3,
        },
      }}
      className=" mt-20 "
    >
      {dataToIterate.map((item:oneProductType, index:number) => (
        <SwiperSlide key={index}>
          <Card singleProductData={item}/>
        </SwiperSlide>
      ))}
    </Swiper>
    </>
 
  );
};

export default ProductCarousal;