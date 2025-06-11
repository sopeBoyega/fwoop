import Image from "next/image";
import Link from "next/link";
import { inter } from "./fonts/fonts";
import {
  LucideBookOpenText,
  LucideGlasses,
  LucideLeafyGreen,
  LucideQuote,
  LucideTextQuote,
} from "lucide-react";

export default function Home() {
  const navLinks = ["About", "Gallery", "Journal Camp", "Blog"];

  return (
    <>
      <div className=" w-full p-2 flex  items-center justify-around bg-[#1FC439] ">
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
          className={` ${inter.className} flex gap-x-5  w-[35%] justify-between items-center`}
        >
          {navLinks.map((link, index) => (
            <Link
              href={"/"}
              className="text-[17px] hover:text-[#047F40] hover:text-[20px] transition-all duration-500 ease-in-out"
            >
              {link}
            </Link>
          ))}
        </div>
      </div>

      <section id="hero" className="flex  w-full h-[100vh] overflow-hidden">
        <div className="flex-1 h-full place-content-center text-[#45C355] items-center justify-start p-7 ">
          <p className="text-center text-[#047F40] font-bold text-[50px]">
            FWOOP{" "}
            <span className="text-[17px]">
              (Food Waste Optimization Outreach Project)
            </span>
          </p>
          <p className="text-center">Reviving Waste - Powering the Planet.</p>
          <p className="text-center">Pratical Solution to Food Waste.</p>
        </div>
        <div className=" flex-1 h-[90%]">
          <Image
            src="/heroImg.png"
            width={0}
            height={0}
            layout="responsive"
            alt="plant waste"
          />
        </div>
      </section>

      <section
        id="info"
        className="w-full h-[50vh] p-7 mt-4 flex items-center gap-3   justify-center  "
      >
        <div className=" flex items-center justify-center flex-col  w-fit h-fit p-7 text-[20px] text-[#047F40]">
          <p className=" font-bold">ABOUT</p>
          <LucideBookOpenText />
          <p className="text-center text-[14px] ">
            Fwoop is a community-driven initiative designed to educate Nigerians
            <br /> about food sustainability and empower them with a pratical
            strategies to <br /> minimize food waste in their daily lives.
          </p>
        </div>
        <div className=" flex items-center justify-center flex-col  w-fit h-fit p-5 text-[20px] text-[#047F40]">
          <p className=" font-bold">OUR VISION</p>
          <LucideGlasses />
          <p className="text-center text-[14px] text-wrap">
            A Nigeria where healthy ,sustainable food pratices <br /> are woven
            into the fabric of our communities,preserving our rich culinary
            <br /> traditions and nuturing a healthier future for generations to
            come.
          </p>
        </div>
        <div className=" flex items-center justify-center flex-col  scale-[1.1] w-fit h-fit p-5 text-[20px] text-[#047F40]">
          <p className=" font-bold">OUR MISSION </p>
          <LucideLeafyGreen />
          <p className="text-center text-[14px] text-wrap">
            To educate ,empower and engage Nigerian communities <br /> in waste
            management and sustainable pratices.
          </p>
        </div>
      </section>

      <section className=" w-full h-[70vh] place-content-center place-items-center ">
        <p className="text-[30px] italic text-[#047F40] text-center">
          “Cutting Food waste is a delicious way of saving money ,helping to
          feed the world & protect the planet” - Tristian S.
          <span className="text-[#047F40]"></span>
        </p>
      </section>

      
    </>
  );
}
