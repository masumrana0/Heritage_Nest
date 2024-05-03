import Image from "next/image";
import React from "react";
import logo from "/public/logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex justify-around p-20 bg-gray-200 ">
      {/* logo */}
      <div className="w-[35rem]">
        <Image
          src={logo}
          width={70}
          height={40}
          alt="company logo"
          className="mb-5"
        />
        <p className="font-semibold text-2xl text-gray-600">
          Design amazing digityal experiences that created more happy in the
          world.
        </p>
      </div>
      {/* product */}
      <div>
        <h6 className="text-gray-500 mb-2 text-lg">Product</h6>
        <Link
          href={"/"}
          className="font-semibold text-xl hover:text-orange-400 mb-1 block"
        >
          Overview
        </Link>
        <Link
          href={"/"}
          className="font-semibold text-xl hover:text-orange-400 mb-1 block"
        >
          Features
        </Link>
        <Link
          href={"/"}
          className="font-semibold text-xl hover:text-orange-400 mb-1 block"
        >
          Solutions
        </Link>
        <Link
          href={"/"}
          className="font-semibold text-xl hover:text-orange-400 mb-1 block"
        >
          Features
        </Link>
        <Link
          href={"/"}
          className="font-semibold text-xl hover:text-orange-400 mb-1 block"
        >
          {" "}
          Tutorials{" "}
        </Link>
        <Link
          href={"/"}
          className="font-semibold text-xl hover:text-orange-400 mb-1 block"
        >
          {" "}
          Pricing{" "}
        </Link>
        <Link
          href={"/"}
          className="font-semibold text-xl hover:text-orange-400 mb-1 block"
        >
          {" "}
          releases{" "}
        </Link>
      </div>

      {/* company */}
      <div>
        <h6 className="text-gray-500 mb-2 text-lg">Company</h6>
        <Link
          href={"/about"}
          className="font-semibold text-xl hover:text-orange-400 mb-1 block"
        >
          About us
        </Link>
        <Link
          href={"/"}
          className="font-semibold text-xl hover:text-orange-400 mb-1 block"
        >
          Careers
        </Link>
        <Link
          href={"/"}
          className="font-semibold text-xl hover:text-orange-400 mb-1 block"
        >
          Press
        </Link>
        <Link
          href={"/"}
          className="font-semibold text-xl hover:text-orange-400 mb-1 block"
        >
          News
        </Link>
        <Link
          href={"/"}
          className="font-semibold text-xl hover:text-orange-400 mb-1 block"
        >
          {" "}
          Media Kit
        </Link>

        <Link
          href={"/"}
          className="font-semibold text-xl hover:text-orange-400 mb-1 block"
        >
          {" "}
          releases{" "}
        </Link>
        <Link
          href={"/"}
          className="font-semibold text-xl hover:text-orange-400 mb-1 block"
        >
          {" "}
          Contact
        </Link>
      </div>

      {/* resoures */}
      <div>
        <h6 className="text-gray-500 mb-2 text-lg">Resources</h6>
        <Link
          href={"/about"}
          className="font-semibold text-xl hover:text-orange-400 mb-1 block"
        >
          Blog
        </Link>
        <Link
          href={"/"}
          className="font-semibold text-xl hover:text-orange-400 mb-1 block"
        >
          Newsletter
        </Link>
        <Link
          href={"/"}
          className="font-semibold text-xl hover:text-orange-400 mb-1 block"
        >
          Events
        </Link>
        <Link
          href={"/"}
          className="font-semibold text-xl hover:text-orange-400 mb-1 block"
        >
          Help centre
        </Link>
        <Link
          href={"/"}
          className="font-semibold text-xl hover:text-orange-400 mb-1 block"
        >
          {" "}
          Totorials
        </Link>

        <Link
          href={"/"}
          className="font-semibold text-xl hover:text-orange-400 mb-1 block"
        >
          {" "}
          Support
        </Link>
        <Link
          href={"/"}
          className="font-semibold text-xl hover:text-orange-400 mb-1 block"
        >
          {" "}
          Contact
        </Link>
      </div>
      {/* Social */}
      <div>
        <h6 className="text-gray-500 mb-2 text-lg">Social</h6>
        <Link
          href={"/about"}
          className="font-semibold text-xl hover:text-orange-400 mb-1 block"
        >
          Twitter
        </Link>
        <Link
          href={"/"}
          className="font-semibold text-xl hover:text-orange-400 mb-1 block"
        >
          Linkedin
        </Link>
        <Link
          href={"/"}
          className="font-semibold text-xl hover:text-orange-400 mb-1 block"
        >
          Facebook
        </Link>
        <Link
          href={"/"}
          className="font-semibold text-xl hover:text-orange-400 mb-1 block"
        >
          Github
        </Link>
        <Link
          href={"/"}
          className="font-semibold text-xl hover:text-orange-400 mb-1 block"
        >
          {" "}
          AngelList
        </Link>

        <Link
          href={"/"}
          className="font-semibold text-xl hover:text-orange-400 mb-1 block"
        >
          {" "}
          Dribbble
        </Link>
      </div>
      {/* Social */}
      <div>
        <h6 className="text-gray-500 mb-2 text-lg">Legal</h6>
        <Link
          href={"/about"}
          className="font-semibold text-xl hover:text-orange-400 mb-1 block"
        >
          Terms
        </Link>
        <Link
          href={"/"}
          className="font-semibold text-xl hover:text-orange-400 mb-1 block"
        >
          Privacy
        </Link>
        <Link
          href={"/"}
          className="font-semibold text-xl hover:text-orange-400 mb-1 block"
        >
          Cookies
        </Link>
        <Link
          href={"/"}
          className="font-semibold text-xl hover:text-orange-400 mb-1 block"
        >
          Licenses
        </Link>
        <Link
          href={"/"}
          className="font-semibold text-xl hover:text-orange-400 mb-1 block"
        >
          {" "}
          settings
        </Link>

        <Link
          href={"/"}
          className="font-semibold text-xl hover:text-orange-400 mb-1 block"
        >
          {" "}
          Dribbble
        </Link>
      </div>
    </div>
  );
};

export default Footer;
