/**
 * Title: 'authentication page define by Masum Rana'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 03-05-2024
 *
 */

"use client";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { changeAuthState } from "@/Redux/Slices/authSlice";
import Image from "next/image";
import welcome from "/public/assests/about/hand-home.png";
import LoginForm from "@/components/auth/Login";
import RegisterForm from "@/components/auth/Register";

const Auth = () => {
  const dispatch = useAppDispatch();
  const isRegisterModalOpen = useAppSelector(
    (state) => state.authSlice.authState
  );

  return (
    <div className={`min-h-screen  `}>
      <div className="flex justify-center flex-wrap lg:gap-10 items-center mt-72  ">
        {/* welcome text */}
        <div>
          <span className="lg:text-8xl text-2xl font-bold">
            <h2 className="text-center">WelCome To </h2>
            <h2 className="text-orange-500 text-6xl py-3 px-1 rounded-md bg-opacity-80 text-center lg:text-left">
              Heritage Nest!
            </h2>
            <div>
              <Image
                src={welcome}
                width={600}
                height={600}
                alt="Picture of Welcoming"
              />
            </div>
          </span>
          <p className="font-semibold text-xl mt-5">Let's Buy your Dream</p>
        </div>

        <div className="lg:w-1/4 w-full m-4 lg:m-0">
          <LoginForm />
        </div>
      </div>
      <div className="w-full">
        {isRegisterModalOpen && (
          <div className="w-full fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <RegisterForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
