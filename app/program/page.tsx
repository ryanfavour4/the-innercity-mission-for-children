import React from "react";
import { url } from "inspector";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
export default function () {
  return (
    <div className="">
      <div className=" flex-col md:flex-row flex justify-center gap-7 pt-12 pb-12 md:pl-10 md:pr-12 p-3">
        <div>
            <div className="flex items-center justify-normal align-middle gap-2 pl-10">
                <div className="border-2 border-black w-10 border-l-0 border-r-0 border-b-0 mb-5"></div>
            <h3 className="uppercase pb-8 font-bold">What we do</h3>
            </div>
          <div className=" md:pl-20 md:pr-16 pl-8 pr-8" >
          <h1 className="md:text-4xl text-xl pb-8 font-bold">Education Program</h1>
          <p className="w-[85%] text-sm" style={{lineHeight:"1.6rem"}}>
            Every child has the fundamental right to education. However, various
            factors such as poverty and violence are preventing millions of
            children and young people in different continents and regions around
            the globe from accessing education.
          </p>
          </div>
         
        </div>
        <Image className="h-[50%] md:h-auto" width={850} height={450} src="/assets/images/schoolchild.png" alt="schoolchild" />
      </div>
      <div className="bg-lightGreen md:pl-28 md:pr-16 pl-12 pr-12 pt-10 pb-10">
        <h2 className="md:text-3xl text-lg font-bold  pb-5">
          The InnerCity Mission Education Program: Empowering Indigent Children
          through Education
        </h2>
        <p style={{lineHeight:"1.6rem"}} className="text-sm pb-2">
          Education is a fundamental right for every child, yet, there are
          several factors, among them are poverty and violence, limiting
          millions of children and young people in continents and regions around
          the world from getting an education. 
            With a focus on free Primary and Early Childhood Education, The
            InnerCity Mission Education Program is holistic. We believe that
            quality learning for developing indigent children requires adequate
            learning tools, safe and friendly environment, qualified and
            motivated teachers, and much more.
            The 5 pillars of our Education Program are; The InnerCity Mission
            Primary Schools, Back to School Campaign, Education in Emergencies,
            LoveWorld Teachers Training Institute and the Girl Child Education.
          </p>
      
      </div>
      <div className=" md:ml-16 md:mr-16 md:mt-10 md:mb-10 ml-8 mr-8 mt-6 mb-6 ">
        <h1 className="md:text-3xl text-xl font-bold  pb-6">5 pillars of our Educational Program</h1>
        <div className="bg-lightGray rounded-lg border-[1px] border-lightGray">
          <section>
            <button className="m-2 bg-white border-gray rounded-md pt-2 pb-2 pl-4 pr-4 border-[1px] text-xs text-gray-400">The Innercity Mision Schools</button>
            <button className="m-2 bg-white border-gray rounded-md pt-2 pb-2 pl-4 pr-4 border-[1px] text-xs text-gray-400">Back-to-school Campaign</button>
            <button className="m-2 bg-white border-gray rounded-md pt-2 pb-2 pl-4 pr-4 border-[1px] text-xs text-gray-400">Education in Emergency- Making up for Lost Time</button>
            <button className="m-2 bg-white border-gray rounded-md pt-2 pb-2 pl-4 pr-4 border-[1px] text-xs text-gray-400">Loveworld Teachers Training Institute:</button>
          </section>
          <div className="bg-white p-5 m-3 rounded-sm">
          <h2 className="text-xl pb-5 pt-5 font-bold">The InnerCity Mission Schools</h2>
          <p style={{lineHeight: "1.5rem"}} className="text-sm pb-1 text-greytext">The InnerCity Mission School is a direct platform that offers tuition-free early childhood education as well as uninterrupted access to 6-year formal primary education for indigent children irrespective of gender, race, religion, and ethnicity. The ever-expanding network of schools currently has 12 campuses in West Africa- Nigeria and in South East Asia- India.</p>
            <p style={{lineHeight: "1.5rem"}} className="text-sm pb-3 text-greytext">
            To complement the free tuition and provision of educational tools in our charity schools, children also receive free daily school meals.
            </p>
          <div className="md:flex-row flex-col flex gap-4 mb-36">
            <Image width={400} height={200} src= "/assets/images/people.png"
 alt="" />
            <Image width={400} height={200} src="/assets/images/people.png" alt="" />
          </div>
          </div>
          
        </div>
      </div>
      <div  className="relative  m-16">
      <img className="" src="/assets/images/children.png" alt="schoolchildren" />
      <div className="absolute top-[25%] left-[32%] text-center flex justify-center flex-col items-center">
      <h2 className="text-4xl text-white font-bold pb-7">Every Child is your Child!</h2>
        <div className="flex gap-8 pt-3">
          <button className="bg-primary pt-3 pb-3 pl-6 pr-6 rounded-md text-sm text-white font-bold">Join Fundraiser</button>
          <button className="bg-white pt-3 pb-3 pl-4 pr-4 rounded-md text-sm text-black font-bold">Donate</button>
        </div>
      </div>
        
      </div>
      <div className=" md:pl-12 md:pr-12 p-6 md:pt-10 md:pb-10 ">
        <div className="flex gap-3 items-center flex-nowrap ">
        <h1 className="font-bold text-3xl pb-7">Our Events</h1>
        <div className="border-[1.5px] border-grey-white  border-l-0 border-r-0 border-b-0 mb-5 w-[80%]"></div>
        </div>
        <div className="flex md:flex-row flex-col gap-5 justify-between">
        <div className="bg-primary rounded-lg p-8 flex  items-start align-top justify-center gap-8 text-white">
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
            <div className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center text-black ml-5 mt-5"><BsArrowRight/>
            </div>
        </div>
        <div className="bg-primary rounded-lg p-8 flex items-start align-top justify-center gap-8 text-white">
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
            <div className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center text-black ml-5 mt-5"><BsArrowRight/>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}
