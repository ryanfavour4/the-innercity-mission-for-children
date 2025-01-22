import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/assets/icons/logo-white.png'

export default function Footer() {
  return (
    <footer className="bg-gray p-10 text-base text-white">
      <div className="grid grid-cols-2 gap-6 gap-y-10 md:grid-cols-6">
        {/*  */}
        <div className="col-span-2 md:col-span-2">
          <Link className="mb-6 block" href={'/'}>
            <Image src={logo.src} alt="logo" className="w-24 md:w-28" width={100} height={50} />
          </Link>

          <div className="flex flex-col gap-1">
            <span className="flex items-center gap-2">
              <p className="font-semibold">Email:</p>{' '}
              <a href="mailto:info@theinnercitymission.ngo">info@theinnercitymission.ngo</a>
            </span>
            <span className="flex items-center gap-2">
              <p className="font-semibold">Phone:</p> <a href="tel:+23413300166">+23413300166</a>
            </span>
            <span className="flex items-center gap-2">
              <a href="https://www.google.com/maps/search/?api=1&query=27 Ize Iyamu St, Off Billings Way, Oregun, Lagos, Nigeria">
                15-17 Ize Iyamu St, Off Billings Way, Oregun, Lagos, Nigeria
              </a>
            </span>
            <span className="flex items-center gap-2">(Monday - Friday 9am - 5pm GMT+1)</span>
          </div>
        </div>
        {/*  */}
        <div className="">
          <h4>Ways to help</h4>
          <div className="">
            <Link href={'/'}>Instant Donation</Link>
            <Link href={'/'}>Give Monthly</Link>
            <Link href={'/'}>Become a Volunteer</Link>
            <Link href={'/'}>Sponsor Campaigns</Link>
            <Link href={'/'}>Pray with Us</Link>
          </div>
        </div>
        {/*  */}
        <div className="">
          <h4>Ways to help</h4>
          <div className="">
            <Link href={'/'}>Instant Donation</Link>
            <Link href={'/'}>Give Monthly</Link>
            <Link href={'/'}>Become a Volunteer</Link>
            <Link href={'/'}>Sponsor Campaigns</Link>
            <Link href={'/'}>Pray with Us</Link>
          </div>
        </div>
        {/*  */}
        <div className="col-span-2 md:col-span-2">
          <h3>Subscribe to our Newsletter</h3>

          <form className="">
            <input type="text" />
            <button className="btn-white">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  )
}
