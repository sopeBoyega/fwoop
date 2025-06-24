"use client";
import { inter } from "@/app/fonts/fonts";
import { LucideMenuSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface navLinksObj {
  name: string;
  url: string;
}

interface HeaderProps {
  navLinks: navLinksObj[];
}

const Header = ({ navLinks }: HeaderProps) => {
  const [sidebarState, setSidebarState] = useState<boolean>(false);

  return (
    <div>

         
  {/* Mobile Menu Icon */}
  <button
    className="fixed top-5 right-5 z-[1100] md:hidden bg-[#047F40] p-3 rounded-full shadow-lg text-white"
    onClick={() => setSidebarState(true)}
  >
    <LucideMenuSquare color="white" width={30}  />
  </button>

  {/* Sidebar */}
  {sidebarState && (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 z-[1000] md:hidden"
      onClick={() => setSidebarState(false)}
    >
      <div
        className="h-full w-[75%] bg-gradient-to-b from-green-100 to-green-200 shadow-xl rounded-l-3xl p-5 flex flex-col z-50"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <Image src="/logo.jpg" width={40} height={36.67} alt="Logo" />
          <button
            className="text-xl font-semibold text-gray-700 hover:text-red-500 transition"
            onClick={() => setSidebarState(false)}
          >
            &times;
          </button>
        </div>

        <nav className="flex flex-col gap-4">
          {navLinks.map((item, key) => (
            <Link
              key={key}
              href={item.url}
              className="bg-white hover:bg-green-300 hover:text-white text-[#047F40] px-4 py-3 rounded-lg shadow-md font-medium transition duration-300"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )}



      <div className=" w-full p-2 flex  items-center justify-around bg-transparent z-50 ">
        <div className="rounded-[9px]">
          <Image
            src="/logo.jpg"
            width={120}
            height={10}
            alt="Fwoop Logo"
            className=""
          />
        </div>

        <div
          className={`hidden sm:flex ${inter.className} gap-x-3 w-[50%] justify-around items-center bg-[#0F3D2E] p-3 rounded-full`}
        >
          {navLinks.map((link, index) => (
            <Link
              href={link.url}
              key={index}
              className="text-[17px] hover:text-[#047F40] hover:text-[20px] transition-all duration-500 ease-in-out"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
