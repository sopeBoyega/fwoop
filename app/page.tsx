import Image from "next/image";
import QuickStats from "./components/stats";
import SponsorsSection from "./components/sponsors";
import ImpactStats from "./components/impact";
import {
  LucideBookOpenText,
  LucideGlasses,
  LucideLeafyGreen,
} from "lucide-react";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        id="hero"
        className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 py-10 bg-white"
      >
        <div className="md:w-1/2 text-center md:text-left space-y-4 text-[#047F40]">
          <h1 className="font-bold text-4xl md:text-5xl leading-tight">
            FWOOP{" "}
            <span className="text-lg block font-normal">
              (Food Waste Optimization Outreach Project)
            </span>
          </h1>
          <p>Reviving Waste - Powering the Planet.</p>
          <p>Practical Solution to Food Waste.</p>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <Image
            src="/heroImg.png"
            width={0}
            height={0}
            layout="responsive"
            alt="plant waste"
          />
        </div>
      </section>

      {/* INFO BLOCKS */}
      <section
        id="info"
        className="w-full py-16 px-6 bg-green-50"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 justify-between text-center text-[#047F40]">
          {/* ABOUT */}
          <div className="flex-1 space-y-3">
            <p className="text-xl font-bold">ABOUT</p>
            <LucideBookOpenText className="mx-auto" />
            <p className="text-sm">
              Fwoop is a community-driven initiative designed to educate Nigerians
              about food sustainability and empower them with practical strategies
              to minimize food waste in their daily lives.
            </p>
          </div>

          {/* VISION */}
          <div className="flex-1 space-y-3">
            <p className="text-xl font-bold">OUR VISION</p>
            <LucideGlasses className="mx-auto" />
            <p className="text-sm">
              A Nigeria where healthy, sustainable food practices are woven into
              the fabric of our communities, preserving our rich culinary
              traditions and nurturing a healthier future for generations to come.
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
