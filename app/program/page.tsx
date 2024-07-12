import React from "react";
import { url } from "inspector";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
export default function () {
  return (
    <div className="">
      <div className=" flex-col md:flex-row flex justify-center gap-7 pt-10 pb-10 pl-16 pr-16">
        <div>
            <div className="flex items-center justify-normal align-middle gap-2">
                <div className="border-2 border-black w-10 border-l-0 border-r-0 border-b-0 mb-5"></div>
            <h3 className="uppercase pb-6 font-bold">What we do</h3>
            </div>
          
          <h1 className="text-4xl pb-6 font-bold">Education Program</h1>
          <p className="w-[85%]">
            Every child has the fundamental right to education. However, various
            factors such as poverty and violence are preventing millions of
            children and young people in different continents and regions around
            the globe from accessing education.
          </p>
        </div>
        <Image width={750} height={380} src="/assets/images/schoolchild.png" alt="schoolchild" />
      </div>
      <div className="bg-lightGreen pl-16 pr-16 pt-10 pb-10">
        <h2 className="text-3xl font-bold  pb-5">
          The InnerCity Mission Education Program: Empowering Indigent Children
          through Education
        </h2>
        <p className="text-sm pb-2">
          Education is a fundamental right for every child, yet, there are
          several factors, among them are poverty and violence, limiting
          millions of children and young people in continents and regions around
          the world from getting an education.  </p>
          <p className="text-sm pb-2">
            With a focus on free Primary and Early Childhood Education, The
            InnerCity Mission Education Program is holistic. We believe that
            quality learning for developing indigent children requires adequate
            learning tools, safe and friendly environment, qualified and
            motivated teachers, and much more.
          </p>
          <p className="text-sm pb-2">
            The 5 pillars of our Education Program are; The InnerCity Mission
            Primary Schools, Back to School Campaign, Education in Emergencies,
            LoveWorld Teachers Training Institute and the Girl Child Education.
          </p>
      
      </div>
      <div className=" ml-12 mr-12 mt-10 mb-10 ">
        <h1 className="text-3xl font-bold  pb-6">5 pillars of our Educational Program</h1>
        <div className="bg-lightGray rounded-md border-2 border-lightGray">
          <section>
            <button className="m-2 bg-white border-gray rounded-sm pt-2 pb-2 pl-4 pr-4 border-2 text-xs text-gray-400">The Innercity Mision Schools</button>
            <button className="m-2 bg-white border-gray rounded-sm pt-2 pb-2 pl-4 pr-4 border-2 text-xs text-gray-400">Back-to-school Campaign</button>
            <button className="m-2 bg-white border-gray rounded-sm pt-2 pb-2 pl-4 pr-4 border-2 text-xs text-gray-400">Education in Emergency- Making up for Lost Time</button>
            <button className="m-2 bg-white border-gray rounded-sm pt-2 pb-2 pl-4 pr-4 border-2 text-xs text-gray-400">Loveworld Teachers Training Institute:</button>
          </section>
          <div className="bg-white p-3 m-3 rounded-sm">
          <h2 className="text-xl pb-5 pt-5 font-bold">The InnerCity Mission Schools</h2>
          <div className="grid grid-cols-2">
            <Image width={400} height={200} src= "/assets/images/people.png"
 alt="" />
            <Image width={400} height={200} src="/assets/images/people.png" alt="" />
          </div>
          </div>
          
        </div>
      </div>
      <div  className="flex  flex-col justify-center items-center gap-8 h-[300px]  bg-[url(/assets/images/children.png)] w-full bg-cover bg-no-repeat bg-center">
        <h2 className="text-4xl text-white font-bold">Every Child is your Child!</h2>
        <div className="flex gap-3 ">
          <button className="bg-blue pt-2 pb-2 pl-5 pr-5 rounded-md text-sm text-white">Join fundraiser</button>
          <button className="bg-white pt-2 pb-2 pl-3 pr-3 rounded-md text-sm text-black">Donate</button>
        </div>
      </div>
      <div className=" md:pl-12 md:pr-12 p-6 md:pt-10 md:pb-10 ">
        <div className="flex gap-3 items-center">
        <h1 className="font-bold text-4xl pb-7">Our events</h1>
        <div className="border-2 border-black  border-l-0 border-r-0 border-b-0 mb-5 w-[200px]"></div>
        </div>
        <div className="flex md:flex-row flex-col gap-5 justify-between">
        <div className="bg-blue rounded-lg p-6 flex  items-start align-top justify-center gap-4 text-white">
            <div>
                <p className=" text-2xl font-bold">13</p>
                <p className=" uppercase">Apr</p>
            </div>
            <div>
                <div className="flex items-center align-middle gap-3">
                    <p className="uppercase text-xs">next events</p>
                    <div className="border-2 border-white w-10 border-l-0 border-r-0 border-b-0"></div>
                </div>
                <p className="font-bold text-lg">A day with our wonderful <br /> children</p>
            </div>
            <div className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center text-black ml-5"><BsArrowRight/>
            </div>
        </div>
        <div className="bg-blue rounded-lg p-6 flex items-start align-top justify-center gap-4 text-white">
            <div>
                <p className=" text-2xl font-bold">13</p>
                <p className=" uppercase">Apr</p>
            </div>
            <div>
                <div className="flex items-center align-middle gap-3">
                    <p className="uppercase text-xs">next events</p>
                    <div className="border-2 border-white w-10 border-l-0 border-r-0 border-b-0"></div>
                </div>
                <p className="font-bold text-lg">A day with our wonderful <br /> children</p>
            </div>
            <div className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center text-black ml-5"><BsArrowRight/>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}
