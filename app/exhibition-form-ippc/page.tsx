'use client'
import React, { useState } from 'react'
import logoDefault from '@/public/assets/icons/logo-black-text.png'
import Image from 'next/image'
import Input from '@/components/input'
import CountrySelect from '@/components/country-select'
import PhoneInput from 'react-phone-input-2'
import axios from 'axios'
import { toast } from 'react-toastify'

export default function Page() {
  const [name, setName] = useState({ value: '' })
  const [kcHandle, setKcHandle] = useState({ value: '' })
  const [email, setEmail] = useState({ value: '' })
  const [zone, setZone] = useState({ value: '' })
  const [areaOfInterest, setAreaOfInterest] = useState({ value: '' })
  const [country, setCountry] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async () => {
    setLoading(true)
    axios
      .post('/api/ippc-exhibition-register', {
        name: name.value,
        kc_handle: kcHandle.value,
        email: email.value,
        phone: phoneNumber,
        country: country,
        zone: zone.value,
        area_of_interest: areaOfInterest.value,
      })
      .then((res) => {
        const responseText = res.data.message || 'Submitted successfully'
        setMessage(responseText)
        toast.success(responseText)
      })
      .catch((err) => {
        console.log(err)
        const responseText = err.data.message || err.message || 'Something went wrong'
        setMessage(responseText)
        toast.error(responseText)
      })
      .finally(() => setLoading(false))
  }

  return (
    <div className="pb-6">
      <div className="bg-exhibition-form-ippc min-h-48 border-2 bg-cover bg-center py-2 text-light">
        <div className="container px-4 pb-16">
          <Image
            src={logoDefault.src}
            unoptimized
            alt="logo"
            className="ml-auto w-16 md:w-24"
            width={100}
            height={50}
          />
          <h1 className="max-w-2xl text-3xl font-black leading-snug drop-shadow-2xl md:text-5xl md:leading-tight">
            Greetings From The Innercity Mission for Children (icm4c)
          </h1>
        </div>
      </div>
      <div className="mx-auto -mt-8 h-full max-w-3xl rounded border bg-light px-5 py-4 shadow md:px-4">
        <h2 className="font-semibold">🥰 We’re glad you stopped by our stand today.</h2>
        <p className="">
          Kindly fill in your details — we’d love to connect with you beyond the exhibition.
        </p>

        {message && <p className="mt-3 bg-secondary py-4 text-center text-sm">{message}</p>}

        <div className="f mt-8 flex flex-col gap-5 md:grid md:grid-cols-2">
          <div className="col-span-2">
            <label htmlFor="name" className="text-base font-medium">
              Full Name
            </label>
            <Input name="name" setState={setName} state={name} type="text" />
          </div>
          <div className="">
            <label htmlFor="kcHandle" className="text-base font-medium">
              KingChat Handle
            </label>
            <Input name="kcHandle" setState={setKcHandle} state={kcHandle} type="text" />
          </div>
          <div className="">
            <label htmlFor="email" className="text-base font-medium">
              Email
            </label>
            <Input name="email" setState={setEmail} state={email} type="email" />
          </div>
          <div className="">
            <label htmlFor="email" className="text-base font-medium">
              Phone Number
            </label>
            <PhoneInput
              country={'ng'}
              placeholder="e.g +2348012345678"
              value={phoneNumber}
              onChange={(phone) => setPhoneNumber(phone)}
              inputClass="!w-full !h-11 active:ring-4"
              buttonClass="!bg-light !active:ring-2 !shadow-none"
              containerClass="w-full !bg-transparent !outline-none !border-0"
            />
          </div>
          <div className="">
            <label htmlFor="country" className="text-base font-medium">
              Country
            </label>
            <CountrySelect
              className=""
              onChange={(e) => setCountry(e.target.name)}
              value={country}
            />
          </div>
          <div className="">
            <label htmlFor="zone" className="text-base font-medium">
              Zone
            </label>
            <Input name="zone" setState={setZone} state={zone} type="text" />
          </div>
          <div className="">
            <label htmlFor="zone" className="text-base font-medium">
              Area Of Interest
            </label>
            <Input
              name="areaOfInterest"
              setState={setAreaOfInterest}
              state={areaOfInterest}
              type="text"
            />
          </div>

          <button disabled={loading} onClick={handleSubmit} className="btn-primary col-span-2">
            {loading ? 'Submitting...' : ' Submit'}
          </button>
        </div>
      </div>
    </div>
  )
}
