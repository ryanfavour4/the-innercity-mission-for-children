import React from 'react'
import { url } from 'inspector'
import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs'
import { CtaSection, Events } from '../page'
export default function () {
  return (
    <div className="">
      <div className=" flex flex-col justify-center gap-7 p-3 pb-12 pt-12 md:flex-row md:pl-10 md:pr-12">
        <div>
          <div className="flex items-center justify-normal gap-2 pl-10 align-middle">
            <div className="mb-5 w-10 border-2 border-b-0 border-l-0 border-r-0 border-black"></div>
            <h3 className="pb-8 font-bold uppercase">What we do</h3>
          </div>
          <div className=" pl-8 pr-8 md:pl-20 md:pr-16">
            <h1 className="pb-8 text-xl font-bold md:text-4xl">Education Program</h1>
            <p className="w-[85%] text-sm" style={{ lineHeight: '1.6rem' }}>
              Every child has the fundamental right to education. However, various factors such as
              poverty and violence are preventing millions of children and young people in different
              continents and regions around the globe from accessing education.
            </p>
          </div>
        </div>
        <Image
          className="h-[50%] md:h-auto"
          width={850}
          height={450}
          src="/assets/images/schoolchild.png"
          alt="schoolchild"
        />
      </div>
      <div className="bg-lightGreen pb-10 pl-12 pr-12 pt-10 md:pl-28 md:pr-16">
        <h2 className="pb-5 text-lg font-bold  md:text-3xl">
          The InnerCity Mission Education Program: Empowering Indigent Children through Education
        </h2>
        <p style={{ lineHeight: '1.6rem' }} className="pb-2 text-sm">
          Education is a fundamental right for every child, yet, there are several factors, among
          them are poverty and violence, limiting millions of children and young people in
          continents and regions around the world from getting an education. With a focus on free
          Primary and Early Childhood Education, The InnerCity Mission Education Program is
          holistic. We believe that quality learning for developing indigent children requires
          adequate learning tools, safe and friendly environment, qualified and motivated teachers,
          and much more. The 5 pillars of our Education Program are; The InnerCity Mission Primary
          Schools, Back to School Campaign, Education in Emergencies, LoveWorld Teachers Training
          Institute and the Girl Child Education.
        </p>
      </div>
      <div className=" mb-6 ml-8 mr-8 mt-6 md:mb-10 md:ml-16 md:mr-16 md:mt-10 ">
        <h1 className="pb-6 text-xl font-bold  md:text-3xl">
          5 pillars of our Educational Program
        </h1>
        <div className="border-lightGray rounded-lg border-[1px] bg-lightGray">
          <section>
            <button className="border-gray m-2 rounded-md border-[1px] bg-white pb-2 pl-4 pr-4 pt-2 text-xs text-gray-400">
              The Innercity Mision Schools
            </button>
            <button className="border-gray m-2 rounded-md border-[1px] bg-white pb-2 pl-4 pr-4 pt-2 text-xs text-gray-400">
              Back-to-school Campaign
            </button>
            <button className="border-gray m-2 rounded-md border-[1px] bg-white pb-2 pl-4 pr-4 pt-2 text-xs text-gray-400">
              Education in Emergency- Making up for Lost Time
            </button>
            <button className="border-gray m-2 rounded-md border-[1px] bg-white pb-2 pl-4 pr-4 pt-2 text-xs text-gray-400">
              Loveworld Teachers Training Institute:
            </button>
          </section>
          <div className="m-3 rounded-sm bg-white p-5">
            <h2 className="pb-5 pt-5 text-xl font-bold">The InnerCity Mission Schools</h2>
            <p style={{ lineHeight: '1.5rem' }} className="pb-1 text-sm text-greytext">
              The InnerCity Mission School is a direct platform that offers tuition-free early
              childhood education as well as uninterrupted access to 6-year formal primary education
              for indigent children irrespective of gender, race, religion, and ethnicity. The
              ever-expanding network of schools currently has 12 campuses in West Africa- Nigeria
              and in South East Asia- India.
            </p>
            <p style={{ lineHeight: '1.5rem' }} className="pb-3 text-sm text-greytext">
              To complement the free tuition and provision of educational tools in our charity
              schools, children also receive free daily school meals.
            </p>
            <div className="mb-36 flex flex-col gap-4 md:flex-row">
              <Image width={400} height={200} src="/assets/images/people.png" alt="" />
              <Image width={400} height={200} src="/assets/images/people.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <CtaSection/>
      <div className=" p-6 md:pb-10 md:pl-12 md:pr-12 md:pt-10 ">
        <div className="flex flex-nowrap items-center gap-3 ">
          <h1 className="pb-7 md:text-3xl text-xl font-bold">Our Events</h1>
          <div className="mb-5 md:w-[80%] w-[60%]  border-[1.5px] border-b-0 border-l-0 border-r-0 border-grey-white"></div>
        </div>
        <Events/>
      </div>
    </div>
  )
}
