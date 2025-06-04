'use client'
import Image from 'next/image'
import humanitarianResponseBanner from '@/public/assets/images/humanitarian-response-banner.jpg'
import covid19EmergencyRelief from '@/public/assets/images/COVID 19 EMERGENCY RELIEF.jpg'
import emergencyReliefToSouthSudan from '@/public/assets/images/EMERGENCY RELIEF TO DISPLACED PERSONS IN SOUTH SUDAN.jpg'

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
              Humanitarian Response
            </h3>
            <p className="mt-2 text-base">
              The InnerCity Mission carries out Humanitarian Response, under the auspices of the
              Chris Oyakhilome Foundation International, in collaboration with other member agencies
              of the foundation. Through this, we provide emergency aid to victims, particularly to
              the most vulnerable groups (women and children), affected by natural and manmade
              disasters such as wars, health crises, and other emergencies around the world..
              <br />
              <br />
              We deliver the following interventions through our humanitarian response; Food
              security response, Aid by Cash & Vouchers (CVP), Counselling and Psychosocial support,
              Education in Emergency, Health in Emergency and Shelter Response.
            </p>
          </div>
          <div className="">
            <Image
              alt="Education Program"
              src={humanitarianResponseBanner}
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
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-start justify-center gap-4 px-1.5 md:gap-6">
            <h3 className="text-xl font-bold uppercase lg:text-2xl">Covid 19 Emergency Relief</h3>

            <p className="text-base leading-relaxed">
              When disaster strikes, hunger often follows.
              <br />
              Vulnerable households were dealt a hard blow by the socioeconomic impact of the Global
              pandemic, pushing them further below the poverty line, and putting their children
              further at risk of hunger and malnutrition. The InnerCity Mission and partners are
              responding to the Covid 19 emergency situation with its humanitarian footprints in 195
              Communities, 25 Countries around the world and is still counting, distributing over
              84,549,600 meals to 46,416 Households.
              <br />
              <br />
              Other beneficiaries impacted include Orphanages, School Pupils, School Teachers and
              the Police community. Here are some of the countries reached so far;
              <br />
              Nigeria, Ghana, South Africa, Madagascar, Equatorial Guinea, Sierra Leone, Congo DRC,
              Cote d&apos;Ivoire, Liberia, Zimbabwe, Cameroon, India, Chad, Uganda, Myanmar,
              Cambodia, Tanzania, Pakistan, Egypt, South Sudan, Thailand, Congo Brazzaville,
              Germany, Sao Tome and Principe.
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
                    src={covid19EmergencyRelief}
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

export function Overview2Section() {
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
                    src={emergencyReliefToSouthSudan}
                    alt="Overview 1 Illustration"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="flex flex-col items-start justify-center gap-4 px-1.5 md:gap-6">
            <h3 className="text-xl font-bold uppercase lg:text-2xl">
              Emergency Relief to Displaced Persons in South Sudan
            </h3>

            <p className="text-base leading-relaxed">
              South Sudan is a nation that has been in turmoil since its formation. In 2013, a
              political conflict ensued between the President and his former Vice-President. This
              quickly escalated into an ethnic crisis which led to tens of thousands dead, with
              millions of people displaced.
              <br />
              <br />
              Executing its mission to reach the needy and vulnerable in times of crisis, the
              InnerCity Mission and its other member agencies of the Chris Oyakhilome Foundation
              International reached out to thousands of Internally Displaced Persons, women and
              children through the provision of relief items and medical aids in Magateen Internally
              Displaced Persons Camp in Juba, South Sudan.
            </p>
          </div>
        </div>
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
