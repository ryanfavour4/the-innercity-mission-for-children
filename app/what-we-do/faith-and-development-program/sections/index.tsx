'use client'
import Image from 'next/image'
import faithAndDevelopment from '@/public/assets/images/faith-and-development-program.jpg'
import communityOutreach from '@/public/assets/images/COMMUNITY OUTREACHES 1.jpg'
import communityMentoring1 from '@/public/assets/images/COMMUNITY MENTORING 1.jpg'
import communityMentoring2 from '@/public/assets/images/COMMUNITY MENTORING 2.jpg'
import communityMentoring3 from '@/public/assets/images/COMMUNITY MENTORING 3.jpg'


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
              Faith & Development Program
            </h3>
            <p className="mt-2 text-base">
              Today&apos;s children, mostly those in vulnerable and underserved communities, face a
              variety of risks and challenges. Without positive relationships, these challenges,
              mostly driven by poverty, threaten the promise of a bright future for them, making
              them susceptible to risky behaviors.
              <br />
              <br />
              Through Faith and Development, we provide safe spaces and positive role models for
              at-risk children and young people, to help them realize their potential and build
              their future.
              <br />
              <br />
              With our Christian faith at the center of all we do and our belief in its ability to
              bring about lasting change, we carry out this social change in communities with the
              people who share the same values - faith actors and volunteers.
            </p>
          </div>
          <div className="">
            <Image
              alt="Education Program"
              src={faithAndDevelopment}
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
            <h3 className="text-xl font-bold uppercase lg:text-2xl">Community Outreaches</h3>

            <p className="text-base leading-relaxed">
              These are enriching faith based activities or programs that allow targeted children
              and youth express their faith with peers who share similar values. In all cases, our
              community outreaches provide children and youth with a safe place to worship and
              socialize. The adults who supervise and guide the children at these programs serve as
              models.
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
                    src={communityOutreach}
                    alt="Overview 1 Illustration"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="!w-full">
                  <Image
                    className="mx-auto w-full"
                    src={faithAndDevelopment}
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
                    src={communityMentoring1}
                    alt="Overview 1 Illustration"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="!w-full">
                  <Image
                    className="mx-auto w-full"
                    src={communityMentoring2}
                    alt="Overview 1 Illustration"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="!w-full">
                  <Image
                    className="mx-auto w-full"
                    src={communityMentoring3}
                    alt="Overview 1 Illustration"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="flex flex-col items-start justify-center gap-4 px-1.5 md:gap-6">
            <h3 className="text-xl font-bold uppercase lg:text-2xl">Mentoring</h3>
            <p className="text-base leading-relaxed">
              Our Mentoring program gives children from disadvantaged backgrounds weekly one-on-one
              support from a volunteer mentor. We help them to develop their potential, character,
              raise aspiration, improve their spiritual and academic development through long term
              one-on-one mentoring
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

