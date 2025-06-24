"use client";
import Image from "next/image";
import QuickStats from "./components/stats";
import SponsorsSection from "./components/sponsors";
import ImpactStats from "./components/impact";
import {
  LucideBookOpenText,
  LucideGlasses,
  LucideLeafyGreen,
  LucideMenuSquare,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [sidebarState, setSidebarState] = useState<boolean>(false);

  const navLinks = [
    { name: "About", url: "/" },
    { name: "Gallery", url: "/gallery" },
    { name: "Journal Camp", url: "/journalCamp" },
    { name: "Blog", url: "/blog" },
  ];
  return (
    <>
      <button
        className="fixed top-5 right-5 z-[1100] md:hidden bg-[#047F40] p-2 rounded-full shadow-lg text-white"
        onClick={() => setSidebarState(true)}
      >
        <LucideMenuSquare color="white" width={30}  />
      </button>
      {sidebarState && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-60 z-[1000]"
          onClick={() => setSidebarState(false)}
        >
          <div
            className="h-full w-[75%] bg-gradient-to-b from-green-100 to-green-200 shadow-xl rounded-l-3xl p-5 flex flex-col z-50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <Image src="/Logo.svg" width={40} height={36.67} alt="Logo" />
              <button
                className="text-xl font-semibold text-gray-700 hover:text-red-500 transition"
                onClick={() => setSidebarState(false)}
              >
                &times;
              </button>
            </div>

            {/* Nav Links */}
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

      <section
  id="hero"
  className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
>
  {/* Fullscreen Background Image */}
  <Image
    src="/fwoopImg.jpg"
    alt="plant waste"
    fill
    priority
    className="object-cover object-center z-0"
  />

  {/* Optional Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-30 z-10" />

  {/* Centered Content */}
  <div className="z-20 px-6 md:px-16 py-16 text-white max-w-4xl flex flex-col items-center text-center space-y-6">
    <h1 className="font-extrabold text-5xl md:text-6xl leading-tight">
      FWOOP
      <span className="block text-lg md:text-2xl font-medium text-green-100 mt-2">
        Food Waste Optimization Outreach Project
      </span>
    </h1>
    <p className="text-lg md:text-xl">
      Reviving Waste — Powering the Planet.
    </p>
    <p className="text-md md:text-lg">
      A practical solution for a global food waste crisis.
    </p>
    <Link href="/journalCamp">
      <button className="mt-4 px-6 py-3 bg-[#047F40] hover:bg-green-800 text-white rounded-xl shadow-lg transition duration-300">
        Join the Movement
      </button>
    </Link>
  </div>
</section>


      {/* INFO BLOCKS */}
      <section id="info" className="w-full py-16 px-6 bg-green-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 justify-between text-center text-[#047F40]">
          {/* ABOUT */}
          <div className="flex-1 space-y-3">
            <p className="text-xl font-bold">ABOUT</p>
            <LucideBookOpenText className="mx-auto" />
            <p className="text-sm">
              Fwoop is a community-driven initiative designed to educate
              Nigerians about food sustainability and empower them with
              practical strategies to minimize food waste in their daily lives.
            </p>
          </div>

          {/* VISION */}
          <div className="flex-1 space-y-3">
            <p className="text-xl font-bold">OUR VISION</p>
            <LucideGlasses className="mx-auto" />
            <p className="text-sm">
              A Nigeria where healthy, sustainable food practices are woven into
              the fabric of our communities, preserving our rich culinary
              traditions and nurturing a healthier future for generations to
              come.
            </p>
          </div>

          {/* MISSION */}
          <div className="flex-1 space-y-3 scale-105">
            <p className="text-xl font-bold">OUR MISSION</p>
            <LucideLeafyGreen className="mx-auto" />
            <p className="text-sm">
              To educate, empower and engage Nigerian communities in waste
              management and sustainable practices.
            </p>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="w-full py-[5rem] px-6 bg-[#1A1A1A]">
        <div className="max-w-3xl mx-auto text-center text-[#B0B0B0]">
          <p className="text-xl md:text-2xl italic leading-relaxed">
            “Cutting food waste is a delicious way of saving money, helping to
            feed the world & protect the planet.”
          </p>
          <p className="mt-2 text-sm">– Tristram Stuart</p>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="py-16 px-6 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <QuickStats />
        </div>
      </section>

      {/* SPONSORS */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SponsorsSection />
        </div>
      </section>

      {/* IMPACT */}
      <section className="py-16 px-6 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <ImpactStats />
        </div>
      </section>
    </>
  );
}
