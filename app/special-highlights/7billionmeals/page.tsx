'use client'
import axios from 'axios'
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
  const [church, setChurch] = useState({ value: '' })
  const [zone, setZone] = useState({ value: '' })
  const [report, setReport] = useState({ value: '' })
  const [link, setLink] = useState({ value: '' })

  const handleSubmitRegisterEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    window.location.reload()
  }

  const handleSubmitReport = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('action', 'pastor_relief')
    formData.append('current_form', 'upload_report')
    formData.append('email', email.value)
    formData.append('fullname', fullname.value)
    formData.append('church', church.value)
    formData.append('zone', zone.value)
    formData.append('report', report.value)
    formData.append('download_link', link.value)

    axios
      .post('/api/billion-meal/upload-report', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err))
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
              Register
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
        <form onSubmit={handleSubmitReport} className="!w-full rounded-xl bg-light px-4 py-4 pt-6">
          <h3 className="font-bold">Upload Report Details</h3>

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
              <label className="text-sm font-semibold" htmlFor="church">
                Church
              </label>
              <Input
                placeholder="Enter your Church name"
                type="text"
                required
                state={church}
                setState={setChurch}
                name="church"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold" htmlFor="zone">
                Zone
              </label>
              <Input
                placeholder="Enter your zone name"
                type="text"
                required
                state={zone}
                setState={setZone}
                name="zone"
              />
            </div>
            <div className="col-span-2 flex flex-col">
              <label className="text-sm font-semibold" htmlFor="report">
                Report Note
              </label>
              <Input
                placeholder="Draft your report note"
                type="text-area"
                required
                state={report}
                setState={setReport}
                name="report"
              />
            </div>
            <div className="col-span-2 flex flex-col">
              <label className="text-sm font-semibold" htmlFor="link">
                Download Link
              </label>
              <Input
                placeholder="paste your video link here"
                type="link"
                required
                state={link}
                setState={setLink}
                name="link"
              />
              <small className="mt-2 text-xs">
                Download link (Kindly upload your pictures & videos using KingsCloud, dropbox.com or
                drive.google.com. Copy and paste the link in Download Link field)
                <br />
                <br />
                <strong>NOTE:</strong> The report will be reviewed within 24 hours.
                <br /> If you need help with this, please use the livechat button to chat with the
                tech team
              </small>
            </div>

            <button type="submit" className="btn-primary col-span-2 mt-6">
              Submit Report
            </button>
          </div>
        </form>
      </Modal>
    </>
  )
}

export default BillionMealsPage
