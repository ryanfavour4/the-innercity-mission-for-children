'use client'
import Image from 'next/image'
import workInNorthEast from '@/public/assets/images/our-work-in-north-east-nigeria-banner.jpg'
import OurInterventionInNorthNigeria from '@/public/assets/images/our-intervention-in-North-East-Nigeria.jpg'
import image3Illustration from '@/public/assets/images/EDUCATION IN EMERGENCY- MAKING UP FOR LOST TIME 1.jpg'
import image4Illustration from '@/public/assets/images/EDUCATION IN EMERGENCY- MAKING UP FOR LOST TIME 2.jpg'
import PicOfSchoolInDesma from '@/public/assets/images/Insert-A-picture-of-our-school-in-demsa-{the-school-and-the-children-in-it}.jpg'
import KitForStudent from '@/public/assets/images/kits for students.jpg'
import InitiativeOfTheInnerCity from '@/public/assets/images/initiative of the InnerCity Mission.jpg'
import EconomyEmpowerment from '@/public/assets/images/Economic Empowerment.jpg'
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
        <h1 className="pb-4 text-3xl font-bold">Education in Emergency</h1>
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
        <h1 className="pb-4 text-3xl font-bold">Our Impact In Education</h1>
        {/* providing of formal education */}
        <>
          <h1 className="pb-1 text-2xl">Provision of Formal Education:</h1>
          <p className="pb-2">
            In 2019, As part of our Education in Emergency initiative, the InnerCity Mission built
            and commissioned its first full-fledged tuition-free school in North-East Nigeria.
          </p>

          <p className="pb-5">
            The outcome of this education intervention in the North-East is to reduce the statistics
            of Out-of-School Children and improve access to quality, inclusive, and continued
            education of children of all vulnerable categories through formal and non-formal
            approaches in a safe, protective, and healthy learning environment; with support from
            partners, donors, and individuals who are passionate about an inclusive society. This
            support includes 6-year tuition, school supplies (school bag, shoes, socks, uniforms,
            school meals, and stationery) among others.
          </p>
          <div className="pl-4">
            <Image className="w-auto" src={PicOfSchoolInDesma} alt="PicOfSchoolInDesma" />
          </div>
        </>
        {/* Provision of Non formal Education setting */}
        <>
          <h1 className="pb-1 pt-5 text-2xl">Provision Of Non Formal Education Setting:</h1>
          <ul className="list-disc pl-4">
            <li className="pb-5">
              We worked to reduce the impact occasioned by COVID-19 and bridged the gap by
              scaling-up its in-person educational engagement for these targeted beneficiaries who
              do not have ANY access to online learning, who live in areas with low or no internet
              connectivity and lack of virtual learning materials. Over a period of time, up until
              the lockdown measures imposed by the state government eased, Mobile Temporary centers
              were set up in communities across Adamawa and Borno , as our volunteers engaged the
              children with a variety of fun and educative services such as learning activities in
              basic literacy and numeracy packaged in specially designed lesson plans and
              worksheets, we complimented the education intervention with health and psychosocial
              support.
            </li>
            <Image className="" src={image4Illustration} width={550} alt="image4Illustration" />
            <li className="pb-5 pt-5">
              <span className="font-bold">We constructed Temporary Learning Centers:</span>We have
              built 2 learning centers which are Safe learning spaces, equipping the centers with
              school furniture and supplies to aid learning.
            </li>
            <Image className="" src={image3Illustration} width={550} alt="image3Illustration" />
          </ul>
        </>
        {/*Distribution of education kits for students*/}
        <>
          <h1 className="pb-1 pt-5 text-2xl">Distribution Of Education Kits For Students:</h1>
          <p className="pb-5">
            Through the distribution of learning resources which includes note books, stationery,
            school uniforms, shoes, school bags , we keep both boys and girls in school and learning
            . The InnerCity Mission has successfully provided school kits for over 5000 children in
            IDP Camps and host communities.
          </p>
          <div className="pl-4">
            <Image className="w-auto" src={KitForStudent} alt="KitForStudent" />
          </div>
        </>
        {/*TEACH HER- A Girl Child Education initiative of the InnerCity Mission*/}
        <>
          <h1 className="pb-1 pt-5 text-2xl">
            Teach Her- A Girl Child Education Initiative Of The InnerCity Mission:
          </h1>
          <p className="pb-5">
            The disparity in access to education for boys and girls is wide, However, due to a
            combination of factors in North-East Nigeria, like insecurity and poverty, many girls
            are forced to leave school while others never had the opportunity to go to school, in
            the first place. The InnerCity Mission is committed to providing quality education for
            girls in North-East Nigeria and tackling the barriers that prevent them from getting an
            education.
          </p>
          <div className="pl-4">
            <Image
              className="w-auto"
              src={InitiativeOfTheInnerCity}
              alt="InitiativeOfTheInnerCity"
            />
          </div>
        </>
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
              Economic Strengthening, Livelihoods and Food Security
            </h3>
            <p className="text-base leading-relaxed">
              The InnerCity Mission helps provide food security while taking deliberate actions to
              help victims of crises, particularly the most vulnerable i.e. women and girls, move
              from dependence on humanitarian relief towards development. Our Economic Strengthening
              and livelihood program is vital in achieving economic reintegration and independence,
              as it directly provides reliable livelihood opportunities such skills acquisition
              training and grants for small scale business startups.
            </p>
            <p className="text-base leading-relaxed">Our team provides the following:</p>
            <ul className="list-disc pl-4">
              <li>
                Support in formal and non-formal education settings for out-of-school children,
                including catch-up classes for ages 6-14.
              </li>
              <li>Distribute education kits and hygiene kits for students.</li>
              <li>
                Provide capacity building for teachers, school management and community stakeholders
                on child safety measures, prevention of sexual exploitation and abuse.
              </li>
              <li>
                Construction of Charity Primary schools, temporary learning centers in IDP camps and
                host communities, as well as rehabilitating damaged classrooms in existing community
                schools.
              </li>
            </ul>
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
                    src={OurInterventionInNorthNigeria}
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
        <h1 className="pb-4 text-3xl font-bold">
          Our Impact In Economic Strengthening, Livelihoods And Food Security
        </h1>

        {/*Food Security*/}
        <>
          <h1 className="pb-1 pt-5 text-2xl">Food Security:</h1>
          <p className="pb-5">
            Most IDPs count on humanitarian assistance as their only lifeline, as the answer to
            their urgent need, the InnerCity Mission together with partners and volunteers organize
            Food distributions to these vulnerable households in IDP Camps and Host Communities as
            an immediate solution to the hunger challenges they face.
          </p>
          <div className="pl-4">
            <Image className="w-auto" src={KitForStudent} alt="KitForStudent" />
          </div>
        </>
        {/*Skills acquisition Training and Economic Empowerment*/}
        <>
          <h1 className="pb-1 pt-5 text-2xl">
            Skills Acquisition Training And Economic Empowerment:
          </h1>
          <p className="pb-5">
            Through this initiative, we have organized skills acquisition training for internally
            displaced persons (IDPs) in IDP Camps and targeted host communities in various
            livelihood Opportunities such as Tailoring, beauty care, soap making, catering and
            interior decoration. Some have been empowered with tools to start up small businesses
            for sustenance with the skills acquired.
          </p>
          <div className="pl-4">
            <Image className="h-auto w-auto" src={EconomyEmpowerment} alt="EconomyEmpowerment" />
          </div>
        </>
      </div>
    </section>
  )
}
