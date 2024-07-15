import Image from 'next/image'
import Link from 'next/link'
export default function () {
  return (
    <footer className="bg-gray pb-12 pl-10 pr-16 pt-12 text-base text-white md:pl-16">
      <div className="flex flex-col items-start justify-between align-top md:flex-row md:gap-4">
        <div className="flex flex-col gap-3">
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
            <span>Phone:</span> 02-01-330-0166 (Monday - Friday; 9am-5pm)
          </p>
          <p>15-17 Ize Iyamu St, Off Billings Way, Oregun, Lagos, Nigeria</p>
        </div>
        <div className="pt-8">
          <p className="pb-3 text-[20px] font-bold uppercase">Ways to help</p>
          <ul className="flex flex-col gap-4">
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
        <div className="pt-8">
          <p className="pb-3 text-[20px] font-bold uppercase">Quick Links</p>
          <ul className="flex flex-col gap-4">
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
        <div className="pt-16">
          <h1 style={{ lineHeight: '1.9rem' }} className="text-[23px] font-bold md:text-[28px]">
            Subscribe to our Newsletter
          </h1>
          <form id="form" className="mt-8 flex gap-0">
            <input
              className="w-full rounded-sm rounded-r-none border-[1px] border-grey-white bg-transparent p-4 text-black outline-none"
              type="email"
              placeholder="Your Email"
            />
            <button
              className="rounded-sm rounded-l-none bg-white pb-2 pl-3 pr-3 pt-2 text-xs font-bold text-black md:pl-4 md:pr-4"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="block items-center justify-between pt-10 md:flex">
        <div>
          <p className="pb-4 text-xs md:pb-0">
            © 2024. The InnerCity Mission for Children NGO. All Rights Reserved. See our Privacy
            Policy.
          </p>
        </div>
        <div className='flex gap-4 items-center'>
          <Image width={200} height={200} src="/assets/icons/MessageIcon.png"  className ="w-[40px]"alt="" />
          <Image width={200} height={200} src="/assets/icons/akar-icons_facebook-fill.png"  className ="w-[30px]"alt="" />
          <Image width={200} height={200} src="/assets/icons/ri_instagram-fill.png"  className ="w-[30px]"alt="" />
          <Image width={200} height={200} src="/assets/icons/prime_twitter.png"  className ="w-[30px]"alt="" />
          <Image width={200} height={200} src="/assets/icons/linkeln.png"  className ="w-[30px]"alt="" />
        </div>
      </div>
    </footer>
  )
}
