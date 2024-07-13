import Image from 'next/image'
import Link from 'next/link'
export default function () {
  return (
    <footer className="bg-gray pb-12 md:pl-16 pl-10 pr-16 pt-12 text-xs text-white">
      <div className="flex flex-col items-start justify-between align-top md:flex-row">
        <div className="flex flex-col gap-2">
          <Image
            width={100}
            height={100}
            className="mb-3 w-[80px]"
            src="/assets/images/Logoi.png"
            alt=""
          />
          <p>
            <span>Email:</span> info@theinnercitymission.ngo
          </p>
          <p>
            <span>Phone:</span> 02-01-330-0166
          </p>
          <p>15-17 Ize Iyamu St, Off Billings Way, Oregun, Lagos, Nigeria</p>
        </div>
        <div className="pt-6">
          <p className="pb-3 text-[16px] font-bold uppercase">Ways to help</p>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="">Instant donation</a>
            </li>
            <li>
              <a href=""></a>Give Monthly
            </li>
            <li>
              <a href=""></a>Become a Volunteer
            </li>
            <li>
              <a href=""></a>Sponsor Campaigns
            </li>
            <li>
              <a href=""></a>Pray with Us
            </li>
          </ul>
        </div>
        <div className="pt-6">
          <p className="pb-3 text-[16px] font-bold">Quick Links</p>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="">Gifting Campaigns</a>
            </li>
            <li>
              <a href=""></a>Home
            </li>
            <Link href="/about">About us</Link>
            <li>
              <a href=""></a>Blog
            </li>
          </ul>
        </div>
        <div className="pt-10">
          <h1 style={{lineHeight:"1.9rem"}} className="text-[28px] font-bold">Subscribe to our Newsletter</h1>
          <form id="form" className="mt-8 flex gap-0">
            <input
              className="w-full rounded-sm rounded-r-none border-[1px] border-grey-white bg-transparent text-black outline-none p-4"
              type="email"
              placeholder="Your Email"
            />
            <button
              className="rounded-sm rounded-l-none bg-white pb-2 pl-2 pr-2 pt-2 text-xs font-bold text-black md:pl-4 md:pr-4"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="block md:flex items-center justify-between pt-10">
        <div>
          <p className="text-xs pb-4 md:pb-0">
            © 2024. The InnerCity Mission for Children NGO. All Rights Reserved. See our Privacy
            Policy.
          </p>
        </div>
        <div>
          <Image
            width={200}
            height={200}
            className="w-[200px]"
            src="/assets/images/Socials.png"
            alt=""
          />
        </div>
      </div>
    </footer>
  )
}
