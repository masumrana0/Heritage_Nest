"use client";
import React from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import property1 from "/public/assests/propertyDetail/Frame 134.png";
import property2 from "/public/assests/propertyDetail/Frame 135.png";
import property3 from "/public/assests/propertyDetail/Frame 138.png";
import property4 from "/public/assests/propertyDetail/Frame 138.png";
import property5 from "/public/assests/propertyDetail/Frame 138.png";
import { IoLocationOutline } from "react-icons/io5";

const ProjectSwiper = () => {
  const swipercomponent = [
    property1,
    property2,
    property3,
    property4,
    property5,
  ];

  return (
    <Swiper
      spaceBetween={0}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },

        768: {
          slidesPerView: 2,
        },

        1024: {
          slidesPerView: 3,
        },
      }}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      navigation={true}
      freeMode={true}
      modules={[Pagination]}
      className="mySwiper"
    >
      {swipercomponent?.map((photo, index) => (
        <SwiperSlide key={index}>
          <div className="swiper-card">
            <div className="w-[25rem]  h-[25rem]   bg-gray-50  rounded-lg overflow-hidden ">
              <Image
                className="w-full  h-1/2 "
                src={photo}
                width="400"
                height="400"
                alt="contact us img"
              />
              <div className="px-4">
                <div className="flex items-center justify-between px-3 border-b-[3px] pb-2">
                  <h4 className=" mt-2  py-1 float-start rounded bg-blue-200 font-semibold">
                    Apartment
                  </h4>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-orange-500"></div>
                    <h4 className="font-bold"> Ready to Move</h4>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-2xl mt-4 mb-1">
                    SunnySlope Suites
                  </h3>
                  <span className="flex item-center gap-1 text-lg text-gray-700  ">
                    <IoLocationOutline className="text-orange-600" />{" "}
                    Meadowshire ParkGreenField, USA
                  </span>

                  <h3 className="font-bold text-3xl mt-5">$ 250000</h3>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectSwiper;
