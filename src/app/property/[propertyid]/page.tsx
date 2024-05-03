"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import PropertyAmenities from "@/components/ui/PropertyAmenities";
import banner1 from "/public/assests/propertyDetail/Frame 134.png";
import banner2 from "/public/assests/propertyDetail/Frame 135.png";
import banner4 from "/public/assests/propertyDetail/Frame 138.png";

// icons
import { FaBed, FaBath, FaBuilding, FaBatteryHalf } from "react-icons/fa";
import { MdBalcony } from "react-icons/md";
import ProjectSwiper from "@/components/ui/ProjectSwiper";
import Link from "next/link";
import OtherService from "@/components/ui/OtherService";

const PropertyDettailPage = () => {
  const [value, setValue] = useState(50); // Initial value of the slider

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="container mx-auto my-20 ">
      {/* section 1 heading */}
      <section>
        <div>
          <div className="flex gap-10 ">
            <h3 className="font-bold text-3xl">
              3 BHK Builder FLoor for Sale in Site Ram Bazar Hyderabad
            </h3>
            <h2 className="font-bold text-4xl ">$300K</h2>
          </div>
          <span className="flex item-center gap-1 text-lg text-gray-700  ">
            <IoLocationOutline className="text-orange-600" /> Meadowshire
            ParkGreenField, USA
          </span>
        </div>
      </section>

      <div className="w-[70rem] border-2 my-5  "></div>
      {/* section 2 */}
      <section className="flex gap-5">
        <div className="w-[70%]  ">
          {/* section 2  images*/}
          <section>
            <div>
              {/* upper photo */}
              <Image
                className="w-full h-[35rem]"
                src={banner1}
                width={300}
                height={300}
                alt="property banner or img"
              />

              <div className="flex items-center gap-5 mt-5">
                <Image
                  className="w-full"
                  src={banner2}
                  width={300}
                  height={300}
                  alt="property banner or img"
                />
                <Image
                  className="w-full"
                  src={banner4}
                  width={300}
                  height={300}
                  alt="property banner or img"
                />
                <Image
                  className="w-full"
                  src={banner4}
                  width={300}
                  height={300}
                  alt="property banner or img"
                />
              </div>
            </div>
          </section>

          {/* section 3 overview */}
          <section className="  bg-gray-200  my-10 p-10">
            <h3 className="font-bold text-3xl">Overview</h3>
            {/* badroom bathroom and balcony furnished  */}
            <div className="h-10 w-full flex justify-evenly bg-white   shadow-xl  shadow-gray-400 mt-20 ">
              <div className="flex gap-3 items-center">
                <FaBed />
                <h3 className="font-semibold">2 Beds</h3>
              </div>

              <div className="flex gap-3 items-center">
                <FaBath />
                <h3 className="font-semibold">2 Bath</h3>
              </div>

              <div className="flex gap-3 items-center">
                <MdBalcony />
                <h3 className="font-semibold">2 Balcony</h3>
              </div>
              <div className="flex gap-3 items-center">
                <FaBuilding />
                <h3 className="font-semibold">Fully Furnished</h3>
              </div>
            </div>

            {/* property basic */}
            <div className="mt-10 flex  justify-between">
              <div>
                <h4 className="text-sm text-gray-500">Carpet Area</h4>
                <h3 className="font-bold">2000 sqft</h3>
                <h4 className="text-sm text-gray-500">$225/sqft</h4>
              </div>
              <div>
                <h4 className="text-sm text-gray-500">Carpet Area</h4>
                <h3 className="font-bold">Second (Out of 6th floor)</h3>
              </div>

              <div>
                <h4 className="text-sm text-gray-500">Carpet Area</h4>
                <h3 className="font-bold">Ready to move</h3>
              </div>
              <div>
                <h4 className="text-sm text-gray-500">Lift</h4>
                <h3 className="font-bold">1</h3>
              </div>
            </div>

            <div className="mt-10 flex  justify-between">
              <div>
                <h4 className="text-sm text-gray-500">Facing</h4>
                <h3 className="font-bold">North - East</h3>
              </div>
              <div>
                <h4 className="text-sm text-gray-500">Additional Rooms</h4>
                <h3 className="font-bold">1 Servant room & 1 gust room</h3>
              </div>

              <div>
                <h4 className="text-sm text-gray-500">Age of construction</h4>
                <h3 className="font-bold">New Construction</h3>
              </div>
              <div>
                <h4 className="text-sm text-gray-500"> </h4>
                <h3 className="font-bold"></h3>
              </div>
            </div>
          </section>
        </div>

        <div className="w-[30%]">
          <div className="p-5 bg-blue-100 rounded flex flex-col gap-5 py-6">
            <div>
              <p className="text-gray-600 text-sm">Property Value</p>
              <h3 className="font-bold text-2xl">$ 300k - $ 310k</h3>
            </div>
            <p className="font-bold text-gray-800">
              Your bid can not be then 10% of the property Minimum value.
            </p>

            <div>
              <h4 className="font-semibold">Min</h4>
              <div className="w-full py-2 bg-white text-md">
                <p className="ml-6">$280k</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold">Max</h4>
              <div className="w-full py-2 bg-white text-md">
                <p className="ml-6">${value}K</p>
              </div>
            </div>

            <div className="w-64 mx-auto mt-8">
              <input
                type="range"
                min="280"
                max="305"
                style={{ backgroundColor: "#FFA500" }}
                value={value}
                onChange={handleChange}
                className="  appearance-none bg-gray-200 h-4 w-full rounded-full outline-none"
              />
              <div className="flex justify-between mt-2">
                <span className="text-xs font-semibold">$280K</span>
                <span className="text-xs font-semibold">$305K</span>
              </div>
              <div className="flex justify-center mt-2">
                <span className="text-sm font-semibold">${value}K</span>
              </div>
              <div className="flex justify-center ">
                <button className="font-semibold border bg-blue-400 text-white px-3 py-2 mt-5">
                  Bid Property
                </button>
              </div>
            </div>
          </div>

          {/* google map */}
          <div className="mt-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.4859876677547!2d90.42418197589741!3d23.765702488187678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c754583dd209%3A0xdd0c5fcc7d2d3836!2sbdCalling%20IT%20Ltd.%20-%20Corporate%20Office!5e0!3m2!1sen!2sbd!4v1714719430676!5m2!1sen!2sbd"
              style={{ border: "0" }}
              width="100%"
              height="670"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* section 3 aminities */}
      <section>
        <PropertyAmenities />
      </section>

      {/* section 4 */}
      <section>
        <OtherService />
      </section>

      {/* section 5 */}
      <section className="w-full mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-4xl py-10">Others Nearby Properties</h2>
          <div className="mr-20">
            <Link href="/property/123" className="pr-10 text-blue-600">
              see all properties
            </Link>
          </div>
        </div>
        <ProjectSwiper />
      </section>
    </div>
  );
};

export default PropertyDettailPage;
