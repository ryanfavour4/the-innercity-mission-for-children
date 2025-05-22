'use client'
import Image from 'next/image'
import programBanner from '@/public/assets/images/shelter-program-banner.jpg'
import image1Illustration from '@/public/assets/images/THE INNERCITY MISSION HOME 1.jpg'
import image2Illustration from '@/public/assets/images/THE INNERCITY MISSION HOME 2.jpg'
import image3Illustration from '@/public/assets/images/ORPHANAGE SUPPORT 1.jpg'
import image4Illustration from '@/public/assets/images/ORPHANAGE SUPPORT 2.jpg'
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
              Shelter Program
            </h3>
            <p className="mt-2 text-base">
              Through our shelter program, the InnerCity Mission directly and indirectly, through
              partnerships with other child care institutions, provides holistic child development.
              There are two initiatives under our shelter program which include the InnerCity
              Mission Home and Orphanage Support.
            </p>
          </div>
          <div className="">
            <Image
              alt="Shelter Program"
              src={programBanner}
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
            <h3 className="text-xl font-bold uppercase lg:text-2xl">
              THE INNERCITY MISSION SCHOOLS
            </h3>

            <p className="text-base leading-relaxed">
              The InnerCity Mission Home is a rescue and rehabilitation program!
              <br />
              <br />
              This residential program is a direct approach to our Shelter Program, through which we
              provide a stable family environment and whole-life care for indigent and vulnerable
              children. The term Whole life care means we take a long-term approach to child
              development and provide opportunities that champion children’s right to a safe,
              permanent and nurturing home thus encouraging healthy, spiritual, physical, social and
              economic development for indigent, vulnerable and orphaned children in our direct care
              all the way through young adulthood.
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
            <h3 className="text-xl font-bold uppercase lg:text-2xl">ORPHANAGE SUPPORT</h3>

            <p className="text-base leading-relaxed">
              We support other Child care institutions that provide holistic child development for
              orphaned and vulnerable children.
              <br />
              <br />
              This is because many orphanages and child care institutions are over populated and
              with limited cash inflow, they struggle to meet the individual needs of the children
              in their care. Through this initiative, we provide support for the children they
              serve.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
