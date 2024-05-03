import React from "react";
import banner from "/public/assests/about/about-banner.png";
import Image from "next/image";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import dremhome from "/public/assests/about/hand-home.png";
import handShake from "/public/assests/about/handShake.png";
import banner1 from "/public/assests/about/img.png";
import people1 from "/public/assests/about/people-1.png";
import people2 from "/public/assests/about/people-2.png";
import people3 from "/public/assests/about/people-3.png";
import TestimonialsSection from "@/components/ui/TestmunialSwiper";

const AboutPage = () => {
  return (
    <div>
      <div className="w-full">
        <Image
          className="w-full"
          src={banner}
          width={1000}
          height={200}
          alt="about banner"
        />
      </div>

      <div className="container mx-auto my-20 flex flex-col gap-10">
        {/* section 1 */}
        <section className="flex gap-10 items-center">
          <div className="w-[20rem] h-[13rem] border bg-orange-100 p-5 flex flex-col justify-between ">
            <div>
              <h3 className="font-bold text-orange-500 text-3xl">2K+</h3>
              <p className="font-semibold text-xl">New Flat Listed</p>
            </div>
            <div className="flex justify-between items-center">
              <a href="/about" className="text-orange-400 underline text-lg">
                View all
              </a>
              <span className="text-4xl text-orange-400">
                <MdOutlineDownloadForOffline />
              </span>
            </div>
          </div>

          <div className="w-[20rem] h-[13rem] border bg-blue-100 p-5 flex flex-col justify-between ">
            <div>
              <h3 className="font-bold text-blue-500 text-3xl">2K+</h3>
              <p className="font-semibold text-xl">New Flat Listed</p>
            </div>
            <div className="flex justify-between items-center">
              <a href="/about" className="text-blue-400 underline text-lg">
                View all
              </a>
              <span className="text-4xl text-blue-400">
                <MdOutlineDownloadForOffline />
              </span>
            </div>
          </div>
          <div className="w-[20rem] h-[13rem] border bg-orange-100 p-5 flex flex-col justify-between ">
            <div>
              <h3 className="font-bold text-orange-500 text-3xl">2K+</h3>
              <p className="font-semibold text-xl">New Flat Listed</p>
            </div>
            <div className="flex justify-between items-center">
              <a href="/about" className="text-orange-400 underline text-lg">
                View all
              </a>
              <span className="text-4xl text-orange-400">
                <MdOutlineDownloadForOffline />
              </span>
            </div>
          </div>

          <div className="w-[20rem] h-[13rem] border bg-blue-100 p-5 flex flex-col justify-between ">
            <div>
              <h3 className="font-bold text-blue-500 text-3xl">2K+</h3>
              <p className="font-semibold text-xl">New Flat Listed</p>
            </div>
            <div className="flex justify-between items-center">
              <a href="/about" className="text-blue-400 underline text-lg">
                View all
              </a>
              <span className="text-4xl text-blue-400">
                <MdOutlineDownloadForOffline />
              </span>
            </div>
          </div>
        </section>

        {/* section 2 */}
        <section className="relative w-[90%] my-20  h-[35rem]  mx-auto  ">
          <div className="w-[75%] h-[80%]  ">
            <Image
              className="h-full w-full"
              src={dremhome}
              width={500}
              height={500}
              alt="dream home"
            />
          </div>

          <div className=" p-5 w-[35rem]   flex flex-col gap-3 absolute top-[20rem] right-[0rem] bg-blue-100">
            <div className="flex gap-3 items-center">
              <div className="w-12 h-1 bg-orange-400"></div>
              <span className="text-orange-400 font-semibold text-lg">
                Our story
              </span>
            </div>
            <h3 className="font-bold text-4xl">
              Efficient and Transparaent Home Buying Solution
            </h3>
            <p className="text-gray-400">
              In the symphoney of bustiling markets and serene landscapes,
              Heritage-Nest was born a vision to
            </p>
          </div>
        </section>

        {/* section 3 */}
        <section className="relative w-[90%] my-20  h-[35rem]  mx-auto  ">
          <div className=" p-5 w-[35rem]   flex flex-col gap-3 absolute top-[20rem] left-[0rem] bg-blue-100">
            <div className="flex gap-3 items-center">
              <div className="w-12 h-1 bg-orange-400"></div>
              <span className="text-orange-400 font-semibold text-lg">
                Mission Statement
              </span>
            </div>
            <h3 className="font-bold text-4xl">
              Efficient and Transparaent Home Buying Solution
            </h3>
            <p className="text-gray-400">
              To bridge the miles with smiles, Heritage-Nest pledges to be the
              golden thead connecting NRIs to their Homeland, thourgh trust,
              transparency, and tailored real estate solutions.
            </p>
          </div>
          <div className="w-[75%] h-[80%]  float-end ">
            <Image
              className="h-full w-full"
              src={handShake}
              width={500}
              height={500}
              alt="dream home"
            />
          </div>
        </section>

        {/* section 4 */}
        <section className="mx-auto w-[90%]">
          <div className="flex items-center gap-3">
            <div className="w-[4rem] h-1 bg-orange-500"></div>
            <h2 className="text-orange-500 font-bold">Our Team</h2>
          </div>
          <h2 className="text-5xl mb-10 font-bold">
            Discover the Faces Behin Our Success
          </h2>
          <div className="flex items-center gap-5">
            <Image src={people1} width={400} height={500} alt="team member" />
            <Image src={people2} width={400} height={500} alt="team member" />
            <Image src={people3} width={400} height={500} alt="team member" />
          </div>
        </section>

        {/* section 5 */}
        <section className="flex w-[80%] mx-auto my-20">
          <div className="flex flex-col justify-between w-[60%]">
            <div className="flex items-center  gap-4">
              <div className="w-20 h-1 bg-orange-500"></div>
              <h2 className="font-bold text-orange-500  ">
                Meet the Team For Book Consultantion
              </h2>
            </div>
            <h3 className="text-5xl  font-bold">
              Meet the stewards of your heritage journey
            </h3>
            <p className="text-gray-500">
              each member an embodiment of expertise and warmth, dedicated to
              guiding you home , every step of way.
            </p>
            <button className="w-[13rem]  px-1 p-2 bg-blue-600  text-white  ">
              Book Consultation Now
            </button>
          </div>

          <div className=" w-[40%]  float-end ">
            <Image
              className="h-[20rem] w-full"
              src={banner1}
              width={500}
              height={300}
              alt="dream home"
            />
          </div>
        </section>

        {/* section 6 */}
        <div className="w-[80rem]   mx-auto my-20">
          <h3 className="font-bold text-5xl text-center my-16 ">
            Testimonials
          </h3>
          <TestimonialsSection />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
