/**
 * Title: 'findproperty page define by Masum Rana'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 03-05-2024
 *
*/

import Image from "next/image";
import React from "react";
import banner from "/public/assests/propertyDetail/findproperty.jpg";
import { HiOutlineSearch } from "react-icons/hi";
import { MdOutlineLocationOn } from "react-icons/md";
import { TbCoinBitcoin, TbHomeSearch } from "react-icons/tb";
import { TfiAngleDown } from "react-icons/tfi";
import Link from "next/link";
import Details from "@/components/ui/Details";
import ProjectSwiper from "@/components/ui/ProjectSwiper";
import TestimonialsSection from "@/components/ui/TestmunialSwiper";

const FindPropertyPage = () => {
  return (
    <div>
      {/* section 1 */}
      <section className="w-full   relative">
        <div className="absolute top-[16rem] left-0 h-full w-full flex items-center justify-center">
          <div className="w-[70vw] max-w-[1000px] drop-shadow-xl rounded-md bg-white h-auto p-6 space-y-10 z-10">
            {/* Buttons */}
            <div className="w-full flex items-center gap-x-6 relative">
              <div className="w-full border-t-2 border-[#ECF5FF] absolute bottom-0 left-0"></div>
              <button className="relative pb-1 border-[#0059B1] text-[#0059B1] border-b-2 border-transparent">
                Blue
              </button>
              <button className="relative pb-1 focus:border-[#0059B1] focus:text-[#0059B1] border-b-2 border-transparent">
                Rent
              </button>
              <button className="relative pb-1 focus:border-[#0059B1] focus:text-[#0059B1] border-b-2 border-transparent">
                PG
              </button>
              <button className="relative pb-1 focus:border-[#0059B1] focus:text-[#0059B1] border-b-2 border-transparent">
                Commercial
              </button>
            </div>
            {/* SearchBar */}
            <div className="w-full h-10 focus-within:border-gray-500 duration-200 px-2 gap-x-2 rounded border flex items-center text-gray-800 font-light">
              <HiOutlineSearch />
              <input
                type="text"
                placeholder="Search Properties"
                className="flex-1 h-full outline-none"
              />
            </div>

            {/* Dropdown Card */}
            <div className="w-full grid grid-cols-3 gap-x-5">
              <div className="w-full flex flex-col items-start gap-y-1 font-medium text-lg">
                <p className="flex items-center gap-x-2  ">
                  <MdOutlineLocationOn className="text-orange-500" />
                  <span>Your Location</span>
                </p>
                <button className="flex items-center px-4 h-12 justify-end w-full rounded text-orange-500 bg-[#ECF5FF]">
                  <TfiAngleDown />
                </button>
              </div>
              <div className="w-full flex flex-col items-start gap-y-1 font-medium text-lg">
                <p className="flex items-center gap-x-2  ">
                  <TbHomeSearch className="text-orange-500" />
                  <span>Property Type</span>
                </p>
                <button className="flex items-center px-4 h-12 justify-end w-full rounded text-orange-500 bg-[#ECF5FF]">
                  <TfiAngleDown />
                </button>
              </div>
              <div className="w-full flex flex-col items-start gap-y-1 font-medium text-lg">
                <p className="flex items-center gap-x-2  ">
                  <TbCoinBitcoin className="text-orange-500" />
                  <span>Budget</span>
                </p>
                <button className="flex items-center px-4 h-12 justify-end w-full rounded text-orange-500 bg-[#ECF5FF]"></button>
              </div>
            </div>
            {/* search button  */}
            <Link href={"/property"}>
              <div
                className="w-ful h-12 flex items-center justify-center gap-x-3 bg-[#0059B1] text-white rounded
          "
              >
                <HiOutlineSearch />
                <span>Find Properties</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full relative h-1/2 overflow-hidden">
          <div className="w-full absolute top-0 left-0 h-full bg-black opacity-20 "></div>
          <Image
            src={banner}
            width={400}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-1/2 bg-white"></div>
      </section>

      {/* section 2 */}
      <div className="container mx-auto flex flex-col gap-20 my-52">
        <section>
          <Details />
        </section>
        {/* section 3 */}
        <section>
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-4xl py-10">Popular Properties</h2>
            <div className="mr-20">
              <Link href="/property/123" className="pr-10 text-blue-600">
                see all properties
              </Link>
            </div>
          </div>
          <ProjectSwiper />
        </section>

        {/* section 4 */}
        <section>
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-4xl py-10">New Listed Properties</h2>
            <div className="mr-20">
              <Link href="/property/123" className="pr-10 text-blue-600">
                see all properties
              </Link>
            </div>
          </div>
          <ProjectSwiper />
        </section>

        {/* section 5 */}
        <section>
          <h3 className="font-bold text-5xl text-center my-16 ">
            Testimonials
          </h3>
          <TestimonialsSection />
        </section>
      </div>
      <section className="bg-orange-200 w-full p-10 py-20 my-20">
        <div className="container mx-auto flex justify-between ">
          <div>
            <h3 className="text-4xl font-bold">Post your Property for free</h3>
            <p className="text-lg mt-2 text-gray-600  ">
              List it on Your propriety and get genuine leads
            </p>
          </div>
          <div>
            <button className="p-3 px-5 text-xl rounded-lg text-white font-bold bg-orange-500">
              Post Property
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FindPropertyPage;
