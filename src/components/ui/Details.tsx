import React from "react";
import { MdOutlineDownloadForOffline } from "react-icons/md";

const Details = () => {
  return (
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
  );
};

export default Details;
