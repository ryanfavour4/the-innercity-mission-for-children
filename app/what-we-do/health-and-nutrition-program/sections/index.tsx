'use client'
import Image from 'next/image'
import healthAndHumanProgam from '@/public/assets/images/health-and-nutrition-program.jpg'
import healthService1 from '@/public/assets/images/HEALTH SERVICES 1.jpg'
import healthService2 from '@/public/assets/images/HEALTH SERVICES 2.jpg'
import healthEducation1 from '@/public/assets/images/HEALTH EDUCATION 1.jpg'
import healthEducation2 from '@/public/assets/images/HEALTH EDUCATION 2.jpg'
import healthInEmergency1 from '@/public/assets/images/HEALTH IN EMERGENCY 1.jpg'
import healthInEmergency2 from '@/public/assets/images/HEALTH IN EMERGENCY 2.jpg'
import wash1 from '@/public/assets/images/WASH 1.jpg'
import wash2 from '@/public/assets/images/WASH 2.jpg'
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
              Health And Nutrition Program
            </h3>
            <p className="mt-2 text-base">
              Our Health and Nutrition program improves the quality of life and health outcomes for
              children and their families living in poverty. We believe that every child should have
              access to basic healthcare, and that every community should have the tools it needs
              for its children to thrive.
            </p>
          </div>
          <div className="">
            <Image
              alt="Education Program"
              src={healthAndHumanProgam}
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
              HEALTH SERVICES Health Services
            </h3>

            <p className="text-base leading-relaxed">
              Our Free health care services aim to reduce the financial barriers that vulnerable
              children, poor and low-income households experience when trying to access health
              services.
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
                    src={healthService1}
                    alt="Overview 1 Illustration"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="!w-full">
                  <Image
                    className="mx-auto w-full"
                    src={healthService2}
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
                    src={healthEducation1}
                    alt="Overview 1 Illustration"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="!w-full">
                  <Image
                    className="mx-auto w-full"
                    src={healthEducation2}
                    alt="Overview 1 Illustration"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="flex flex-col items-start justify-center gap-4 px-1.5 md:gap-6">
            <h3 className="text-xl font-bold uppercase lg:text-2xl">Health Education</h3>

            <p className="text-base leading-relaxed">
              Health education plays a vital role in building a healthy community and is designed to
              improve healthy living. We help improve knowledge, and develop life skills that are
              conducive to individual and community health. Our intervention encompasses
              environmental health, physical health, social health, emotional health as well as
              sexual and reproductive health education. Thus, improving health and well-being of the
              indigent.
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
            <h3 className="text-xl font-bold uppercase lg:text-2xl">Health in Emergency</h3>

            <p className="text-base leading-relaxed">
              The InnerCity Mission and volunteers provide frontline response when emergencies
              strike. They provide immediate assistance for the victims particularly women and
              children to save lives and improve health.
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
                    src={healthInEmergency1}
                    alt="Overview 1 Illustration"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="!w-full">
                  <Image
                    className="mx-auto w-full"
                    src={healthInEmergency2}
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
                  <Image className="mx-auto w-full" src={wash1} alt="Overview 1 Illustration" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="!w-full">
                  <Image className="mx-auto w-full" src={wash2} alt="Overview 1 Illustration" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="flex flex-col items-start justify-center gap-4 px-1.5 md:gap-6">
            <h3 className="text-xl font-bold uppercase lg:text-2xl">Wash</h3>

            <p className="text-base leading-relaxed">
              Clean water, basic toilets and good hygiene practices are essential for the survival
              and development of children. Today, there are around 2.4 billion people which,
              including children, do not use improved sanitation. Without access to these basic
              water and sanitation facilities, the lives of millions of children are at risk.
              <br />
              <br />
              Our WASH Campaign improves water and sanitation services, as well as basic hygiene
              practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
