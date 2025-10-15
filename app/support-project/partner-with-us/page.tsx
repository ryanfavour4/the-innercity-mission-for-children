'use client'
import { HandGivingHeartIcon, PartnerHandShakeIcon } from '@/components/svgs'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import spaceImage from '@/public/assets/images/po.jpg'
import billionMealImage from '@/public/assets/images/7billion.jpg'
import globalMissionImage from '@/public/assets/images/global-missions.jpg'
import indigentChildrenImage from '@/public/assets/images/indigent_children_family.jpg'
import signUpformImage from '@/public/assets/images/indigent-children-tuition-free-school-innercity.jpg'
import Input from '@/components/input'
import countries from '@/json/countries-list.json'
import axios from 'axios'
import CtaSection from '@/layouts/cta-section'
import { motion, Variants } from 'framer-motion'

export default function PartnerWithUsPage() {
  const [fullname, setFullname] = useState({ value: '' })
  const [email, setEmail] = useState({ value: '' })
  const [phone, setPhone] = useState({ value: '' })
  const [country, setCountry] = useState('NG')
  const [kingschatUsername, setKingschatUsername] = useState({ value: '' })
  const [amount, setAmount] = useState({ value: '' })

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 60, damping: 12, duration: 0.6 },
    },
  }

  const fadeInDown: Variants = {
    hidden: { opacity: 0, y: -40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 60, damping: 12, duration: 0.6 },
    },
  }

  const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -40 },
    show: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 60, damping: 12, duration: 0.6 },
    },
  }

  const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 40 },
    show: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 60, damping: 12, duration: 0.6 },
    },
  }

  const handleSubmitGemForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('action', 'partnerWithUs')
    formData.append('referrer', 'icm4c')
    formData.append('fullname', fullname.value)
    formData.append('email', email.value)
    formData.append('kingschat_username', kingschatUsername.value)
    formData.append('phone', phone.value)
    formData.append('currency', 'USD')
    formData.append('amount', amount.value)

    axios
      .post('/api/admin', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err))
  }

  return (
    <>
      <div className="bg-partner-with-us-hero bg-[100%,250%] bg-right-top px-2 py-24 md:min-h-96 md:bg-cover md:py-48">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          className="wrapper text-light"
        >
          <h1 className="text-4xl font-black md:text-5xl">Don&apos;t Ignore Children</h1>
          <p className="mb-8 mt-4 max-w-sm">
            Partner with the InnerCity Mission to to make a difference for needy children
          </p>
          <div className="flex w-full flex-wrap items-center gap-2 md:max-w-96">
            <Link
              href={'/donate'}
              className="btn-white flex w-fit items-center gap-2 border px-4 text-base ring-light/50"
            >
              <HandGivingHeartIcon className="text-2xl" />
              <p>Donate Now</p>
            </Link>
            <Link
              href="#partner-with-us"
              className="btn flex w-fit items-center gap-2 border px-4 text-base ring-light/50"
            >
              <PartnerHandShakeIcon className="text-2xl" />
              <p>Become A GEM</p>
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="bg-white px-2.5 py-6">
        <h2 className="mb-12 text-center text-2xl font-extrabold uppercase md:mb-24 md:text-3xl">
          — 5 prolific ways to be an impactful partner —
        </h2>

        {/* section 1 */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="show"
          className="container grid h-full max-w-5xl grid-cols-1 justify-center gap-2 md:grid-cols-2"
        >
          <div className="mr-auto h-96 w-full md:max-h-full md:max-w-96">
            <Image
              alt="Space Image"
              className="h-full w-full rounded-md object-cover object-center md:h-auto md:max-w-lg"
              src={spaceImage}
              width={400}
              height={450}
            />
          </div>
          <div className="flex h-full flex-col gap-5 gap-y-6 pb-2 md:gap-y-10 md:py-6">
            <h3 className="sub-header text-2xl font-semibold capitalize text-dark md:text-3xl">
              Sponsor A Child’s Education (SP.A.C.E)
            </h3>
            <p className="md:-mt-6">
              Education is a ticket out of poverty and provides the opportunity to realize their
              God-given potential. Through The SP.A.C.E (Sponsor-A-Child&apos;s Education) Campaign,
              we will be giving 5 million Indigent Children Access to Education and for those who
              have dropped out of school, the opportunity to complete their Education!
            </p>

            <div className="flex items-center gap-5">
              <Link className="btn-primary block w-fit !px-10 py-2" href={'/donate'}>
                Donate
              </Link>
              <a
                className="btn-white block w-fit py-2 ring-textcolor/25"
                href={'/what-we-do/educational-program'}
              >
                Learn More
              </a>
            </div>
          </div>
        </motion.div>

        {/* section 2 */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="show"
          className="container mt-8 flex h-full max-w-5xl flex-col-reverse justify-center gap-2 md:mt-16 md:grid md:grid-cols-2"
        >
          <div className="flex h-full flex-col gap-5 gap-y-6 pb-2 md:gap-y-10 md:py-6">
            <h3 className="sub-header text-2xl font-semibold capitalize text-dark md:text-3xl">
              #7BillionMeals Campaign
            </h3>
            <p className="md:-mt-6">
              The “7 Billion Meals Campaign” is a historic effort of the InnerCity Mission to tackle
              the global issue of hunger by distributing 7 billion meals and more to children and
              families in dire need around the world.
            </p>

            <div className="flex items-center gap-5">
              <Link className="btn-primary block w-fit !px-10 py-2" href={'/donate'}>
                Donate
              </Link>
              <a
                className="btn-white block w-fit py-2 ring-textcolor/25"
                href={'/special-highlights/7billionmeals'}
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="ml-auto h-96 w-full md:max-h-full md:max-w-96">
            <Image
              alt="7 billion campaign"
              className="h-full w-full rounded-md object-cover object-top md:h-auto md:max-w-lg"
              src={billionMealImage}
              width={400}
              height={450}
            />
          </div>
        </motion.div>

        {/* section 1 */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="show"
          className="container mt-8 grid h-full max-w-5xl grid-cols-1 justify-center gap-2 md:mt-16 md:grid-cols-2"
        >
          <div className="mr-auto h-96 w-full md:max-h-full md:max-w-96">
            <Image
              alt="Global Missions"
              className="h-full w-full rounded-md object-cover object-center md:h-auto md:max-w-lg"
              src={globalMissionImage}
              width={400}
              height={450}
            />
          </div>
          <div className="flex h-full flex-col gap-5 gap-y-6 pb-2 md:gap-y-10 md:py-6">
            <h3 className="sub-header text-2xl font-semibold capitalize text-dark md:text-3xl">
              Global Missions
            </h3>
            <p className="md:-mt-6">
              Join us to take the 100 nations identified where the need is greatest and rid the poor
              and needy out of the hands of the wicked and deliver them into their inheritance in
              Christ.
            </p>

            <div className="flex items-center gap-5">
              <Link className="btn-primary block w-fit !px-10 py-2" href={'/donate'}>
                Donate
              </Link>
              <a
                className="btn-white block w-fit py-2 ring-textcolor/25"
                href={'/blogs/global-missions-initiative-takes-full-swing-in-uganda-and-ethiopia/'}
              >
                Learn More
              </a>
            </div>
          </div>
        </motion.div>

        {/* section 2 */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="show"
          className="container mt-8 flex h-full max-w-5xl flex-col-reverse justify-center gap-2 md:mt-16 md:grid md:grid-cols-2"
        >
          <div className="flex h-full flex-col gap-5 gap-y-6 pb-2 md:gap-y-10 md:py-6">
            <h3 className="sub-header text-2xl font-semibold capitalize text-dark md:text-3xl">
              Preserve Families
            </h3>
            <p className="md:-mt-6">
              Through your partnership, we will be reaching and providing Food Support, Skill
              Acquisition, Capacity Building and Grants for families in dire need through our Women
              Economic Empowerment Initiatives [WEEI] in over 5 million households globally
            </p>

            <div className="flex items-center gap-5">
              <Link className="btn-primary block w-fit !px-10 py-2" href={'/donate'}>
                Donate
              </Link>
              <a
                className="btn-white block w-fit py-2 ring-textcolor/25"
                href={'/what-we-do/family-strengthen-program'}
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="ml-auto h-96 w-full md:max-h-full md:max-w-96">
            <Image
              alt="Preserve Families"
              className="h-full w-full rounded-md object-cover object-top md:h-auto md:max-w-lg"
              src={indigentChildrenImage}
              width={400}
              height={450}
            />
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center bg-primary px-3 py-20 text-center text-light">
        <h3 className="mb-4 max-w-4xl text-3xl font-bold !leading-tight md:text-5xl">
          Sign Up to Partner With Us Reach the Unreached, Touch the Untouched
        </h3>
        <Link
          href={'/donate'}
          className="btn-white flex w-fit items-center gap-2 border px-4 text-base ring-light/50"
        >
          <PartnerHandShakeIcon className="text-2xl" />
          <p>Signup as a Partner</p>
        </Link>
      </div>

      <div id="partner-with-us" className="flex flex-col-reverse gap-4 bg-white pb-8 md:flex-row">
        <motion.form
          variants={fadeInRight}
          initial="hidden"
          whileInView="show"
          onSubmit={handleSubmitGemForm}
          className="px-4 py-6 md:ml-auto md:w-1/2 md:max-w-lg md:py-16"
        >
          <h3 className="text-xl font-bold md:text-2xl">Every Child Needs a G.E.M</h3>
          <p>Sign up to Give Every Month (G.E.M)</p>

          <div className="mt-6 flex flex-col gap-3 md:grid md:grid-cols-2">
            <div className="flex flex-col">
              <label className="text-sm font-semibold" htmlFor="name">
                Name
              </label>
              <Input
                placeholder="Enter your name"
                type="text"
                required
                state={fullname}
                setState={setFullname}
                name="name"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold" htmlFor="email">
                Email
              </label>
              <Input
                placeholder="Enter your email"
                type="email"
                required
                state={email}
                setState={setEmail}
                name="email"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold" htmlFor="country">
                Country
              </label>
              <select
                onChange={(e) => setCountry(e.target.value)}
                value={country}
                className="input-field"
                id="country"
                name="country"
              >
                {countries.map(({ code, name }) => (
                  <option key={code} value={code}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold" htmlFor="phone">
                Phone
              </label>
              <Input
                placeholder="Enter your phone number"
                type="tel"
                required
                state={phone}
                setState={setPhone}
                name="phone"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold" htmlFor="kingschat_username">
                Kings Chat Username
              </label>
              <Input
                placeholder="Enter your Kingschat username"
                type="text"
                required
                state={kingschatUsername}
                setState={setKingschatUsername}
                name="kingschat_username"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold" htmlFor="amount">
                Monthly Giving Amount ($)
              </label>
              <Input
                placeholder="Monthly Giving Amount $"
                type="text"
                required
                state={amount}
                setState={setAmount}
                name="amount"
              />
            </div>

            <button type="submit" className="btn-primary col-span-2 mt-6">
              I am ready
            </button>
          </div>
        </motion.form>
        <motion.div variants={fadeInDown} initial="hidden" whileInView="show" className="md:w-1/2">
          <Image
            alt="Space Image"
            className="h-96 w-full rounded-b-full object-cover md:mx-auto md:aspect-[unset] md:h-full md:w-3/5"
            src={signUpformImage}
            width={400}
            height={450}
          />
        </motion.div>
      </div>

      <CtaSection />
    </>
  )
}
