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

export default function page() {
  return (
    <>
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
          <h3 className="text-xl font-extrabold md:text-2xl">Why Partner With Us</h3>

          <p className="text-dark/75">
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
              <h3 className="mb-6 mt-8 text-xl font-extrabold md:mt-10 md:text-2xl">
                Our Programmatic Areas:
              </h3>
              {programmaticAreas.map((area, index) => (
                <div key={index} className="mb-2 flex items-center gap-2">
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
      <CtaSection />
    </>
  )
}
