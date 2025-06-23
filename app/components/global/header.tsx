import { inter } from '@/app/fonts/fonts'
import { LucideMenuSquare } from 'lucide-react';
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
        <div className=" w-full p-2 flex  items-center justify-around bg-transparent ">
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


              
                <LucideMenuSquare color='green' width={150} className='md:hidden'/>
               
              </div>
    </div>
  )
}

export default Header