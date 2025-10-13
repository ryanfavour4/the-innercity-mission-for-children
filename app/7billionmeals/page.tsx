'use client'
import Modal from '@/components/modal'
import countries from '@/json/countries-list.json'
import HeroSection7bm from '@/layouts/7billionmeals-sections/hero-section'
import About7BmcSection from '@/layouts/7billionmeals-sections/about-7bmc-section'
import DonateVideo7BmcSection from '@/layouts/7billionmeals-sections/donate-video-7bmc-section'
import RegisterCta7bmcSection from '@/layouts/7billionmeals-sections/register-cta-7bmc-section'
import { useModal } from '@/components/modal/useModal'
import { useEffect, useState } from 'react'
import Input from '@/components/input'
import TopBlogSection from '@/layouts/top-blog-section'
import CtaSection from '@/layouts/cta-section'
import MetaTags from '@/meta'

function BillionMealsPage() {
  const { closeModal, isModalClosed, openModal } = useModal()
  const {
    closeModal: closeModalReport,
    isModalClosed: isModalClosedReport,
    openModal: openModalReport,
  } = useModal()
  const [fullname, setFullname] = useState({ value: '' })
  const [email, setEmail] = useState({ value: '' })
  const [phone, setPhone] = useState({ value: '' })
  const [country, setCountry] = useState('NG')

  const handleSubmitRegisterEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    window.location.reload()
  }

  useEffect(() => {
    if (window.location.hash.includes('register-event')) openModal()
    else if (window.location.hash.includes('upload-report')) openModalReport()
    else {
      closeModal()
      closeModalReport()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <MetaTags title="7 Billion Meals | InnerCity Mission HQ" />

      <div>
        <HeroSection7bm openRegisterModal={openModal} />
        <About7BmcSection />
        <DonateVideo7BmcSection />
        <RegisterCta7bmcSection openRegisterModal={openModal} openReportModal={openModalReport} />
        <TopBlogSection />
        <CtaSection />
      </div>

      {/* REGISTER MODAL */}
      <Modal closeModal={closeModal} className="w-full max-w-xl" isModalClosed={isModalClosed}>
        <form
          onSubmit={handleSubmitRegisterEvent}
          className="!w-full rounded-xl bg-light px-4 py-4 pt-6"
        >
          <h3 className="font-bold">Register To Participate</h3>

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
                Phone Number
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

            <button type="submit" className="btn-primary col-span-2 mt-6">
              Donate
            </button>
          </div>
        </form>
      </Modal>

      {/* UPLOAD REPORT MODAL */}
      <Modal
        closeModal={closeModalReport}
        className="w-full max-w-xl"
        isModalClosed={isModalClosedReport}
      >
        <form target="" className="!w-full rounded-xl bg-light px-4 py-4 pt-6">
          <h3 className="font-bold">Register To Participate</h3>

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
                Phone Number
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

            <button type="submit" className="btn-primary col-span-2 mt-6">
              Donate
            </button>
          </div>
        </form>
      </Modal>
    </>
  )
}

export default BillionMealsPage
