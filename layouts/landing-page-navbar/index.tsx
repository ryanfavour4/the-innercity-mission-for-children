'use client'
import { CloseXIcon, MenuFriesIcon, SearchIcon } from '@/components/svgs'
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import Link from 'next/link'
import { ChevronDownIcon } from '@/components/svgs'
export default function LandingPageNavbar() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <div className="items-center justify-between gap-10 border-b-2 bg-white md:flex md:justify-normal md:gap-32 md:border-0  md:bg-primary md:pb-3 md:pl-16 md:pr-16 md:pt-3 ">
      <div className="flex items-center justify-between p-3">
        <div className="md:hidden cursor-pointer">
          {!isNavOpen ? (
            <MenuFriesIcon onClick={toggleNav} width="60px" />
          ) : (
            <CloseXIcon
              className="fill-primary stroke-primary text-primary "
              onClick={toggleNav}
              width="60px"
              height="20px"
            />
          )}
        </div>
        <div>
          <Image
            width={80}
            height={80}
            className="mt-3 w-[100px] md:m-0 md:w-[80px]"
            src="/assets/icons/inner-city-logo.png"
            alt=""
          />
        </div>
      </div>
      {isNavOpen && (
          <div className="relative h-[100vh] bg-primary p-4 transition-all md:flex md:h-auto md:items-center md:justify-center md:bg-transparent md:p-0">
            <ul className=" flex flex-col md:items-center gap-[35px] text-white text-sm font-bold  md:flex-row md:gap-[15px]">
              <div>
                <Link href="/">Home</Link>
              </div>

              <div>
                <Link href="/about">About us</Link>
              </div>

              <div className="flex items-center gap-1">
                <Link href="/program">What we do</Link>
                <ChevronDownIcon className=" stroke-white w-7" color="white" />
              </div>
              <div className="flex items-center gap-1">
                <Link href="/insights">Special Insights</Link>
                <ChevronDownIcon className=" stroke-white w-7" color="white" />
              </div>
              <div className="flex items-center gap-1">
                <Link href="/about">Support Project</Link>
                <ChevronDownIcon className=" stroke-white w-7" color="white"  />
              </div>
              <li>Blog</li>
            </ul>
            <div className=" flex items-center justify-normal gap-4 pt-10 align-baseline md:ml-32 md:justify-center md:pt-0">
              <div className="order-2 md:order-1">
                <SearchIcon  className=" stroke-white" width="30px" height="30px" color="white" />
              </div>
              <div>
                <button className="rounded-md bg-white pb-2 pl-5 pr-5 pt-2  text-sm font-bold">
                  Donate
                </button>
              </div>
            </div>
          </div>
        )}
    </div>
  )
}
