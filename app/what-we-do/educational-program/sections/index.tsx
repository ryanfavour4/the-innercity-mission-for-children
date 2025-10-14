'use client'
import Image from 'next/image'
import educationalProgramBanner from '@/public/assets/images/back-to-school.jpg'
import image1Illustration from '@/public/assets/images/THE INNER CITY MISSION SCHOOLS YOLA.jpg'
import image2Illustration from '@/public/assets/images/THE INNER CITY MISSION SCHOOLS DEMSA.jpg'
import image3Illustration from '@/public/assets/images/BACK TO SCHOOL CAMPAIGN.jpg'
import image4Illustration from '@/public/assets/images/BACK TO SCHOOL CAMPAIGN 1.jpg'
import image5Illustration from '@/public/assets/images/EDUCATION IN EMERGENCY- MAKING UP FOR LOST TIME 1.jpg'
import image6Illustration from '@/public/assets/images/EDUCATION IN EMERGENCY- MAKING UP FOR LOST TIME 2.jpg'
import image7Illustration from '@/public/assets/images/LOVEWORLD TEACHERS TRAINING INSTITUTE.jpg'
import image8Illustration from '@/public/assets/images/GIRL CHILD EDUCATION.jpg'
import image9Illustration from '@/public/assets/images/GIRL CHILD EDUCATION 1.jpg'
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
              Education Program
            </h3>
            <p className="mt-2 text-base">
              Education is a fundamental right for every child, yet, there are several factors,
              among them are poverty and violence, limiting millions of children and young people in
              continents and regions around the world from getting an education.
              <br />
              <br />
              With a focus on free Primary and Early Childhood Education, The InnerCity Mission
              Education Program is holistic. We believe that quality learning for developing
              indigent children requires adequate learning tools, safe and friendly environment,
              qualified and motivated teachers, and much more.
              <br />
              <br />
              The 5 pillars of our Education Program are; The InnerCity Mission Primary Schools,
              Back to School Campaign, Education in Emergencies, LoveWorld Teachers Training
              Institute and the Girl Child Education.
            </p>
          </div>
          <div className="">
            <Image
              alt="Education Program"
              src={educationalProgramBanner}
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
              The InnerCity Mission School is a direct platform that offers tuition-free early
              childhood education as well as uninterrupted access to 6-year formal primary education
              for indigent children irrespective of gender, race, religion, and ethnicity. The
              ever-expanding network of schools currently has 12 campuses in West Africa- Nigeria
              and in South East Asia- India.
              <br />
              <br />
              To complement the free tuition and provision of educational tools in our charity
              schools, children also receive free daily school meals.
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
            <h3 className="text-xl font-bold uppercase lg:text-2xl">BACK TO SCHOOL CAMPAIGN</h3>

            <p className="text-base leading-relaxed">
              This program supports indigent children who have been forced to drop out of school, to
              get “Back to School” within their communities, providing them with free scholastic
              materials and payment of tuition fees in some instances. In addition, the InnerCity
              Mission carries out school development projects such as WASH initiatives in
              underserved communities to improve children learning outcomes.
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
              EDUCATION IN EMERGENCY- MAKING UP FOR LOST TIME
            </h3>

            <p className="text-base leading-relaxed">
              As a result of natural/manmade disasters or violent crises, indigent and vulnerable
              children especially, miss out on months or years of education. To bridge the gap of
              lost school time, and provide stability in such times of crisis, the InnerCity Mission
              ensures continued learning by providing learning materials, safe learning spaces, and
              food aid to mitigate the effects of the crisis on the developing child which are all
              essential to continue and sustain learning.
              <br />
              <br />
              The impact of the COVID-19 pandemic on education is enormous but thanks to partners
              and donors of the InnerCity Mission, who through their continuous support ensures
              indigent children are not left behind in accessing education despite the restrictions
              in several countries and the lockdown of schools around the world.
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
            </Swiper>
          </div>

          <div className="flex flex-col items-start justify-center gap-4 px-1.5 md:gap-6">
            <h3 className="text-xl font-bold uppercase lg:text-2xl">
              LOVEWORLD TEACHERS TRAINING INSTITUTE:
            </h3>

            <p className="text-base leading-relaxed">
              This “Train the Trainer” approach incorporates various teachers&apos; training
              programs, which up-skills and equip teachers for the purpose of improving
              children&apos;s learning outcomes
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
            <h3 className="text-xl font-bold uppercase lg:text-2xl">GIRL CHILD EDUCATION</h3>

            <p className="text-base leading-relaxed">
              The disparity in access to education for boys and girls is wide. Education, they say
              is the process of providing information to an inexperienced person to help him/her
              develop physically, mentally, socially, emotionally, spiritually, politically,
              economically among others.
              <br />
              <br />
              The InnerCity Mission is committed to providing the necessary support for every Girl
              child to access quality education. Through the Education program, it ensures equal
              access, attendance, and the school completion rate.
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
                    src={image8Illustration}
                    alt="Overview 1 Illustration"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="!w-full">
                  <Image
                    className="mx-auto w-full"
                    src={image9Illustration}
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
