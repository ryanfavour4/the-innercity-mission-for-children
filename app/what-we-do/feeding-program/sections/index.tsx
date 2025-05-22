'use client'
import Image from 'next/image'
import feedingProgramBanner from '@/public/assets/images/feeding-program-banner.jpg'
import image1Illustration from '@/public/assets/images/food-banking-system-1.jpg'
import image2Illustration from '@/public/assets/images/food-banking-system-2.jpg'
import image3Illustration from '@/public/assets/images/feeding-program-1.jpg'
import image4Illustration from '@/public/assets/images/feeding-program-2.jpg'
import image5Illustration from '@/public/assets/images/SOUP KITCHEN 1.jpg'
import image6Illustration from '@/public/assets/images/SOUP KITCHEN 2.jpg'
import image7Illustration from '@/public/assets/images/FOOD AID FOR FAMILIES AND ORPHANAGES 1.jpg'
import image8Illustration from '@/public/assets/images/FOOD AID FOR FAMILIES AND ORPHANAGES 2.jpg'
import image9Illustration from '@/public/assets/images/send-portions-and-outreach-program-1.jpg'
import image10Illustration from '@/public/assets/images/send-portions-and-outreach-program-2.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

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
              Feeding Program
            </h3>
            <p className="mt-2 text-base">
              The InnerCity Mission Feeding Program focuses on child nutrition and food security for
              families in vulnerable conditions. Our Feeding program has different approaches which
              include; Food Banking system, School Feeding, Food Assistance for Families and
              Orphanages, Soup kitchens, and Community feeding Outreaches.
            </p>
          </div>
          <div className="">
            <Image
              alt="Feeding Program"
              src={feedingProgramBanner}
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
            <h3 className="text-xl font-bold uppercase lg:text-2xl">FOOD BANKING SYSTEM</h3>

            <p className="text-base leading-relaxed">
              The Food Bank is the nerve center of our feeding program. This is the storehouse where
              food donations, no matter the size are received from food and grocery manufacturers,
              retailers, and other organizations; and then distributed through our Food Pantries and
              different feeding interventions that serve families, children, seniors, and
              individuals at risk of hunger. While we operate on the "front line" model at the Food
              Bank, to directly give out food to the hungry, we also distribute to other frontline
              agencies who provide food security to children and families in need, within their
              constituents.
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
                    src={image1Illustration}
                    alt="Overview 1 Illustration"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="!w-full">
                  <Image
                    className="mx-auto w-full"
                    src={image2Illustration}
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
            <h3 className="text-xl font-bold uppercase lg:text-2xl">SCHOOL FEEDING PROGRAM</h3>

            <p className="text-base leading-relaxed">
              This initiative in partnership with relevant stakeholders - Government, private, and
              other social development partners, is a safety net that brings children into school
              and out of hunger. Its educational and health benefits help increase enrollment rates
              and reduce absenteeism in school as well as improve food security at the household
              level.
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
            <h3 className="text-xl font-bold uppercase lg:text-2xl">SOUP KITCHEN</h3>

            <p className="text-base leading-relaxed">
              These are onsite hot meal stations in strategic locations where the InnerCity Mission
              prepares free nutritious meals for children and adults in need.
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
                    src={image5Illustration}
                    alt="Overview 1 Illustration"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="!w-full">
                  <Image
                    className="mx-auto w-full"
                    src={image6Illustration}
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
                    src={image7Illustration}
                    alt="Overview 1 Illustration"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="!w-full">
                  <Image
                    className="mx-auto w-full"
                    src={image8Illustration}
                    alt="Overview 1 Illustration"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="flex flex-col items-start justify-center gap-4 px-1.5 md:gap-6">
            <h3 className="text-xl font-bold uppercase lg:text-2xl">
              FOOD AID FOR FAMILIES AND ORPHANAGES
            </h3>

            <p className="text-base leading-relaxed">
              We provide immediate food assistance to indigent and vulnerable families and
              orphanages for a stipulated period of time.
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
              COMMUNITY OUTREACH (SEND PORTIONS & EASTER FIESTA)
            </h3>

            <p className="text-base leading-relaxed">
              While the average family plans for festive periods, vulnerable families hardly plan
              for many reasons but largely due to the excessive costs of food. However, through
              community outreaches, we provide special holidays food parcels to these vulnerable
              households to prepare sumptuous meals for their children so they all don’t feel left
              out.
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
                    src={image9Illustration}
                    alt="Overview 1 Illustration"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="!w-full">
                  <Image
                    className="mx-auto w-full"
                    src={image10Illustration}
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
