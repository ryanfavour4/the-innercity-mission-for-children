'use client'
import React, { useState } from 'react'
import countries from '@/json/countries-list.json'
import Input from '../input'
import { abbreviateNumber, unformatNumber } from '@/utils/format-number'

export default function DonateSectionV2({
  givingItemDescription = 'Donation & Support for the InnerCity Mission',
}: {
  givingItemDescription?: string
}) {
  const amountList = ['1000', '20000', '50000', '100000']
  const paymentTypeList = ['Local', 'International', 'Bank Transfer']
  const [amount, setAmount] = useState({ value: '' })
  const [paymentType, setPaymentType] = useState({ value: 'Local' })
  const [fullname, setFullname] = useState({ value: '' })
  const [email, setEmail] = useState({ value: '' })
  const [country, setCountry] = useState('NG')
  const [sponsoring, setSponsoring] = useState('Send Portions')
  const [submitting, setSubmitting] = useState(false)

  return (
    <>
      <section id="donate-section" className="relative md:px-0">
        {submitting && (
          <div className="absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-dark/25 text-center text-lg font-semibold text-dark backdrop-blur">
            Submitting... please wait
          </div>
        )}

        <form
          method="post"
          onSubmit={() => setSubmitting(true)}
          action="https://gateway.theinnercitymission.ngo/pay"
          className="flex w-full flex-col items-start overflow-hidden rounded-md border border-textcolor/25 bg-white px-3 pb-4 pt-1"
        >
          <div className="flex w-full flex-wrap items-center justify-between gap-1 border-b border-textcolor/25 pt-1.5 lg:gap-3">
            {paymentTypeList.map((item) => (
              <button
                type="button"
                onClick={() => setPaymentType({ value: item })}
                key={item}
                className={`w-fit px-3 py-1.5 text-base lg:px-4 ${paymentType.value === item ? 'border-b-2 border-primary font-medium text-primary' : 'bg-transparent text-textcolor/75'}`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mt-4 grid w-full grid-cols-2 gap-x-4 gap-y-2">
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
                placeholder="Email"
                type="email"
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
              <label className="text-sm font-semibold" htmlFor="item">
                Sponsoring
              </label>
              <select
                onChange={(e) => setSponsoring(e.target.value)}
                value={sponsoring}
                className="input-field"
                id="item"
                name="item"
              >
                <option value="Send Portions">Send Portions</option>
                <option value="7 Billion Meal Campaign">7 Billion Meals Campaign</option>
                <option value="Colouring Dreams Conference">
                  Colouring Dreams Conference 2025{' '}
                </option>
                <option value="Sponsor A Child's Education S.P.A.C.E">
                  Sponsor A Child&apos;s Education S.P.A.C.E
                </option>
                <option value="Back to School">Back to School</option>
                <option value="School Building Projects">School Building Projects</option>
                <option value="Food Parcel For The Needy Family">
                  Food Parcel For The Needy Family
                </option>
                <option value="HAM Campaign">Hunger Action Month</option>
                <option value="#EndChildPovertyNow Campaign: ACTION AGAINST HUNGER">
                  #EndChildPovertyNow
                </option>
                <option value="Feed A Child">Feed A Child</option>
                <option value="Support A Family">Support A Family</option>
                {/* <option  value="Books on Wheels Initiative">Books on Wheels Initiative</option> */}
                {/* <option  value="Send Portions in July">Send Portions in July</option> */}
                {/* <option  value="The $1 Challenge">The $1 Challenge</option> */}
              </select>
            </div>

            <div className="col-span-2">
              <label className="text-sm font-semibold" htmlFor="amount">
                Amount
              </label>
              <div className="flex h-fit w-full gap-1">
                <div className="flex aspect-1 max-h-12 items-center justify-center rounded-md border border-textcolor/50 px-3 text-sm text-textcolor/75 md:max-h-11">
                  ₦
                </div>
                <Input
                  placeholder="Enter other amount..."
                  type="number"
                  state={amount}
                  required
                  className="w-full"
                  setState={setAmount}
                  name="amount"
                />
              </div>
            </div>

            <div className="col-span-2 grid grid-cols-4 gap-x-5 gap-y-2">
              {amountList.map((item) => (
                <div
                  key={item}
                  onClick={() => setAmount({ value: item })}
                  className={`flex cursor-pointer items-center justify-center rounded-md border border-primary px-2 py-2 hover:ring-2 ${unformatNumber(amount.value) === item ? 'bg-primary !text-white' : 'bg-white text-textcolor/75'}`}
                >
                  <p className="text-sm font-medium">₦{abbreviateNumber(Number(item))}</p>
                </div>
              ))}
            </div>
            <small className="text-xs">Help as much as you want</small>

            {/* INVISIBLE TAGS FOR TRACKING DONATIONS  */}
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
                state={{ value: givingItemDescription }}
                setState={() => {
                  return { value: '' }
                }}
                name="item"
              />
              <Input
                type="hidden"
                state={{ value: givingItemDescription }}
                setState={() => {
                  return { value: '' }
                }}
                name="given-description"
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

            <button type="submit" className="btn-primary col-span-2">
              Donate
            </button>
          </div>
        </form>
      </section>
    </>
  )
}
