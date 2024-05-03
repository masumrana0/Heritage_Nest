import Link from "next/link";
import React from "react";
import logo from "/public/logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-gray-200  px-52 flex  justify-between">
      <div className="flex items-center gap-20">
        <Link
          className="font-semibold text-xl hover:text-blue-700"
          href="/findproperty"
        >
          Buy
        </Link>
        <Link
          className="font-semibold text-xl hover:text-blue-700"
          href="/findproperty"
        >
          Sell
        </Link>
        <Link
          className="font-semibold text-xl hover:text-blue-700"
          href="/findproperty"
        >
          Services
        </Link>
        <Link
          className="font-semibold text-xl hover:text-blue-700"
          href="/about"
        >
          About
        </Link>
      </div>
      <div>
        <Image src={logo} width={70} height={40} alt="company logo" />
      </div>
      <div className="flex items-center gap-20">
        <Link
          className="font-semibold text-xl hover:text-blue-700"
          href="/findproperty"
        >
          Manage Rentals
        </Link>
        <Link
          className="font-semibold text-xl hover:text-blue-700"
          href="/auth"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
