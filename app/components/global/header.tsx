import { inter } from '@/app/fonts/fonts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface navLinksObj {
    name :  string;
    url : string;
}

interface HeaderProps {
    navLinks: navLinksObj[]
}

const Header = ({navLinks}: HeaderProps) => {
  return (
    <div>
        <div className=" w-full p-2 flex  items-center justify-around bg-[#0F3D2E] ">
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
  )
}

export default Header