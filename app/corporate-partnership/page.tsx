import {
  BuildingOutlineIcon,
  GiveLeafFillIcon,
  HandShakeOutlineIcon,
  LeafBudOutlineIcon,
  LoveFlowerMoneyOutlineIcon,
  PeopleGroupFillIcon,
  DoubleCheckIcon,
  UpTrendArrowIcon,
} from '@/components/svgs'
import Image from 'next/image'
import CtaSection from '@/layouts/cta-section'
import Link from 'next/link'
import image1 from '@/public/assets/images/cooperate-partnership-image-1.jpg'
import image2 from '@/public/assets/images/cooperate-partnership-image-2.jpg'
import image3 from '@/public/assets/images/cooperate-partnership-image-3.jpg'
import image4 from '@/public/assets/images/cooperate-partnership-image-4.jpg'

const programmaticAreas = [
  'Education',
  'Feeding',
  'Family Strengthening & Livelihood',
  'Shelter',
  'Humanitarian Response',
  'Health and Nutrition',
  'Child Safety and Advocacy',
  'Faith and Development',
]

const whyChooseUs = [
  {
    title: 'You are in Partnership with your preferred choice',
    description:
      'Our experience of Fifteen years and counting has helped us develop into one of today’s most active and respected International Non-Governmental organizations. With our footprints in 65 countries of the world and still counting, our work reaches millions of the world’s most vulnerable, marginalized people particularly children and women, in the most difficult conditions.',
  },
  {
    title: 'Get your story heard by an engaged and targeted audience',
    description:
      'Our world-class marketing and communications teams will help you reach and engage with our social community and extensive supporter base – helping you get your message out beyond your customer base to the rest of the world.',
  },
  {
    title: 'High profile and creative campaigns',
    description:
      'We have partnered with companies both big and small, to achieve some truly extraordinary outcomes.',
  },
  {
    title: 'Affiliations with International and National agencies',
    description:
      'We are registered as a Non-Governmental organization by the law and we are in Consultative Status with the United Nations Economic and Social Council (ECOSOC).',
  },
]

const waysToPartner = [
  {
    steps: 'a',
    title: 'Corporate donations',
    description: `
              <div class="relative ml-10 mt-16">
              <h2 class="font-abhaya-libre-extrabold absolute -left-10 -top-16 text-9xl text-dark/15">
                a)
              </h2>
              <h3 class="text-2xl font-extrabold text-dark md:text-3xl">Corporate donations</h3>
              <p class="mb-5 text-textcolor/75">
                Make your contributions to the InnerCity Mission work by providing a one-off or
                regular financial donation or a gift in kind.
              </p>
              <ul class="flex flex-col gap-3 text-base text-textcolor/75">
                <li class="list-inside list-disc">
                  <span class="font-extrabold">Make a financial donation</span>
                  <p>
                    Globally, the InnerCity Mission has transformed the lives of over 20 million
                    Indigent beneficiaries mostly children. This was made possible by the generous
                    donations from Corporate Organizations like YOURS.
                  </p>
                </li>
                <li class="list-inside list-disc">
                  <span class="font-extrabold">Product Donation</span>
                  <p>
                    Your partnership with us to donate and distribute products from your business,
                    sends a clear message of corporate social responsibility to your customers,
                    ultimately strengthening your brand.
                  </p>
                </li>
                <li class="list-inside list-disc">
                  <span class="font-extrabold">Cause Marketing</span>
                  <p>
                    Consumers or Customers are informed that when they buy a particular product from your product line,
                    a donation is made to support a cause such as providing food for the hungry, etc.
                  </p>
                </li>
              </ul>
            
            </div>
  `,
  },
  {
    steps: 'b',
    title: 'Strategic Giving',
    description: `
              <div class="relative ml-10 mt-16">
              <h2 class="font-abhaya-libre-extrabold absolute -left-10 -top-16 text-9xl text-dark/15">
                b)
              </h2>
              <h3 class="text-2xl font-extrabold text-dark md:text-3xl">Strategic Giving</h3>
              <p class="mb-5 text-textcolor/75">
              Align your donations with our programs and interventions that reflect your corporate values, commitment,
                business strategy, and desire to make an impact.
              </p>
              <p class="mb-5 text-textcolor/75">
                Work with us to help deliver in our thematic areas in your sustainable business strategy including; 
                Primary health care, Women empowerment, Education, Food Security, Humanitarian response.
              </p>
            </div>
  `,
  },
  {
    steps: 'c',
    title: 'Employee Engagement',
    description: `
              <div class="relative ml-10 mt-16">
              <h2 class="font-abhaya-libre-extrabold absolute -left-10 -top-16 text-9xl text-dark/15">
                c)
              </h2>
              <h3 class="text-2xl font-extrabold text-dark md:text-3xl">Employee Engagement</h3>
              <p class="mb-5 text-textcolor/75">
                Working with your employees, We can harness passion and expertise to build a brighter future
                for the people who need it most through a host of creative activities and initiatives.
              </p>
            </div>
  `,
  },
  {
    steps: 'd',
    title: 'Emergency Disaster Relief Missions',
    description: `
              <div class="relative ml-10 mt-16">
              <h2 class="font-abhaya-libre-extrabold absolute -left-10 -top-16 text-9xl text-dark/15">
                d)
              </h2>
              <h3 class="text-2xl font-extrabold text-dark md:text-3xl">Emergency Disaster Relief Missions</h3>
              <p class="mb-5 text-textcolor/75">
                When an emergency hits, we desire to be first responders. You can be amongst our network of emergency partners responding to disasters 
                and also providing your customers with a simple and efficient way to channel their desire of reaching more people thus, 
                making the difference between life and death during a humanitarian disaster.
              </p>
              <p class="mt-6 text-textcolor/75 mb-2">
                Here are some of the ways your company could get involved:
              </p>
              <ul class="flex list-inside flex-col gap-3 text-base text-textcolor/75">
                <li class="list-disc">Donate to our disaster fund before a crisis occurs.</li>
                <li class="list-disc">Publicize current appeals to your customer by putting display banners on your website or by running fundraising campaigns.</li>
                <li class="list-disc">Provide gifts in kind such as Raw Food items, medical supplies, Sanitary and hygiene kits, blankets, water, etc.</li>
              </ul>
            </div>
  `,
  },
]

export default function page() {
  return (
    <main className="bg-light">
      <section className="bg-light py-4">
        <div className="bg-cooperate-partnership wrapper flex min-h-96 flex-col items-start gap-5 rounded-2xl border-2 bg-cover bg-center px-6 py-16 text-light md:rounded-3xl md:px-16 md:py-20 md:pb-32">
          <small className="rounded-full border-2 bg-primary/25 p-2 px-4">
            Become a Corporate Partner
          </small>

          <h1 className="text-3xl font-extrabold md:text-6xl">Corporate Partnership</h1>
          <p className="md:max-w-xl">
            Together, we can grow your business and help children and families in need. We work with
            companies of all sizes to create partnership solutions that align with our programs and
            interventions.
          </p>
          <div className="mt-6 flex w-full flex-wrap items-center gap-2 gap-y-3">
            <Link
              href="/donate"
              className="btn-white flex items-center justify-center gap-2.5 px-4 py-2 text-base ring-light/50 md:w-fit"
            >
              <GiveLeafFillIcon className="size-5 pl-px" />
              <p>Make A Donation</p>
            </Link>
            <Link
              href={'https://gems.theinnercitymission.ngo/home'}
              className="btn flex items-center justify-center gap-2 border px-8 py-2 text-base ring-light/50 md:w-fit"
            >
              <PeopleGroupFillIcon className="size-5 pl-px" />
              <p>Partner With Us</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative bg-light">
        <div className="container flex max-w-2xl flex-col items-center justify-center gap-5 py-10 pb-20 text-center">
          <HandShakeOutlineIcon className="absolute bottom-1 right-3/4 text-primary md:top-3/4" />
          <LeafBudOutlineIcon className="absolute left-3/4 top-3 text-primary md:bottom-1/2" />
          <LoveFlowerMoneyOutlineIcon className="absolute left-[5%] top-3 text-primary" />
          <BuildingOutlineIcon className="absolute -bottom-3 right-[25%] text-primary" />
          <h3 className="text-2xl font-extrabold text-dark md:text-3xl">Why Partner With Us</h3>

          <p className="text-textcolor/75">
            Corporate Partnership with the InnerCity Mission is a mutually beneficial relationship:
            this means, funding for us to fight poverty, and for you our partner, it means the
            opportunity to make a real social impact, drive customer and staff loyalty, strengthen
            the brand purpose and increase market outreach.
          </p>
        </div>
      </section>

      <section className="bg-primary py-8 text-light">
        <div className="wrapper relative grid-cols-12 gap-6 md:grid">
          <HandShakeOutlineIcon className="absolute bottom-1 right-3/4 text-light md:right-1/2 md:top-3/4" />
          <LeafBudOutlineIcon className="absolute left-3/4 top-3 text-light md:bottom-1/2" />
          <LoveFlowerMoneyOutlineIcon className="absolute left-[5%] top-3 text-light" />
          <BuildingOutlineIcon className="absolute -bottom-3 right-[25%] text-light" />
          <UpTrendArrowIcon className="absolute -left-3 top-[65%] text-light" />

          <div className="col-span-7">
            <div className="mx-auto max-w-96">
              <h3 className="mb-6 mt-8 text-2xl font-extrabold md:mt-10 md:text-3xl">
                Our Programmatic Areas:
              </h3>
              {programmaticAreas.map((area, index) => (
                <div key={index} className="mb-3 flex items-center gap-2">
                  <span className="rounded-full bg-light p-1">
                    <DoubleCheckIcon className="text-lg text-primary" />
                  </span>
                  <p className="font-semibold">{area}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="corporate-partnership-grid-container col-span-5 gap-4">
            <div className="corporate-partnership-grid-image1 overflow-hidden rounded-lg">
              <Image
                className="h-full w-full object-cover"
                src={image1}
                alt="image1"
                width={100}
                height={100}
              />
            </div>
            <div className="corporate-partnership-grid-image2 overflow-hidden rounded-lg">
              <Image
                className="h-full w-full object-cover"
                src={image2}
                alt="image2"
                width={100}
                height={100}
              />
            </div>
            <div className="corporate-partnership-grid-image3 overflow-hidden rounded-lg">
              <Image
                className="h-full w-full object-cover"
                src={image3}
                alt="image3"
                width={100}
                height={100}
              />
            </div>
            <div className="corporate-partnership-grid-image4 overflow-hidden rounded-lg">
              <Image
                className="h-full w-full object-cover"
                src={image4}
                alt="image4"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container px-2 py-10">
          <h3 className="mb-6 text-center text-2xl font-extrabold text-dark md:text-3xl">
            Why Choose Us?
          </h3>

          <div className="flex grid-cols-2 flex-col gap-6 gap-y-6 md:grid">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="rounded-xl border bg-ghost-white p-5 shadow-sm">
                <h3 className="text-lg font-extrabold md:text-xl">{item.title}</h3>
                <p className="mt-2 text-textcolor/75">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <br />
      <hr />
      <br />

      <section className="bg-light py-6">
        <div className="container px-2">
          <h3 className="mb-6 max-w-2xl text-2xl font-extrabold text-dark md:text-3xl">
            Explore Ways To Partner With The InnerCity Mission For Children
          </h3>

          <div className="grid-cols-2 gap-6 md:grid">
            {/* <div className="relative ml-10 mt-16">
              <h2 className="font-abhaya-libre-extrabold absolute -left-10 -top-16 text-9xl text-dark/15">
                a)
              </h2>
              <h3 className="text-2xl font-extrabold text-dark md:text-3xl">Corporate donations</h3>
              <p className="mb-5 text-textcolor/75">
                Make your contributions to the InnerCity Mission work by providing a one-off or
                regular financial donation or a gift in kind.
              </p>
              <ul className="flex flex-col gap-3 text-base text-textcolor/75">
                <li className="list-inside list-disc">
                  <span className="font-extrabold">Make a financial donation</span>
                  <p>
                    Globally, the InnerCity Mission has transformed the lives of over 20 million
                    Indigent beneficiaries mostly children. This was made possible by the generous
                    donations from Corporate Organizations like YOURS.
                  </p>
                </li>
                <li className="list-inside list-disc">
                  <span className="font-extrabold">Make a financial donation</span>
                  <p>
                    Globally, the InnerCity Mission has transformed the lives of over 20 million
                    Indigent beneficiaries mostly children. This was made possible by the generous
                    donations from Corporate Organizations like YOURS.
                  </p>
                </li>
              </ul>
              <p className="mt-6 text-textcolor/75">
                Here are some of the ways your company could get involved:
              </p>
              <ul className="flex list-inside flex-col gap-3 text-base text-textcolor/75">
                <li className="list-disc">
                  Globally, the InnerCity Mission has transformed the lives of over 20 million
                  Indigent beneficiaries mostly children. This was made possible by the generous
                </li>
              </ul>
            </div> */}
            {waysToPartner.map((item) => (
              <div key={item.title} dangerouslySetInnerHTML={{ __html: item.description }}></div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-secondary py-8 text-light">
        <div className="container flex max-w-2xl flex-col items-center justify-center gap-5 py-10 pb-20 text-center">
          <HandShakeOutlineIcon className="absolute bottom-1 right-3/4 text-textcolor/75 md:top-3/4" />
          <LeafBudOutlineIcon className="absolute left-3/4 top-3 text-textcolor/75 md:bottom-1/2" />
          <LoveFlowerMoneyOutlineIcon className="absolute left-[5%] top-3 text-textcolor/75" />
          <BuildingOutlineIcon className="absolute -bottom-3 right-[25%] text-textcolor/75" />
          <h3 className="text-2xl font-extrabold text-dark md:text-3xl">Our Partners</h3>

          <p className="text-textcolor/75">
            We have an outstanding record of building successful corporate partnerships with
            companies across a range of sectors. We couldn’t have achieved so much without our
            partners, and in return, we provide creative ways to help them meet their sustainable
            business objectives.
          </p>
        </div>
      </section>

      <CtaSection />
    </main>
  )
}
