import Image from "next/image";
import React from "react";
import banner1 from "/public/assests/Home/oneinto.png";
import banner2 from "/public/assests/Home/2photo.png";
import HomeHeader from "@/components/ui/HomeHeader";

// icons
import { FaMagnifyingGlass } from "react-icons/fa6";
import Link from "next/link";
import OtherService from "@/components/ui/OtherService";
const HomePage = () => {
  return (
    <div>
      {/* sectoin 1 */}
      <section>
        <HomeHeader />
      </section>

      {/* section 2 */}
      <section className="container mx-auto my-20">
        <div className="flex gap-5  w-full">
          <div className="w-1/2">
            <Image src={banner1} width={700} height={700} alt="banner" />
          </div>
          <div className="w-1/2">
            <h5 className="text-orange-700 text-lg mb-5">Property Buying</h5>
            <h2 className="font-bold text-6xl">
              Efficient and Transparent Home Buying Solutions
            </h2>
            <p className="mt-10 text-2xl">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at it&#39;s layout
            </p>

            <Link href={"/findproperty"}>
              <button className="flex text-3xl border py-3 px-5 mt-5 text-blue-500 bg-gray-50 rounded-lg gap-3">
                <FaMagnifyingGlass /> Find Property
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* section 3 */}
      <section className="container mx-auto my-32">
        <div className="flex gap-5  w-full">
          <div className="w-1/2">
            <h5 className="text-orange-700 text-lg mb-5">Property Buying</h5>
            <h2 className="font-bold text-6xl">
              Efficient and Transparent Home Buying Solutions
            </h2>
            <p className="mt-10 text-2xl">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at it&#39;s layout
            </p>

            <Link href={"/findproperty"}>
              <button className="flex text-3xl border py-3 px-5 mt-5 text-blue-500 bg-gray-50 rounded-lg gap-2">
                <FaMagnifyingGlass /> Find Property
              </button>
            </Link>
          </div>

          <div className="w-1/2">
            <Image src={banner2} width={700} height={700} alt="banner" />
          </div>
        </div>
      </section>

      {/* section 4 */}
      <section>
        <OtherService />
      </section>
    </div>
  );
};

export default HomePage;
