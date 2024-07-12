import Image from "next/image";
import Link from "next/link";
export default function () {
  return (
    <footer className='pt-12 pb-12 pl-16 pr-16 bg-gray text-sm text-white'>
        <div className='flex md:flex-row flex-col justify-between items-start align-top'>
            <div className='flex flex-col gap-2'>
                <Image width={100} height={100} className="w-[80px] mb-3" src= "/assets/images/Logoi.png"  alt="" />
                <p><span>Email:</span> info@theinnercitymission.ngo</p>
                <p><span>Phone:</span> 02-01-330-0166</p>
                <p>15-17 Ize Iyamu St, Off Billings Way, Oregun, Lagos, Nigeria</p>
            </div>
            <div>
                <p className='uppercase text-[16px] font-bold pb-3'>Ways to help</p>
                <ul className='flex flex-col gap-2'>
                    <li><a href="">Instant donation</a></li>
                    <li><a href=""></a>Give Monthly</li>
                    <li><a href=""></a>Become a Volunteer</li>
                    <li><a href=""></a>Sponsor Campaigns</li>
                    <li><a href=""></a>Pray with Us</li>
                </ul>
            </div>
            <div>
                <p className='text-[16px] font-bold pb-3'>Quick Links</p>
                <ul  className='flex flex-col gap-2'>
                    <li><a href="">Gifting Campaigns</a></li>
                    <li><a href=""></a>Home</li>
                    <Link href ="/about">About us</Link>
                    <li><a href=""></a>Blog</li>
                </ul>
            </div>
            <div className='pt-10'>
                <h1 className='text-[20px] text-3xl'>Subscribe to our <br /> Newsletter</h1>
                <form id='form' className='flex justify-normal gap-0 mt-8'>
                    <input className='p-1 md:p-3 rounded-sm outline-none text-black' type="email" placeholder='Your Email'/>
                    <button  className="bg-blue pt-2 pb-2 pl-2 pr-2 md:pl-6 md:pr-6 rounded-sm text-sm text- " type='submit'>Subscribe</button>
                </form>
            </div>
        </div>
        <div className='flex justify-between items-center pt-6'>
            <div>
                <p className='text-xs'>© 2024. The InnerCity Mission for Children NGO. All Rights Reserved. See our Privacy Policy.</p>
            </div>
            <div>
                <Image width={200} height={200} className="w-[200px]"src="/assets/images/Socials.png" alt="" />
            </div>
        </div>
    </footer>
  )
}
