import React from "react";
import Image from "next/image";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { VscTwitter } from "react-icons/vsc";
import { TiSocialLinkedin } from "react-icons/ti";
export default function AboutUs(){
    return(
    <div className="pt-10 pb-10">
     <div className="flex items-center justify-normal align-middle gap-2  pl-4 md:pl-8">
                <div className="border-2 border-black w-10 border-l-0 border-r-0 border-b-0 mb-5"></div>
            <h3 className="uppercase md:pb-6 pb-3 font-bold">KNOW ABOUT US</h3>
            </div>
      <div className=" md:flex-row flex-col flex justify-between md:gap-8 gap-2 font-bold md:pr-20 md:pl-20 pl-6 pr-6" >
        <h1 className="md:text-4xl text-2xl">We are the Inner city Mission for Children</h1>
        <div>
          <p className="pt-2 md:text-sm text-xs">
            But Jesus said, suffer little children, and forbid them not, to come
            unto me: for of such is the kingdom of heaven
          </p>
          <p className="font-extrabold pt-2 md:block flex items-end justify-end text-right text-xs md:text-sm">Matthew 19:14 KJV</p>
        </div>
      </div>
      <Image width={100} height={100} className="rounded-md mt-10 mb-10 ml-6 mr-0 md:ml-16 md:mr-16 w-[90%]" src= "/assets/images/BG.png"alt=""/>
      <div className="md:pl-32 md:pr-32 pr-6 pl-6 flex flex-col gap-3 pb-8">
        <h2 className="md:text-3xl text-xl font-bold">Introduction</h2>
        <p className="text-sm text-gray-500">
          The InnerCity Mission was birthed in December 2004 after the Founder,
          Rev Chris Oyakhilome (D.Sc., D.Sc., D.D.), the President of LoveWorld
          Inc, made a profound statement “Every Child is your Child”.{" "}
        </p>
        <p className="text-sm text-gray-500">
          The InnerCity Mission is a faith-based, Child-Centered,
          Non-Governmental Organization in consultative status with the United
          Nations Economic and Social Council. We are registered in Nigeria with
          the Corporate Affairs Commission (CAC) Abuja, RC No CAC/IT/NO 41931.
        </p>
        <p className="text-sm text-gray-500">
          Believing in the future of indigent children and taking action to
          reach and meet their needs, is the CORE of our work.{" "}
        </p>
        <p className="text-sm text-gray-500">
          Over the years, our programs and interventions, have impacted the
          lives of over 50 million indigent beneficiaries, mostly children
          around the world in underserved, hard-to-reach communities, from one
          country in 2005, to over 100 countries in 2022.
        </p>
      </div>
      <div className="bg-lightGreen md:flex-row flex-col pl-6 pr-6 pt-10 pb-10 flex justify-around md:p-32 items-center">
        <div>
          <h2 className="uppercase font-bold tracking-wide text-sm pb-3">OUR MISSION</h2>
          <h1 className="font-bold text-xl">
            Ensure every child thrives, escapes poverty, & contributes to
            progress.
          </h1>
          <p className="md:w-[65%] text-sm pt-4"> 
            To create an environment where every child survives, lives above
            poverty, and becomes an active participant in socio-economic
            development irrespective of race, color, or gender. Through our
            Education, Food, Livelihood, Healthcare, Advocacy, Shelter, and
            Humanitarian Aid programs, we strive to ensure indigent children and
            poor families succeed in life by providing them with Christ-centered
            care and sustained solutions to issues caused by poverty.
          </p>
        </div>
        <div className="pt-4 md:p-0">
          <h2 className="uppercase font-bold tracking-wide text-sm pb-3">OUR VISION</h2>
          <h1 className="font-bold text-xl">A poverty-free world where every child can thrive.</h1>
          <p className=" text-sm pt-4">
            We envision a world, free of poverty, where every child has equal
            opportunities to thrive and fulfill their God-given potential. 
          </p>
        </div>
      </div>

      <div className="md:pt-10 md:pb-10 md:pl-36 md:pr-36 p-4" >
        <p className="italic font-bold md:text-sm text-xs text-center text-gray">
          Remember, every child is your child! Help children, don’t ignore
          children. They are our extension; they are our future. No matter how
          dirty or untouchable they are, think again. You were just that small
          one day, but you were fortunate to have someone help you. Many of
          these are fortunate to have us if we would only open our hearts, our
          minds, our eyes and ignore them no more. We need to help give them a
          home, we need to help educate them, we need to help clothe them. As
          small as they are, as needy as they are, as frustrated as they are,
          they have dreams. We can help make those dreams come true!
        </p>
        <p className="font-bold text-grey text-sm text-center pt-6 md:text-lg">
          Founder, The InnerCity Mission: Rev Dr. Chris Oyakhilome (D.Sc.,
          D.Sc., D.D.) 2004
        </p>
      </div>
      <div className="bg-lightGreen md:p-16 grid md:grid-cols-2 grid-cols-1 p-2">
        <h1 className="md:text-4xl text-xl font-bold pb-8 pl-5 md:pl-0 pt-4 md:pt-0">OUR CORE VALUES</h1>
            <div className="border-2 border-gray border-b-0  border-r-0 border-t-0"></div>
            <div>
          <div className="flex items-start align-top justify-normal gap-3 p-4">
            <Image width={100} height={100} className="w-6" src="/assets/images/Icon.png" alt="" />
            <div>
              <p className="font-bold">We are a people of Faith</p>
              <p  className="text-gray">
                Our Christian faith compels us to respond to the needs of
                orphaned, vulnerable, and disadvantaged children. We believe
                that God would transform their lives in partnership with our
                actions.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-start align-top justify-normal gap-3 p-4">
            <Image width={100} height={100} className="w-6" src="/assets/images/Icon.png" alt="" />
            <div>
              <p className="font-bold">We are a community of Hope</p>
              <p  className="text-gray">
              We are confident of our expectations that each child we reach will rise to their full potential and realize God’s purpose in their lives. This inspires and drives us daily to bring hope to children and by extension, their families, through our impactful interventions.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-start align-top justify-normal gap-3 p-4">
            <Image width={100} height={100} className="w-6" src="/assets/images/Icon.png" alt="" />
            <div>
              <p className="font-bold">We are Accountable</p>
              <p  className="text-gray">
                We account for our activities, accept responsibility for them, and transparently share results.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-start align-top justify-normal gap-3 p-4">
            <Image width={100} height={100} className="w-6" src="/assets/images/Icon.png" alt="" />
            <div>
              <p className="font-bold">We are Servants of Love</p>
              <p  className="text-gray">
              We love all children regardless of their color, race, religion, economic status, and gender. We believe that to bring about the change we seek, we must demonstrate unconditional love.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-start align-top justify-normal gap-3 p-4">
            <Image width={100} height={100} className="w-6" src="/assets/images/Icon.png" alt="" />
            <div>
              <p className="font-bold">We build Authentic Relationships</p>
              <p  className="text-gray">
              We are dedicated to developing genuine partnerships and relationships based on trust.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-start align-top justify-normal gap-3 p-4">
            <Image width={100} height={100} className="w-6" src="/assets/images/Icon.png" alt="" />
            <div>
              <p className="font-bold">We model Respect and Integrity</p>
              <p  className="text-gray">
              We value each individual and model honesty in all Donor interactions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center pb-20">
        <h1 className="text-3xl font-bold p-7">Our programmatic areas</h1>
        <div className="grid md:grid-cols-3 grid-cols-2 md:gap-8">
          <div className="flex gap-2 items-center md:pl-16 md:pr-16 p-4">
            <Image width={100} height={100} className="bg-primary rounded-md w-10 p-2" src="/assets/images/education.png" alt="" />
            <p className="font-bold text-xs md:text-sm">Education</p>
          </div>
          <div className="flex gap-2 items-center md:pl-16 md:pr-16 p-4">
            <Image width={100} height={100} className="bg-primary rounded-md w-10 p-2" src="/assets/images/education.png" alt="" />
            <p className="font-bold text-xs md:text-sm">Feeding</p>
          </div>
          <div className="flex gap-2 items-center md:pl-16 md:pr-16 p-4">
            <Image width={100} height={100} className="bg-primary rounded-md w-10 p-2" src="/assets/images/education.png" alt="" />
            <p className="font-bold text-xs md:text-sm">Family Strenghtening and Livelihood</p>
          </div>
          <div className="flex gap-2 items-center md:pl-16 md:pr-16 p-4">
            <Image width={100} height={100} className="bg-primary rounded-md w-10 p-2" src="/assets/images/education.png" alt="" />
            <p className="font-bold text-xs md:text-sm">Shelter</p>
          </div>
          <div className="flex gap-2 items-center md:pl-16 md:pr-16 p-4">
            <Image width={100} height={100} className="bg-primary rounded-md w-10 p-2" src="/assets/images/education.png" alt="" />
            <p className="font-bold text-xs md:text-sm">Humanitarian Response</p>
          </div>
          <div className="flex gap-2 items-center md:pl-16 md:pr-16 p-4">
            <Image width={100} height={100} className="bg-primary rounded-md w-10 p-2" src="/assets/images/education.png" alt="" />
            <p className="font-bold text-xs md:text-sm">Health and Nutrition</p>
          </div>
          <div className="flex gap-2 items-center md:pl-16 md:pr-16 p-4">
            <Image width={100} height={100} className="bg-primary rounded-md w-10 p-2" src="/assets/images/education.png" alt="" />
            <p className="font-bold text-xs md:text-sm">Child Safety and Advocacy</p>
          </div>
          <div className="flex gap-2 items-center md:pl-16 md:pr-16 p-4">
            <Image width={100} height={100} className="bg-primary rounded-md w-10 p-2" src="/assets/images/education.png" alt="" />
            <p className="font-bold text-xs md:text-sm">Faith and Development</p>
          </div>
        </div>
      </div>
      <div >
        <div className="flex items-center justify-normal align-middle gap-2 pl-6">
          <div className="border-2 w-10 border-l-0 border-r-0 border-b-0 mb-5"></div>
          <h3 className="uppercase md:pb-6 pb-2 font-bold">Meet out team</h3>
        </div>
        <h1 className="md:pl-16 pl-6 font-bold md:text-4xl text-2xl">Board of Directors</h1>
        <div className="md:p-16 m-10 grid md:grid-cols-4 grid-cols-2 gap-5 md:gap-5">
          <div className="flex flex-col items-center justify-center gap-1 pb-3">
            <Image width={100} height={100} className="w-[200px]" src="/assets/images/avatar1.png" alt="" />
            <p className="font-bold text-sm">Leonard John Davis</p>
            <p className="text-xs">Cofounder, CEO</p>
            <Image width={100} height={100} className="w-32 bg-primary p-1 rounded-sm" src="/assets/images/Socials.png" alt="" />
          </div>
          <div className="flex flex-col items-center justify-center gap-1 pb-3">
            <Image width={100} height={100} className="w-[200px]" src="/assets/images/avatar2.png" alt="" />
            <p className="font-bold text-sm">Francis Weber</p>
            <p className="text-xs">Vice chairman</p>
            <Image width={100} height={100} className="w-32 bg-primary p-1 rounded-sm" src="/assets/images/Socials.png" alt="" />
          </div>
          <div className="flex flex-col items-center justify-center gap-1 pb-3">
            <Image width={100} height={100} className="w-[200px]" src="/assets/images/avatar.png" alt="" />
            <p className="font-bold text-sm">Kyla Orien</p>
            <p className="text-xs">Head of Authority</p>
            <Image width={100} height={100} className="w-32 bg-primary p-1 rounded-sm" src="/assets/images/Socials.png" alt="" />
          </div>
          <div className="flex flex-col items-center justify-center gap-1 pb-3">
            <Image width={100} height={100} className="w-[200px]" src="/assets/images/avatar3.png" alt="" />
            <p className="font-bold text-sm">Adrian Dixon</p>
            <p className="text-xs">Support Authority</p>
            <Image width={100} height={100} className="w-32 bg-primary p-1 rounded-sm" src="/assets/images/Socials.png" alt="" />
          </div>
          <div className="flex flex-col items-center justify-center gap-1 pb-3">
            <Image width={100} height={100} className="w-[200px]" src="/assets/images/avatar4.png" alt="" />
            <p className="font-bold text-sm">Freddy Busby</p>
            <p className="text-xs">Project Manager</p>
            <Image width={100} height={100} className="w-32 bg-primary p-1 rounded-sm" src="/assets/images/Socials.png" alt="" />
          </div>
          <div className="flex flex-col items-center justify-center gap-1 pb-3">
            <Image width={100} height={100} className="w-[200px]" src="/assets/images/avatar5.png" alt="" />
            <p className="font-bold text-sm">Kalu Alu</p>
            <p className="text-xs">Head of Authority</p>
            <Image width={100} height={100} className="w-32 bg-primary p-1 rounded-sm" src="/assets/images/Socials.png" alt="" />
          </div>
          <div className="flex flex-col items-center justify-center gap-1 pb-3">
            <Image width={100} height={100} className="w-[200px]" src="/assets/images/avatar6.png" alt="" />
            <p className="font-bold text-sm">Kalu Alu</p>
            <p className="text-xs">Head of Authority</p>
            <Image width={100} height={100} className="w-32 bg-primary p-1 rounded-sm" src="/assets/images/Socials.png" alt="" />
          </div>   
      </div>
    </div>
    <div>
        <h1 className="md:pl-16 pl-0 text-center md:text-justify font-bold md:text-4xl text-3xl">Executive director</h1>
        <div className="flex flex-col  align-middle md:p-16 p-6 text-center items-center md:items-start">
            <Image width={100} height={100} className="w-[200px]" src="/assets/images/avatar.png" alt="" />
            <p className="font-bold text-lg">Kalu Alu</p>
            <p className="text-xs">Head of Authority</p>
            <Image width={100} height={100} className="w-32 bg-primary p-1 rounded-sm" src="/assets/images/Socials.png" alt="" />
          </div>   
    </div>
    </div>
    )
};