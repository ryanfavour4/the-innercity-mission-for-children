import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/assets/icons/logo-white.png'
import fbIcon from '@/public/assets/icons/facebook-icon-white.png'
import kcIcon from '@/public/assets/icons/kingschat-icon-white.png'
import igIcon from '@/public/assets/icons/instagram-icon-white.png'
import twIcon from '@/public/assets/icons/twitter-icon-white.png'
import lnIcon from '@/public/assets/icons/linkeln-icon-white.png'

export default function Footer() {
  return (
    <footer className="bg-gray p-10 text-base text-white">
      <div className="grid grid-cols-2 gap-6 gap-y-10 md:grid-cols-6">
        {/*  */}
        <div className="col-span-2 md:col-span-2">
          <Link className="mb-6 block" href={'/'}>
            <Image src={logo.src} alt="logo" className="w-24 md:w-28" width={100} height={50} />
          </Link>

          <div className="flex flex-col gap-2 text-sm">
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
          <h4 className="mb-6 text-lg font-semibold">Ways to help</h4>
          <div className="flex flex-col gap-2 text-sm">
            <Link href={'/'}>Instant Donation</Link>
            <Link href={'/'}>Give Monthly</Link>
            <Link href={'/'}>Become a Volunteer</Link>
            <Link href={'/'}>Sponsor Campaigns</Link>
            <Link href={'/'}>Pray with Us</Link>
          </div>
        </div>
        {/*  */}
        <div className="">
          <h4 className="mb-6 text-lg font-semibold">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm">
            <Link href={'/'}>Gifting Campaigns</Link>
            <Link href={'/'}>Home</Link>
            <Link href={'/'}>About Us</Link>
            <Link href={'/'}>Blog</Link>
          </div>
        </div>
        {/*  */}
        <div className="col-span-2 flex flex-col gap-5 md:col-span-2">
          <h3 className="text-xl font-semibold md:text-2xl">Subscribe to our Newsletter</h3>

          <form className="flex overflow-hidden rounded-md border-2 border-light bg-transparent ring-light/50 hover:ring-2 focus:ring-2 active:ring-2">
            <input
              type="text"
              placeholder="Your email address"
              className="w-full border-none bg-transparent outline-none focus:outline-none"
            />
            <button className="btn-white w-fit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center border-t border-light pt-6">
        <small className="mt-10 block text-sm">
          © {new Date().getFullYear()}. The InnerCity Mission for Children NGO. All Rights
          Reserved. See our Privacy Policy.
        </small>
        <div className="mt-8 flex gap-4">
          <a target="_blank" href="http://facebook.com">
            <Image src={fbIcon} alt="fbIcon" width={30} height={30} className="object-contain" />
          </a>
          <a target="_blank" href="http://kingschat.online/">
            <Image src={kcIcon} alt="kcIcon" width={35} height={35} className="object-fill" />
          </a>
          <a target="_blank" href="http://instagram.com">
            <Image src={igIcon} alt="igIcon" width={30} height={30} className="object-fill" />
          </a>
          <a target="_blank" href="http://x.com">
            <Image src={twIcon} alt="twIcon" width={30} height={30} className="object-fill" />
          </a>
          <a target="_blank" href="http://linkedin.com">
            <Image src={lnIcon} alt="lnIcon" width={30} height={30} className="object-fill" />
          </a>
        </div>
      </div>
    </footer>
  )
}
