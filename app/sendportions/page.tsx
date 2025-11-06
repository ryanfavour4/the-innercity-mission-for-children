'use client'
import { useState } from 'react'
import { toast } from 'react-toastify'
import {
  ChristmasSantaCapIcon,
  ChristmasWreathIcon,
  EventDateFillIcon,
  HandGivingGiftIcon,
  HeartLoveIcon,
  MealForkPlateKnifeIcon,
} from '@/components/svgs'
import React from 'react'
import Snowfall from 'react-snowfall'
import CountdownTimer from './sections/count-down-timer'
import Image from 'next/image'
// import sendPortionHamperBag from '@/public/assets/icons/send-portions-bag.png'
import sendPortionHamperBox from '@/public/assets/icons/send-portion-box.png'
import espeesCoin from '@/public/assets/icons/espees.png'
import sendPortionsArtboard from '@/public/assets/images/sendportion-artboard-2.png'
import CountrySelect from '@/components/country-select'
import NumberCounter from '@/components/number-counter'
import Input from '@/components/input'

const hampers = [
  {
    id: 1,
    plan: 'Christmas Box For Children',
    planPlural: 'Christmas Boxes For Children',
    items: ['Food & Drink Pack', 'Gift Item', 'ROR', 'Essentials'],
    espees: 5,
  },
  {
    id: 2,
    plan: 'Christmas Box for Families',
    planPlural: 'Christmas Boxes for Families',
    items: ['1 Month Food Parcel', 'ROR family Pack'],
    espees: 50,
  },
  // {
  //   id: 3,
  //   plan: 'A Christmas Box for Indigent New Mums',
  //   items: [
  //     'New Mum Nutrition Pack',
  //     'Newborn Essentials (Clothing, towel set & blanket)',
  //     'Diaper Pack',
  //   ],
  //   espees: 10,
  // },
]

export default function SendPortionPage() {
  const [selectedHamperPlan, setSelectedHamperPlan] = useState<(typeof hampers)[0] | null>(null)
  const [selectedRegion, setSelectedRegion] = useState('Nigeria')
  const [quantityNumberMeter, setQuantityNumberMeter] = useState(1)
  const [fullname, setFullname] = useState({ value: '' })
  const [email, setEmail] = useState({ value: '' })

  return (
    <>
      <div>
        <Snowfall style={{ zIndex: 99 }} />
        <div className="bg-sendportions-hero min-h-96 bg-cover bg-[70%]">
          <div className="container px-3 py-28 text-light md:min-h-[35rem] md:px-2">
            <h1 className="relative max-w-3xl text-4xl font-black drop-shadow-2xl md:text-balance md:text-6xl">
              <ChristmasSantaCapIcon className="absolute -left-2 -top-3 size-6 -rotate-[30deg] pl-px md:size-8" />
              Send Portions at Christmas Outreaches and Crusades
            </h1>
            <div className="mt-6 flex w-full flex-wrap items-center gap-2 gap-y-3 md:max-w-96">
              <a
                href="#give-portion-section"
                className="btn flex items-center justify-center gap-2.5 border px-4 py-3 text-base ring-light/50 md:w-fit"
              >
                <MealForkPlateKnifeIcon className="size-5 pl-px" />
                <p>Sponsor Portions</p>
              </a>
              <a
                href={'https://sendportions.theinnercitymission.ngo/register'}
                className="btn-white flex items-center justify-center gap-2 border px-8 py-3 text-base ring-light/50 md:w-fit"
              >
                <span className="flex items-center justify-center rounded-full p-1">
                  <EventDateFillIcon className="size-4 pl-px text-dark" />
                </span>
                <p>Host Event</p>
              </a>
            </div>{' '}
          </div>
        </div>

        <div className="bg-white">
          <div className="container max-w-4xl px-2 py-7">
            <h4 className="mx-auto max-w-4xl text-center text-3xl font-bold capitalize text-red-700 md:text-4xl">
              This Christmas, Share the Joy
            </h4>
            <p className="mx-auto mb-8 mt-4 max-w-2xl text-center text-lg font-bold text-[#007853] md:text-xl">
              It&apos;s that special time of year! It&apos;s Christmas - the season of celebration,
              joy, giving and goodwill to all people!
            </p>

            <p>
              At The InnerCity Mission, Christmas Season is Send Portions Season, a season of
              special Christmas Outreaches where we extend God&apos;s love to needy children and
              families who can&apos;t provide for themselves.
            </p>
            <br />
            <div className="border-l-4 border-[#007853] pl-3">
              <cite>
                <b>Nehemiah 8 (CJB): </b>
                10. Then he said to them, Go, eat rich food, drink sweet drinks, and send portions
                to those who can&apos;t provide for themselves;
              </cite>
            </div>
            <br />
            <br />
            <div className="border-l-4 border-[#007853] pl-3">
              <cite>
                <b>Nehemiah 8 (TLB): </b>
                10. it is a time to celebrate with a hearty meal and to send presents to those in
                need;
              </cite>
            </div>
            <br />
            <br />
            <p>
              In these times where many nations are experiencing harsh economic crises and rising
              costs of living, indigent children and families are often the most affected and may
              not share in the joy of the Christmas season.
            </p>
            <br />

            <p className="font-bold">This year we are doing it bigger and better!!</p>
          </div>
        </div>

        <div className="px-2 py-6 md:px-0">
          <div className="relative -z-10 mx-auto w-full max-w-4xl rounded-md bg-[#007853]/85 px-3 py-10 text-light md:px-5">
            <ChristmasSantaCapIcon className="absolute -left-2 -top-3 size-6 -rotate-[30deg] pl-px md:size-8" />
            <ChristmasWreathIcon className="absolute -bottom-3 -right-2 size-6 -rotate-[30deg] pl-px md:size-8" />

            <h4 className="mx-auto mb-6 max-w-4xl text-center text-2xl font-bold capitalize md:text-3xl">
              Don&apos;t wait too long to give! You&apos;ve only got...
            </h4>
            <CountdownTimer />
          </div>
        </div>

        <div className="bg-[#007853]/85 text-light">
          <div className="container flex max-w-6xl grid-cols-2 flex-col gap-6 px-2 py-8 md:grid">
            <div className="flex flex-col justify-between px-4 py-12">
              <h4 className="mb-6 max-w-4xl text-3xl font-bold capitalize leading-relaxed md:text-4xl">
                How to Participate in Send Portions Outreaches 2025
              </h4>

              <div className="mx-auto grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-3 text-base">
                  <div className="flex w-fit items-center justify-center rounded-md border border-red-800 bg-red-700 p-2.5 text-light">
                    <HandGivingGiftIcon className="text-xs" />
                  </div>

                  <p>
                    Sponsor Send Portions Christmas Gift Boxes for
                    <br />• Children, <br />• Families <br />• and Inidgent New Mums
                  </p>
                </div>

                <div className="flex flex-col gap-3 text-base">
                  <div className="flex w-fit items-center justify-center rounded-md border border-red-800 bg-red-700 p-2.5 text-light">
                    <HandGivingGiftIcon className="text-xs" />
                  </div>

                  <p>
                    Organize a Send Portions Outreach in <br /> • Communities,
                    <br /> • Childrens Homes/Orphanages, <br /> • IDP or Refugee Camps
                  </p>
                </div>
              </div>
            </div>

            <div className="">
              <Image
                src={sendPortionsArtboard}
                width="100"
                height="100"
                unoptimized
                className={`mx-auto w-full rounded-md md:max-w-xs`}
                alt="espeesCoin"
              />
            </div>
          </div>
        </div>

        <div
          id="give-portion-section"
          className="bg-christmas-sendportion-cta min-h-[12rem] bg-cover px-3 py-10 pt-16 text-white md:min-h-96"
        >
          <h3 className="mx-auto mb-2 max-w-3xl text-balance text-center text-3xl font-bold capitalize md:text-4xl">
            {/* Choose a Portion to Sponsor */}
            Join us to Sponsor Portions of Christmas Gift Boxes to Indigent Children and Families
          </h3>
          <p className="mx-auto max-w-2xl text-center text-lg md:text-xl">
            Choose Your Portions Package
          </p>
        </div>

        <div className="relative mx-auto mb-10 min-h-48 md:mb-[36rem]">
          <div className="item-center left-0 right-0 flex w-full justify-center border-t-4 border-[#007853] md:border-4">
            <div className="-bottom-[290%] mx-auto min-h-48 w-full max-w-4xl rounded-md bg-white px-4 py-4 shadow md:absolute">
              <div className="flex flex-wrap items-center justify-center gap-5 md:grid md:grid-cols-2 md:items-start md:justify-start">
                {hampers.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex w-full flex-col md:h-full md:items-center md:justify-center"
                  >
                    <div className="relative flex w-full items-center justify-center rounded-md bg-[#007853] py-2">
                      <div className="absolute bottom-2 right-2 z-10 flex items-center gap-2 rounded-full bg-white p-1.5 text-sm font-bold">
                        <Image
                          src={espeesCoin}
                          width="100"
                          height="100"
                          className={`w-6`}
                          alt="espeesCoin"
                        />
                        <p>{item.espees} Espee</p>
                      </div>
                      <Image
                        src={sendPortionHamperBox}
                        width="100"
                        height="100"
                        className={`w-full max-w-[14rem] animate-wiggle`}
                        alt=""
                      />
                    </div>

                    <div className="flex h-full w-full flex-col">
                      <h4 className="mb-4 mt-4 text-lg font-bold md:text-xl">❑ {item.plan}</h4>

                      <ul className="item-center flex flex-wrap gap-x-4 gap-y-2 text-sm">
                        {item.items.map((gift) => (
                          <li key={gift}>•🎁 {gift}</li>
                        ))}
                      </ul>
                      <div className="mt-auto pt-4">
                        <a
                          onClick={() => {
                            setSelectedHamperPlan(item)
                            toast.success('Plan selected 🎉')
                          }}
                          href="#sub-donate-inputs"
                          className={`${selectedHamperPlan?.id === item.id && 'bg-[#007853] !text-white'} btn block border-2 border-[#007853] text-[#007853]`}
                        >
                          {selectedHamperPlan?.id === item.id
                            ? 'Portion Selected'
                            : 'Select Portion'}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* ❤️ Donate Section */}
              <section
                id="sub-donate-inputs"
                className="flex flex-col items-center justify-center py-6 pt-8"
              >
                <div className="mb-8 w-full rounded-md border-2 bg-red-50 py-8">
                  <div className="mx-auto flex w-full flex-col items-center justify-center gap-5 px-3 md:grid md:max-w-3xl md:grid-cols-2 md:flex-row md:px-10">
                    <div className="flex w-full flex-col gap-1">
                      <label className="text-base font-medium">Portion Quantity</label>
                      <NumberCounter onChange={(e) => setQuantityNumberMeter(Number(e))} />
                    </div>
                    <div className="flex w-full flex-col gap-1">
                      <label className="text-base font-medium">Destination Country</label>
                      <CountrySelect
                        className="bg-white"
                        onChange={(e) => setSelectedRegion(e.target.name)}
                        value={selectedRegion}
                      />
                    </div>
                    <div className="flex w-full flex-col gap-1">
                      <label className="text-base font-medium">Full Name</label>
                      <Input
                        placeholder="Enter your name"
                        type="text"
                        required
                        state={fullname}
                        setState={setFullname}
                        name="name"
                      />
                    </div>
                    <div className="flex w-full flex-col gap-1">
                      <label className="text-base font-medium">Email Address</label>
                      <Input
                        placeholder="Email"
                        type="email"
                        state={email}
                        required
                        setState={setEmail}
                        name="email"
                      />
                    </div>
                  </div>
                </div>

                <HeartLoveIcon className="mx-auto text-red-700" size={40} />
                <h4 className="mx-auto mb-6 max-w-4xl text-center text-2xl font-bold capitalize text-red-800 md:text-3xl">
                  Ready to Make Someone Smile?
                </h4>
                <p className="mx-auto mb-3 max-w-2xl text-base text-gray-700">
                  You’ve chosen:{' '}
                  <span className="font-semibold text-red-800">{quantityNumberMeter}</span> Portion
                  {Number(quantityNumberMeter) > 1 ? 's' : ''} of{' '}
                  <span className="font-semibold text-red-800">
                    {(Number(quantityNumberMeter) > 1
                      ? selectedHamperPlan?.planPlural
                      : selectedHamperPlan?.plan) || 'No Box Selected'}
                  </span>{' '}
                  in{' '}
                  <span className="font-semibold text-red-800">
                    {selectedRegion || 'No Region Selected'}
                  </span>
                </p>
                <p className="mb-8 font-semibold">
                  Total {Number(selectedHamperPlan?.espees) * Number(quantityNumberMeter) || 0}{' '}
                  Espees
                </p>

                <form method="post" action="https://gateway.theinnercitymission.ngo/pay">
                  <input type="hidden" name="name" id="name" value={fullname.value} />
                  <input type="hidden" name="email" id="email" value={email.value} />
                  <input type="hidden" name="country" id="country" value={selectedRegion} />
                  <input
                    type="hidden"
                    name="amount"
                    id="amount"
                    value={Number(selectedHamperPlan?.espees) * Number(quantityNumberMeter) * 1700}
                  />
                  <input type="hidden" name="item" id="item" value={'Send Portions (Family)'} />
                  <input
                    type="hidden"
                    name="description"
                    id="description"
                    value={selectedHamperPlan?.plan}
                  />

                  {/* INVISIBLE TAGS FOR TRACKING DONATIONS  */}
                  <div className="invisible">
                    <input type="hidden" value={'NGN'} name="currency" />

                    <input
                      type="hidden"
                      value={selectedHamperPlan?.plan}
                      name="given-description"
                    />
                    <input
                      type="hidden"
                      value={'https://theinnercitymission.ngo/donate/?action=step-2'}
                      name="domain"
                    />
                    <input type="hidden" value={'icm4c'} name="txn_prefix" />
                    <input type="hidden" value={'icm4c'} name="dept" />
                    <input type="hidden" value={'Bank Transfer'} name="paymentType" />
                  </div>
                  <button type="submit" className="btn w-fit bg-[#007853] px-8 py-2.5 text-light">
                    Proceed to Donate
                  </button>
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
