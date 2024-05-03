import React from "react";
import Image from "next/image";
import propertyImg from "/public/assests/property/Rectangle 20.png";
import { IoLocationOutline } from "react-icons/io5";
import areaImg from "/public/assests/property/Capa_1 (1).png";
import Link from "next/link";

const Propertycard = () => {
  return (
    <Link href={"/property/123"}>
      <section className=" flex items-center justify-center gap-3 w-[60rem] h-[15rem]   rounded overflow-hidden bg-slate-50  pr-1">
        {/* img part */}
        <div className="w-[25%]">
          <Image
            className="w-full"
            src={propertyImg}
            width={300}
            height={150}
            alt="Property img"
          />
        </div>
        <div>
          {/* upper part */}
          <div>
            <h3 className="font-bold text-gray-800 text-2xl">
              {" "}
              3 BHK Builder Floor for Sale in Site Ram Bazar New Delhi
            </h3>
            <span className="flex item-center gap-1 text-lg text-gray-700  ">
              <IoLocationOutline className="text-orange-600" /> Meadowshire
              ParkGreenField, USA
            </span>
          </div>
          <div className="flex justify-between  items-center mt-5">
            <h3 className="font-semibold">$ 300000</h3>
            <button className="border font-semibold px-2 py-1 rounded text-gray-700 hover:bg-orange-400 transition-colors duration-400 hover:text-white">
              Bid property
            </button>
          </div>

          {/* lower text part */}
          <div>
            <div className="flex items-center mt-2 ">
              <h3 className="text-md">Property details</h3>

              <div className="border-b-2 border-gray-400 w-[72%] gap-2  h-0.5"></div>
            </div>
          </div>

          <div className="flex items-center justify-around">
            {/* 1 */}
            <div className="flex  items-center border pr-2 gap-2  ">
              <div className="  bg-orange-600 p-1 rounded">
                <Image src={areaImg} width={25} alt="area" />
              </div>
              <div className="text-sm">
                <h2>Total Area</h2>
                <span className="text-slate-500">891sqft</span>
              </div>
            </div>

            {/* 2 */}
            <div className="flex  items-center border pr-2 gap-2  ">
              <div className="  bg-orange-600 p-1 rounded">
                <Image src={areaImg} width={25} alt="area" />
              </div>
              <div className="text-sm">
                <h2>Total Area</h2>
                <span className="text-slate-500">Ready to move</span>
              </div>
            </div>
            {/* 3 */}
            <div className="flex  items-center border pr-2 gap-2  ">
              <div className="  bg-orange-600 p-1 rounded">
                <Image src={areaImg} width={25} alt="area" />
              </div>
              <div className="text-sm">
                <h2>Total Area</h2>
                <span className="text-slate-500">891sqft</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
};

export default Propertycard;
