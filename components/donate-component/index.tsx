import React, { useEffect, useRef, useState } from 'react'
import Input from '../input'
import { ChevronRightIcon, HeartLoveIcon } from '../svgs'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { abbreviateNumber, unformatNumber } from '@/utils/format-number'

export default function DonateSection() {
  const [amount, setAmount] = useState({ value: '' })
  const [paymentType, setPaymentType] = useState({ value: 'Local' })
  const [fullname, setFullname] = useState({ value: '' })
  const [email, setEmail] = useState({ value: '' })
  const [phone, setPhone] = useState({ value: '' })
  const [country, setCountry] = useState({ value: '' })
  const [zone, setZone] = useState({ value: '' })
  const [submitting] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null)

  const handleNextSlide = () => {
    swiperRef.current?.swiper.slideNext()
  }

  const handlePrevSlide = () => {
    swiperRef.current?.swiper.slidePrev()
  }

  const handleSubmit = () => {
    console.log('')
  }

  useEffect(() => {
    if (localStorage.getItem('fullname') && localStorage.getItem('zone')) {
      setFullname({ value: localStorage.getItem('fullname') || '' })
      setEmail({ value: localStorage.getItem('email') || '' })
      setPhone({ value: localStorage.getItem('phone') || '' })
      setCountry({ value: localStorage.getItem('country') || '' })
      setZone({ value: localStorage.getItem('zone') || '' })
    }
  }, [swiperRef])

  const slides = [
    <DonateSlideOne
      amount={amount}
      paymentType={paymentType}
      setPaymentType={setPaymentType}
      setAmount={setAmount}
      fullname={fullname}
      setFullname={setFullname}
      email={email}
      setEmail={setEmail}
      country={country}
      setCountry={setCountry}
      phone={phone}
      setPhone={setPhone}
      zone={zone}
      setZone={setZone}
      handleNextSlide={handleNextSlide}
      handlePrevSlide={handlePrevSlide}
      handleSubmit={handleSubmit}
      key="slide-1"
    />,
    <DonateSlideTwo
      amount={amount}
      paymentType={paymentType}
      setPaymentType={setPaymentType}
      setAmount={setAmount}
      fullname={fullname}
      setFullname={setFullname}
      email={email}
      setEmail={setEmail}
      country={country}
      setCountry={setCountry}
      phone={phone}
      setPhone={setPhone}
      zone={zone}
      setZone={setZone}
      handleNextSlide={handleNextSlide}
      handlePrevSlide={handlePrevSlide}
      handleSubmit={handleSubmit}
      key="slide-2"
    />,
  ]

  const TopNavigator = () => {
    return (
      <div className="mb-4 flex w-full items-center justify-between rounded-md bg-primary px-2 py-3">
        <span onClick={handlePrevSlide}>
          <ChevronRightIcon className="btn-white w-fit rotate-180 cursor-pointer px-1 py-1 text-3xl text-primary" />
        </span>
        <span onClick={handleNextSlide}>
          <ChevronRightIcon className="btn-white w-fit cursor-pointer px-1 py-1 text-3xl text-primary" />
        </span>
      </div>
    )
  }

  return (
    <>
      <section id="donate-section" className="relative px-2.5 md:px-0">
        {submitting && (
          <div className="absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-dark/25 text-center text-lg font-semibold text-dark backdrop-blur">
            Submitting... please wait
          </div>
        )}
        <h3 className="text-xl font-semibold uppercase">Donate Today</h3>
        <p className="text-base">
          Make a donation to a CD CON and make a child&apos;s dream colorful today.
        </p>

        <div className="mt-4 overflow-hidden rounded-xl">
          <form
            method="post"
            action="https://gateway.theinnercitymission.ngo/pay"
            className="flex items-start"
          >
            {/* SLIDE */}
            <>
              <Swiper
                className=""
                ref={swiperRef}
                modules={[Navigation]}
                slidesPerView={1}
                spaceBetween={10}
              >
                <SwiperSlide>
                  <div className="!w-full">
                    <TopNavigator />
                    {slides[0]}
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="!w-full">
                    <TopNavigator />
                    {slides[1]}
                  </div>
                </SwiperSlide>
              </Swiper>
            </>
          </form>
          {/* indications
          <div className="mb-4 flex w-full items-center justify-center gap-2 p-2">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full border border-primary ${activeSlide === i + 1 ? 'bg-primary' : 'bg-grey-100'}`}
              />
            ))}
          </div> */}
        </div>
      </section>
    </>
  )
}

type TDonateSlideProps = {
  handleNextSlide: () => void
  handlePrevSlide: () => void
  handleSubmit: () => void
  amount: {
    value: string
  }
  setAmount: React.Dispatch<
    React.SetStateAction<{
      value: string
    }>
  >
  paymentType: {
    value: string
  }
  setPaymentType: React.Dispatch<
    React.SetStateAction<{
      value: string
    }>
  >
  fullname: {
    value: string
  }
  setFullname: React.Dispatch<
    React.SetStateAction<{
      value: string
    }>
  >
  email: {
    value: string
  }
  setEmail: React.Dispatch<
    React.SetStateAction<{
      value: string
    }>
  >
  country: {
    value: string
  }
  setCountry: React.Dispatch<
    React.SetStateAction<{
      value: string
    }>
  >
  phone: {
    value: string
  }
  setPhone: React.Dispatch<
    React.SetStateAction<{
      value: string
    }>
  >
  zone: {
    value: string
  }
  setZone: React.Dispatch<
    React.SetStateAction<{
      value: string
    }>
  >
}

function DonateSlideOne({
  amount,
  setAmount,
  paymentType,
  setPaymentType,
  handleNextSlide,
  // handlePrevSlide,
}: TDonateSlideProps) {
  const amountList = ['1000', '5000', '10000', '20000', '50000', '100000', '250000']
  const paymentTypeList = ['Local', 'International', 'Bank Transfer']

  return (
    <div className="w-full px-1">
      <div className="flex w-full flex-wrap items-center gap-1.5 rounded-md border border-primary px-1.5 py-1.5 md:justify-between md:gap-2 lg:gap-4">
        {paymentTypeList.map((item) => (
          <button
            type="button"
            onClick={() => setPaymentType({ value: item })}
            key={item}
            className={`w-fit border border-primary py-1.5 ${paymentType.value === item ? 'btn-primary' : 'btn-white text-primary'}`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        {amountList.map((item) => (
          <React.Fragment key={item}>
            {/* AMOUNT CARD */}
            <div
              onClick={() => setAmount({ value: item })}
              className={`flex cursor-pointer items-center justify-center rounded-md border border-primary px-2 py-2 hover:ring-2 ${unformatNumber(amount.value) === item ? 'bg-fade-blue' : 'bg-white'}`}
            >
              <span className="flex size-8 items-center justify-center rounded-md bg-primary/25">
                <HeartLoveIcon />
              </span>
              <div className="flex flex-1 items-center justify-center gap-2">
                <hr className="h-1 w-8 rounded-full bg-textcolor/75" />
                <h4 className="text-base font-semibold text-textcolor">
                  ₦{abbreviateNumber(Number(item))}
                </h4>
              </div>
            </div>
          </React.Fragment>
        ))}

        <div className="col-span-2 gap-y-4 rounded-md border border-primary px-2 py-2">
          <div className="mb-4 flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-md bg-primary/25">
              <HeartLoveIcon />
            </span>
            <h4 className="text-lg font-semibold">Help as much as you want</h4>
          </div>

          <div className="flex items-center">
            <span className="btn w-fit py-2.5 ring-1">₦</span>
            <Input
              placeholder="Enter other amount..."
              type="number"
              state={amount}
              required
              setState={setAmount}
              name="amount"
            />
          </div>
          <div className="invisible">
            <Input
              type="hidden"
              state={{ value: 'NGN' }}
              setState={() => {
                return { value: '' }
              }}
              name="currency"
            />
            <Input
              type="hidden"
              state={{ value: 'CDCON ZONAL EDITION' }}
              setState={() => {
                return { value: '' }
              }}
              name="item"
            />
            <Input
              type="hidden"
              state={{ value: 'https://theinnercitymission.ngo/donate/?action=step-2' }}
              setState={() => {
                return { value: '' }
              }}
              name="domain"
            />
            <Input
              type="hidden"
              state={{ value: 'icm4c' }}
              setState={() => {
                return { value: '' }
              }}
              name="txn_prefix"
            />
            <Input
              type="hidden"
              state={{ value: 'icm4c' }}
              setState={() => {
                return { value: '' }
              }}
              name="dept"
            />
            <Input
              type="hidden"
              state={paymentType}
              setState={() => {
                return { value: '' }
              }}
              name="paymentType"
            />
          </div>
        </div>

        <button type="button" onClick={handleNextSlide} className="btn-primary col-span-2">
          Donate
        </button>
      </div>
    </div>
  )
}

function DonateSlideTwo({
  handleSubmit,
  country,
  email,
  fullname,
  phone,
  setCountry,
  setEmail,
  setFullname,
  setPhone,
  setZone,
  zone,
}: TDonateSlideProps) {
  return (
    <div className="w-full px-1">
      <div className="flex flex-col gap-5">
        <Input
          placeholder="Full Name"
          type="text"
          required
          state={fullname}
          setState={setFullname}
          name="name"
        />
        <Input placeholder="Email" type="email" state={email} setState={setEmail} name="email" />
        <Input
          placeholder="Country"
          type="text"
          required
          state={country}
          setState={setCountry}
          name="country"
        />
        <Input
          placeholder="Phone"
          type="tel"
          required
          state={phone}
          setState={setPhone}
          name="phone"
        />
        <Input
          placeholder="C.E Zone"
          type="text"
          required
          state={zone}
          setState={setZone}
          name="zone"
        />

        <button type="submit" onClick={handleSubmit} className="btn-primary mt-6">
          Donate
        </button>
      </div>
    </div>
  )
}
