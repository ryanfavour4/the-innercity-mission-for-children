"use client"
import Image from 'next/image'
import React from 'react'
import banner from "@/public/assets/images/banner.jpg"

function InitiativeHero() {
  return (
    <div className='w-fill'>
        <Image src={banner} alt='' />
    </div>
  )
}

export default InitiativeHero