import React from "react";
import Image from "next/image";

const ProductType = () => (
  <div className="parent py-16 px-2 space-y-10">
    <div className="1 text-center  border space-y-3">
      <p className="text-blue-800 text-sm font-bold ">Promtions</p>
      <h3 className="text-3xl font-bold ">Our Promotions Events</h3>
    </div>
    {/* Grid */}
    <div className="2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-4 md:px-8 text-gray-800">
      {/* first Grid */}
      <div className="first  w-full col-span-1 md:col-span-2 bg-cat1 px-12 flex md:flex-row flex-col items-center justify-between">
        <div className="first-child1 max-w-[13rem] py-8">
          <h4 className="md:text-3xl text-4xl font-bold">GET UP TO 60%</h4>
          <p className="text-xl">FOR THE SUMMER SEASON</p>
        </div>
        
        <div className="first-child2 w-64">
          <Image
            alt="summer season"
            src={
              "https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent1.6f776995.png&w=384&q=75"
            }
            width={1000}
            height={1000}
          />
        </div>
      </div>
      {/* Grid 2 */}
      <div className=" third h-full w-full  row-span-1 md:row-span-2 bg-cat3 flex flex-col items-center ">
        <div className="thirdchild1 p-4">
          <p className="font-medium">Flex SweatShirt</p>
          <p>
            <del>$100.00</del>
            &nbsp;&nbsp;&nbsp;
            <b className="text-lg"> $75.00</b>
          </p>
        </div>
        <div className="thirdchild2 w-64 ">
          <Image
            height={1000}
            width={1000}
            alt="sweaters"
            src={
              "https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent2.b5f201ac.png&w=384&q=75"
            }
          />
        </div>
      </div>
      <div className=" fourth h-full w-full  row-span-1 md:row-span-2 bg-cat4 flex flex-col items-center ">
        <div className="fourthchild1 p-4 ">
          <p className="font-medium">Flex Push Button Bomber</p>
          <p>
            <del>$225.00</del>
            &nbsp;&nbsp;&nbsp;
            <b className="text-lg"> $190.00</b>
          </p>
        </div>
        <div className="fourthchild2 w-64 ">
          <Image
            height={1000}
            width={1000}
            alt="sweaters"
            src={
              "https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent3.798fa92b.png&w=384&q=75"
            }
          />
        </div>
      </div>
      <div className=" secound  space-y-3 py-10 w-full  col-span-1 md:col-span-2 bg-cat2 flex flex-col justify-center items-center text-white">
        <h3 className="font-extrabold md:text-4xl text-3xl ">GET 30% Off</h3>

        <p>USE PROMO CODE</p>
        <button area-aria-label="Redirect user to Dine Week End Sale" className="py-2 md:px-14 px-8 bg-[#343a41] rounded-2xl tracking-widest md:text-lg">
          DINEWEEKENDSALE
        </button>
      </div>
    </div>
  </div>
);

export default ProductType;
