'use client'
import Image from 'next/image'
import workInNorthEast from '@/public/assets/images/our-work-in-north-east-nigeria-banner.jpg'

import emergencyReliefToZimbawe1 from '@/public/assets/images/EMERGENCY RELIEF TO  ZIMBABWE 1.jpg'
import emergencyReliefToZimbawe2 from '@/public/assets/images/EMERGENCY RELIEF TO ZIMBABWE 2.jpg'
import emergencyReliefToIndia from '@/public/assets/images/EMERGENCY RELIEF TO INDIA.jpg'
import image3Illustration from '@/public/assets/images/EDUCATION IN EMERGENCY- MAKING UP FOR LOST TIME 1.jpg'
import image4Illustration from '@/public/assets/images/EDUCATION IN EMERGENCY- MAKING UP FOR LOST TIME 2.jpg'

import hopeMissionToEbolaOrphans from '@/public/assets/images/HOPE MISSION TO EBOLA ORPHANS IN LIBERIA.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import Link from 'next/link'

export function PageHeroSection() {
  return (
    <div className="bg-secondary">
      <div className="container px-2">
        <div className="grid grid-cols-1 gap-8 py-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-4">
            <small className="sub-header before:bg-text relative text-sm font-semibold uppercase md:left-12">
              What we do
            </small>
            <h3 className="text-3xl font-semibold capitalize leading-8 md:-mt-4 md:text-4xl">
              Working In North-East Nigeria
            </h3>
            <p className="mt-2 text-base">
              The InnerCity has been working in North-East Nigeria since 2015, to deliver urgent,
              humanitarian assistance to those affected by the crisis within the region as violence
              and insecurity have forced millions to flee their homes.
              <br />
              <br />
              Our emergency interventions within this region cut across the following programmatic
              areas: Education, Food security, Family Strengthening and Livelihood, Child Safety and
              Advocacy, Psychosocial support, sanitation, and hygiene.
            </p>
          </div>
          <div className="">
            <Image
              alt="Education Program"
              src={workInNorthEast}
              layout="responsive"
              className="!h-96 rounded-xl object-cover object-top lg:ml-auto lg:h-auto lg:max-w-xl"
              width={700}
              height={475}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export function Overview1Section() {
  return (
    <section className="bg-light px-2 py-10">
      <div className="container">
        <h1 className="pb-3 text-2xl font-bold">Education in Emergency</h1>
        <p>
          The unprecedented level of insurgency in North-East Nigeria particularly in the B.A.Y
          States (Borno, Adamawa and Yobe) have adversely affected the gains in education achieved
          prior to the insurgency. As a result of the crisis, large numbers of the population in
          these affected states have been displaced leading to thousands of children being out of
          school, this has been compounded by the setbacks caused by the Covid 19 global health
          crisis.
          <br />
          <br />
          In response to the education deprivation experienced in these regions, since 2015, our
          Education in Emergency project has been one of our core areas of intervention in
          North-East of Nigeria especially in two of the B.A.Y states which are Borno and Adamawa
          states respectively, supporting education for displaced, returnee, and host community
          children. With the Support of our Partners and a network of volunteers, we offer the
          following:
        </p>
        <ul className="list-disc pl-4">
          <li>
            Support in formal and non-formal education settings for out-of-school children,
            including catch-up classes for ages 6-14.
          </li>
          <li>Distribute education kits and hygiene kits for students.</li>
          <li>
            Provide capacity building for teachers, school management and community stakeholders on
            child safety measures, prevention of sexual exploitation and abuse.
          </li>
          <li>
            Construction of Charity Primary schools, temporary learning centers in IDP camps and
            host communities, as well as rehabilitating damaged classrooms in existing community
            schools.
          </li>
        </ul>
      </div>
    </section>
  )
}

export function Overview2Section() {
  return (
    <section className="bg-light px-2 py-10">
      <div className="container">
        <h1 className="pb-3 text-2xl font-bold">Our Impact In Education</h1>
      </div>
    </section>
  )
}

export function Overview3Section() {
  return (
    <section className="bg-light px-2 py-10">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-start justify-center gap-4 px-1.5 md:gap-6">
            <h3 className="text-xl font-bold uppercase lg:text-2xl">
              Emergency Relief to Victims of Cyclone Idai, Zimbabwe
            </h3>

            <p className="text-base leading-relaxed">
              Intense Tropical Cyclone Idai, the worst tropical cyclone on record to affect Africa
              and the Southern Hemisphere, caused catastrophic damage in Mozambique, Malawi and
              Zimbabwe, leaving more than 1,000 people dead and thousands more missing.
              <br />
              <br />
              The InnerCity Mission responded through the provision of relief items such as warm
              clothes, food items to thousands of victims of the flood disaster in Chimanimani,
              Zimbabwe to help in their recovery process. According to UNICEF 2019, Chimanimani was
              the most affected community.
            </p>
          </div>
          <div className="">
            <Swiper
              spaceBetween={10}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="!w-full">
                  <Image
                    className="mx-auto w-full"
                    src={emergencyReliefToZimbawe1}
                    alt="Overview 1 Illustration"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="!w-full">
                  <Image
                    className="mx-auto w-full"
                    src={emergencyReliefToZimbawe2}
                    alt="Overview 1 Illustration"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Overview4Section() {
  return (
    <section className="bg-light px-2 py-10">
      <div className="container">
        <div className="flex grid-cols-1 flex-col-reverse gap-8 md:grid lg:grid-cols-2 lg:gap-16">
          <div className="">
            <Swiper
              spaceBetween={10}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="!w-full">
                  <Image
                    className="mx-auto w-full"
                    src={emergencyReliefToIndia}
                    alt="Overview 1 Illustration"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="flex flex-col items-start justify-center gap-4 px-1.5 md:gap-6">
            <h3 className="text-xl font-bold uppercase lg:text-2xl">
              Emergency Relief to Victims of the Monsoon Flood, India
            </h3>

            <p className="text-base leading-relaxed">
              In July 2019, flooding and landslides triggered by yearly monsoon rains swept across
              India, Nepal and Bangladesh, leaving devastation in each country with more than 10.3
              million people affected. Several districts in Assam in the North-Eastern state of
              India, particularly Lahorighat, were the worst hit.
              <br />
              <br />
              The InnerCity Mission took on the challenge of providing emergency relief to those
              affected in Lahorighat, Assam India.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Overview5Section() {
  return (
    <section className="bg-light px-2 py-10">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-start justify-center gap-4 px-1.5 md:gap-6">
            <h3 className="text-xl font-bold uppercase lg:text-2xl">
              Hope Mission to Ebola Orphans in Liberia
            </h3>

            <p className="text-base leading-relaxed">
              In a bid to ensure every Ebola orphaned, vulnerable and deprived child in Liberia does
              not miss out on the basic things of life such as food, education, shelter among
              others, the InnerCity Mission reached out to Over 2,700 vulnerable, excluded and
              orphaned Ebola children from 16 districts in Liberia through the provision of food
              items, clothing and household items.
            </p>
          </div>
          <div className="">
            <Swiper
              spaceBetween={10}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="!w-full">
                  <Image
                    className="mx-auto w-full"
                    src={hopeMissionToEbolaOrphans}
                    alt="Overview 1 Illustration"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Overview6Section() {
  return (
    <section className="bg-light px-2 py-10">
      <div className="container">
        <div className="flex grid-cols-1 flex-col-reverse gap-8 md:grid lg:grid-cols-2 lg:gap-16">
          <div className="">
            <Swiper
              spaceBetween={10}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="!w-full">
                  <Image
                    className="mx-auto w-full"
                    src={image3Illustration}
                    alt="Overview 1 Illustration"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="!w-full">
                  <Image
                    className="mx-auto w-full"
                    src={image4Illustration}
                    alt="Overview 1 Illustration"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="flex flex-col items-start justify-center gap-4 px-1.5 md:gap-6">
            <h3 className="text-xl font-bold uppercase lg:text-2xl">
              Educational Support to Children in North-East Nigeria
            </h3>

            <p className="text-base leading-relaxed">
              The insurgency in North-East Nigeria has affected the populace including children and
              almost every stratum of life, including education.
              <br />
              <br />
              Working to improve access to Education, the InnerCity Mission and Partners have
              distributed thousands of free educational materials to both pupils and teachers as
              well as constructed a school facility in Yola, Adamawa state, North-East Nigeria,
              extending the InnerCity Mission network of charity schools to 7 centers in Nigeria
              alone.
              <br />
              <br />
              <Link className="text-blue-400" href="*******">
                See our work in North-East Nigeria here.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
