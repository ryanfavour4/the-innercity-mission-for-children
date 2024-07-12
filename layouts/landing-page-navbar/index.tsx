'use client'
import { CloseXIcon, MenuFriesIcon } from '@/components/svgs'
/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import Link from 'next/link';
import { RxHamburgerMenu } from "react-icons/rx";
export default function LandingPageNavbar() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <div>
       <div className='md:hidden'>
      <RxHamburgerMenu />
      </div>
       <div className="md:flex p-[20px] hidden justify-between gap-10 items-center bg-blue ">
     
      
      <div>
        <Image width={80} height={80} className="w-[80px]" src="/assets/images/Logoi.png" alt="" />
      </div>
      <ul className="flex gap-[35px] text-white">
        <Link href='/'>Home</Link>

        <Link href="/about">About us</Link>
        <div className='flex gap-1 items-center'>
        <Link href='/program'>What we do</Link>
        <MdKeyboardArrowDown/>
        </div>
        <div className='flex gap-1 items-center'>
        <Link href="/insights">Special Insightss</Link>
        <MdKeyboardArrowDown/>
        </div>
        <div className='flex gap-1 items-center'>
        <Link href="/about">Support Project</Link>
        <MdKeyboardArrowDown/>
        </div>
      <li>Blog</li>
      </ul>
      <div className="flex gap-4 justify-center items-baseline align-baseline">
        <div>
          <CiSearch color='white'/>
        </div>
        <div>
        <button className="bg-white pt-2 pb-2 pl-5 pr-5 rounde-sm text-sm font-bold">Donate</button>
        </div>
       
      </div>
    </div>
    </div>
   
  )
}
