import Image from "next/image";
import React from "react";
import { SlMagnifier } from "react-icons/sl";
import banner from "/public/assests/about/hand-home.png";
import Link from "next/link";

const HomeHeader = () => {
  return (
    <div className=" relative lg:h-[700px] w-full  text-sm md:text-lg lg:text-xl xl:text-xl">
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
      <Image
        src={banner}
        width={1000}
        height={1000}
        className="w-full h-full object-cover"
        alt="banner img"
      />

      {/* text  */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="text-white text-center">
          <p className="mb-20 text-gray-300 text-md">
            Seamlessly connecting you to the heartbeat of india&apos;s prime
            properties.
          </p>
          <h1 className="text-[5rem]    font-bold">
            Your Portal to India&apos;s Exquisite
          </h1>
          <h1 className="text-[5rem] mt-14   font-bold">Real Estate</h1>

          <Link href={"/"} className=" ">
            <div className="bg-blue-700 w-[17rem] mx-auto rounded ">
              <h3 className="flex justify-center font-semibold text-3xl items-center gap-1 p-3 mt-20">
                {" "}
                <span className="font-bold ">
                  <SlMagnifier />
                </span>{" "}
                Find property{" "}
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
