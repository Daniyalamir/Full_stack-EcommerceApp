"use client";
import { FC, useState } from "react";
import { oneProductType } from "../../utils/ProductsDataArrayAndType";
import { imagesType } from "@/app/components/utils/ProductsDataArrayAndType";
import { client } from "../../../../../sanity/lib/client";
// import { SanityClient } from "sanity";
import Image from "next/image";
import ImageUrlBuilder from "@sanity/image-url";
import { BsCart2 } from "react-icons/bs";
const builder: any = ImageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

const ProductDetail: FC<{ item: oneProductType }> = ({ item }) => {
  const [imageForPreviewOfSelected, setimageForPreviewOfSelected] =
    useState<string>(item.image[0]._key);
  const [Quantity, setQuantity] = useState(1);
  function incrementThEQuantity() {
    setQuantity(Quantity + 1);
  }
  function decrementThEQuantity() {
    if (Quantity != 0) {
      setQuantity(Quantity - 1);
    }
    // same above logic
    // if(Quantity == 0){

    // }else{

    //   setQuantity(Quantity - 1);
    // }
  }

  /* console.log(item.image)*/
  // console.log("key : ", imageForPreviewOfSelected);

  return (
    <div className="parent flex  lg:flex-row flex-col justify-center items-center mt-10">
      {/* Main left side */}
      <div className="left children1 flex gap-x-4 md:gap-x-20">
        {/* left part */}
        <div className="children1-subchild1 space-y-4">
          {item.image.map((subitem: imagesType, index: number) => (
            <div
              key={index}
              className="w-10 md:w-28"
              onClick={() => setimageForPreviewOfSelected(subitem._key)}
            >
              <Image
                width={1000}
                height={1000}
                src={urlFor(subitem).width(1000).height(1000).url()}
                alt={subitem.alt}
              />
            </div>
          ))}
        </div>
        {/* right part */}
        <div className="children1-subchild2 md:w-[35rem] w-[15rem] flex flex-wrap-0 ">
          {item.image.map((subItem: imagesType, index: number) => {
            if (subItem._key === imageForPreviewOfSelected) {
              return (
                <Image
                  key={index}
                  width={1000}
                  height={1000}
                  src={urlFor(subItem).width(1000).height(1000).url()}
                  alt={subItem.alt}
                />
              );
            }
          })}
        </div>
      </div>
      {/* Main right side */}
      <div className="right children2 p-10 space-y-5">
        <div className="children2-subchidl">
          <h1 className="md:text-3xl text-gray-700 md:font-semibold">
            {item.productName}
          </h1>
          <p className="text-pink-600/50 text-xl md:font-semibold">
            {item.productTypes[0]}
          </p>
        </div>
        <div className="children2-subchid2 space-y-5">
          <p className="text-lg font-semi-bold text-gray-700">Select size</p>
          <div className="MapCover flex gap-4 text-pink-600 text-sm md:text-lg">
            {item.size.map((subitem: string, index: number) => (
              <div
              key={index}
               className="font-semibold hover:ring ring-pink-300  rounded-full flex bg-gray-100  w-12 h-12 justify-center items-center hover:scale-105 duration-300 cursor-pointer ">
                {subitem}
              </div>
            ))}
          </div>
        </div>
        <div className="children2-subchid3 flex space-x-7">
          <p className="font-semibold text-xl text-gray-800">Quantity</p>
          <div className="QuatityCover flex gap-4 items-center text-xl">
            <div
              onClick={decrementThEQuantity}
              className="select-none text-pink-600 font-semibold hover:border border-black   rounded-full flex bg-gray-100  w-9 h-9 justify-center items-center hover:scale-105 duration-300 cursor-pointer "
            >
              -
            </div>
            <p className="  flex items-center justify-center">{Quantity}</p>
            <div
              onClick={incrementThEQuantity}
              className="select-none text-pink-600 font-semibold hover:border border-black  rounded-full flex bg-gray-100  w-9 h-9 justify-center items-center hover:scale-105 duration-300 cursor-pointer "
            >
              +
            </div>
          </div>
        </div>
        <div className="children2-subchid4 flex gap-x-7 items-cneter">
          <button
            type="submit"
            className="whitespace-nowrap bg-black  text-white py-1 px-3 rounded-md border-black flex items-center gap-x-3"
          >
            <BsCart2/>
            Add To Cart
          </button>
          <p className="text-2xl font-semibold">${item.price}.00</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
