'use client'
import { useState } from 'react'
import { toast } from 'react-toastify'
import {
  ChristmasSantaCapIcon,
  ChristmasWreathIcon,
  EventDateFillIcon,
  HeartLoveIcon,
  MealForkPlateKnifeIcon,
} from '@/components/svgs'
import React from 'react'
import Snowfall from 'react-snowfall'
import CountdownTimer from './sections/count-down-timer'
import Image from 'next/image'
import sendPortionHamperBag from '@/public/assets/icons/send-portions-bag.png'
import espeesCoin from '@/public/assets/icons/espees.png'
import CountrySelect from '@/components/country-select'
import NumberCounter from '@/components/number-counter'

const hampers = [
  {
    id: 1,
    plan: 'A Christmas Box For Children contains',
    items: ['Food & Drink Pack', 'Gift Item', 'ROR', 'Essentials'],
    espees: 5,
  },
  {
    id: 2,
    plan: 'A Christmas Box for Families contains',
    items: ['1 Month Food Parcel', 'ROR family Pack'],
    espees: 5,
  },
  {
    id: 3,
    plan: 'A Christmas Box for Indigent New Mums',
    items: [
      'New Mum Nutrition Pack',
      'Newborn Essentials (Clothing, towel set & blanket)',
      'Diaper Pack',
    ],
    espees: 10,
  },
]

export default function SendPortionPage() {
  const [selectedHamperPlan, setSelectedHamperPlan] = useState<(typeof hampers)[0] | null>(null)
  const [selectedRegion, setSelectedRegion] = useState('Nigeria')
  const [quantityNumberMeter, setQuantityNumberMeter] = useState('')

  return (
    <>
      <div>
        <Snowfall style={{ zIndex: 99 }} />
        <div className="bg-sendportions-hero min-h-48 bg-cover bg-[70%]">
          <div className="container px-3 py-28 text-light md:min-h-[30rem] md:px-2">
            <h1 className="relative max-w-3xl text-4xl font-black drop-shadow-2xl md:text-balance md:text-6xl">
              <ChristmasSantaCapIcon className="absolute -left-2 -top-3 size-6 -rotate-[30deg] pl-px md:size-8" />
              Send Portions at Christmas Outreaches and Crusades
            </h1>
            <div className="mt-6 flex w-full flex-wrap items-center gap-2 gap-y-3 md:max-w-96">
              <a
                href="#intro-video-section"
                className="btn flex items-center justify-center gap-2.5 border px-4 py-3 text-base ring-light/50 md:w-fit"
              >
                <MealForkPlateKnifeIcon className="size-5 pl-px" />
                <p>Give a Portion</p>
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

        <div className="bg-christmas-sendportion-cta min-h-[12rem] bg-cover px-3 py-10 text-white md:min-h-96">
          <h3 className="mb-2 text-center text-3xl font-bold capitalize md:text-4xl">
            Choose a Portion to Sponsor
          </h3>
          <p className="mx-auto max-w-2xl text-center">
            Join us to Send Portions of Christmas Gift Boxes to Children, Families and New Indigent
            Mums:
          </p>
        </div>

        <div className="relative mx-auto mb-10 min-h-48 md:mb-[33rem]">
          <div className="item-center left-0 right-0 flex w-full justify-center border-t-4 border-[#007853] md:border-4">
            <form className="-bottom-[270%] mx-auto min-h-48 w-full max-w-6xl rounded-md bg-white px-4 py-4 shadow md:absolute">
              <div className="flex flex-wrap items-center justify-center gap-5 md:grid md:grid-cols-3 md:items-start md:justify-start">
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
                        src={sendPortionHamperBag}
                        width="100"
                        height="100"
                        className={`w-full max-w-[12rem] animate-wiggle`}
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
                            toast('Plan selected 🎉')
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
                className="flex flex-col items-center justify-center py-6 pt-8 text-center"
              >
                <div className="mb-8 flex w-full flex-col items-center justify-center gap-5 rounded-md bg-red-50 py-8 md:flex-row">
                  <div className="flex flex-col gap-1">
                    <label className="font-semibold">Portion Quantity</label>
                    <NumberCounter onChange={(e) => setQuantityNumberMeter(String(e))} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="max-w-xs font-semibold">Destination Country</label>
                    <CountrySelect
                      className="w-56 bg-white"
                      onChange={(e) => setSelectedRegion(e.target.name)}
                      value={selectedRegion}
                    />
                  </div>
                </div>

                <HeartLoveIcon className="mx-auto text-red-700" size={40} />
                <h4 className="mx-auto mb-6 max-w-4xl text-center text-2xl font-bold capitalize text-red-800 md:text-3xl">
                  Ready to Make Someone Smile?
                </h4>
                <p className="mx-auto mb-8 max-w-2xl text-gray-700">
                  You’ve chosen:{' '}
                  <span className="font-semibold text-red-800">{quantityNumberMeter}</span> Portion
                  of
                  <span className="font-semibold text-red-800">
                    {quantityNumberMeter} Portions of
                    {selectedHamperPlan?.plan || 'No Box Selected'}
                  </span>{' '}
                  for{' '}
                  <span className="font-semibold text-red-800">
                    {selectedRegion || 'No Region Selected'}
                  </span>
                </p>
                <button type="submit" className="btn w-fit bg-[#007853] px-8 py-2.5 text-light">
                  Proceed to Donate
                </button>
              </section>
            </form>
          </div>
        </div>

        {/* <SendPortionsLanding /> */}
      </div>
    </>
  )
}

// export function SendPortionsLanding() {
//   const [selectedBox, setSelectedBox] = useState('')
//   const [selectedRegion, setSelectedRegion] = useState('')

//   const boxes = [
//     {
//       id: 'child',
//       title: 'Christmas Box for Children',
//       items: ['Food & Drink Pack', 'Gift Item', 'Rhapsody of Realities', 'Essentials'],
//     },
//     {
//       id: 'family',
//       title: 'Christmas Box for Families',
//       items: ['1-Month Food Parcel', 'ROR Family Pack'],
//     },
//     {
//       id: 'mum',
//       title: 'Christmas Box for New Mums',
//       items: ['Nutrition Pack', 'Newborn Essentials', 'Diaper Pack'],
//     },
//   ]

//   const regions = ['Nigeria', 'Kenya', 'Ghana', 'South Africa', 'India', 'Philippines']

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-red-100 to-white text-gray-800">
//       {/* 🎄 Hero Section */}
//       <section className="relative bg-[url('/christmas-bg.jpg')] bg-cover bg-center px-6 py-20 text-center">
//         <div className="absolute inset-0 bg-red-900/60" />
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10"
//         >
//           <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
//             Send Portions This Christmas 🎁
//           </h1>
//           <p className="mx-auto mb-8 max-w-2xl text-white/90">
//             Join The InnerCity Mission to share love, joy, and hope with children, families, and new
//             mums this Christmas.
//           </p>
//           <button className="bg-yellow-400 font-semibold text-black hover:bg-yellow-300">
//             Sponsor a Box
//           </button>
//         </motion.div>
//       </section>

//       {/* 📖 Scripture */}
//       <section className="px-6 py-12 text-center">
//         <h2 className="mb-3 text-2xl font-semibold text-red-800">Nehemiah 8:10</h2>
//         <p className="mx-auto max-w-2xl text-lg italic text-gray-700">
//           “Go, eat rich food, drink sweet drinks, and send portions to those who can’t provide for
//           themselves.”
//         </p>
//       </section>

//       {/* 🎁 Choose Box */}
//       <section className="bg-white px-6 py-14 text-center">
//         <h2 className="mb-10 text-3xl font-bold text-red-800">Choose a Christmas Box to Sponsor</h2>
//         <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
//           {boxes.map((box) => (
//             <div
//               key={box.id}
//               onClick={() => setSelectedBox(box.id)}
//               className={`w-full max-w-4xl cursor-pointer rounded-md border-2 bg-white px-2.5 py-3 shadow ${
//                 selectedBox === box.id ? 'border-yellow-500 bg-yellow-50' : 'border-gray-200'
//               } transition hover:shadow-lg`}
//             >
//               <div className="p-6">
//                 <HandGivingHeartIcon className="mx-auto mb-4 text-red-700" size={36} />
//                 <h3 className="mb-3 text-xl font-semibold">{box.title}</h3>
//                 <ul className="space-y-1 text-sm text-gray-700">
//                   {box.items.map((item, i) => (
//                     <li key={i}>• {item}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 🌍 Choose Region */}
//       <section className="bg-red-50 px-6 py-14 text-center">
//         <h2 className="mb-6 text-3xl font-bold text-red-800">Choose Where to Send</h2>
//         <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-4">
//           {regions.map((region) => (
//             <button
//               key={region}
//               onClick={() => setSelectedRegion(region)}
//               className={`rounded-full border-2 px-5 py-2 ${
//                 selectedRegion === region
//                   ? 'border-yellow-400 bg-yellow-400 text-black'
//                   : 'border-red-700 text-red-700 hover:bg-red-700 hover:text-white'
//               } transition`}
//             >
//               <ClockIcon className="mr-2 inline h-4 w-4" />
//               {region}
//             </button>
//           ))}
//         </div>
//       </section>

//       {/* ❤️ Donate Section */}
//       <section className="bg-gradient-to-b from-yellow-100 to-yellow-200 px-6 py-20 text-center">
//         <HeartLoveIcon className="mx-auto mb-4 text-red-600" size={40} />
//         <h2 className="mb-4 text-3xl font-bold text-red-800">Ready to Make Someone Smile?</h2>
//         <p className="mx-auto mb-8 max-w-2xl text-gray-700">
//           You’ve chosen:{' '}
//           <span className="font-semibold text-red-800">
//             {selectedBox ? boxes.find((b) => b.id === selectedBox)?.title : 'No Box Selected'}
//           </span>{' '}
//           for{' '}
//           <span className="font-semibold text-red-800">
//             {selectedRegion || 'No Region Selected'}
//           </span>
//         </p>
//         <button className="rounded-full bg-red-700 px-8 py-3 text-lg text-white hover:bg-red-800">
//           Proceed to Donate
//         </button>
//       </section>

//       {/* ✨ Footer */}
//       <footer className="border-t bg-white py-10 text-center text-sm text-gray-600">
//         © 2025 The InnerCity Mission — Send Portions Christmas Outreach
//       </footer>
//     </div>
//   )
// }
