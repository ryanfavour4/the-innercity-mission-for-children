'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CloseXIcon, MenuFriesIcon, SearchIcon } from '@/components/svgs'
import { ChevronDownIcon } from '@/components/svgs'

export default function LandingPageNavbar() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  return <div className="bg-primary py-6"></div>
}
