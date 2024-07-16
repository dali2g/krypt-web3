"use client";
import React from "react";
import Image from "next/image";
import logo from "../images/images/logo.png";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const NavbarItem = ({title,classProps}: {title: string;classProps: string;}) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <Image
          src={logo}
          alt="logo"
          width={100}
          height={100}
          className=" cursor-pointer"
        />
      </div>
      <ul className="text-white md:flex hidden flex-row justify-between items-center ">
        {["Market", "Exchange", "Tutorials", "Wallet"].map((item, index) => (
          <NavbarItem key={index} title={item} classProps="text-white" />
        ))}
      </ul>
      <div className=" py-2 px-4 cursor-pointer hover:bg-blue-200 text-white hover:text-black rounded-full bg-[#2952e3]">
        Login
      </div>
      <div className="flex relative">
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <ul className="z-10 fixed top-0 -right-2 flex flex-col justify-start items-end rounded-md w-[70vw] h-screen shadow-2xl md:hidden list:none text-white blue-glassmorphism p-3">
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {["Market", "Exchange", "Tutorials", "Wallet"].map(
              (item, index) => (
                <NavbarItem
                  key={index}
                  title={item}
                  classProps="my-2 text-lg"
                />
              )
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
