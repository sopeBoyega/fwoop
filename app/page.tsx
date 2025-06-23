import Image from "next/image";
import QuickStats from "./components/stats";
import SponsorsSection from "./components/sponsors";
import ImpactStats from "./components/impact";
import {
  LucideBookOpenText,
  LucideGlasses,
  LucideLeafyGreen,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        id="hero"
        className="relative w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-gradient-to-br from-green-50 via-white to-green-100 overflow-hidden"
      >
        {/* Decorative Background Blob */}
        <div className="absolute -top-10 -left-10 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

        {/* Text Block */}
        <div className="z-10 md:w-1/2 text-center md:text-left text-[#047F40] space-y-6 animate-fade-in-up">
          <h1 className="font-extrabold text-5xl md:text-6xl tracking-tight leading-tight">
            FWOOP
            <span className="block text-lg md:text-2xl font-medium text-green-800 mt-2">
              Food Waste Optimization Outreach Project
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Reviving Waste — Powering the Planet.
          </p>
          <p className="text-md md:text-lg text-gray-600">
            A practical solution for a global food waste crisis.
          </p>
          <div>
            <Link
            href="/journalCamp">
            <button className="mt-4 px-6 py-3 bg-[#047F40] hover:bg-green-800 text-white rounded-xl shadow-lg transition duration-300">
              Join the Movement
            </button>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 animate-slide-in-right">
          <Image
            src="/heroImg.png"
            alt="plant waste"
            width={600}
            height={600}
            className="rounded-xl shadow-xl"
          />
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
