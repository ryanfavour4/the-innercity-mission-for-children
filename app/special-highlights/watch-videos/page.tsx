'use client'
export const dynamic = 'force-dynamic'

import React, { useEffect, useState } from 'react'
import Input from '@/components/input'
import countries from '@/json/countries-list.json'
import VideoPlayer from '@/components/video-player'
import MetaTags from '@/meta'
import CtaSection from '@/layouts/cta-section'
import axios from 'axios'
import videosData from '@/json/videos.json'
import { useSearchParams } from 'next/navigation'

export default function LiveStreamPage() {
  const searchParams = useSearchParams()
  const videoCode = searchParams.get('video')
  const [videoInView, setVideoInView] = useState<(typeof videosData)[0] | null>(null)

  console.log(videoCode)
  console.log(videosData)
  console.log(videoInView)
  const [fullname, setFullname] = useState({ value: '' })
  const [email, setEmail] = useState({ value: '' })
  const [message, setMessage] = useState({ value: '' })
  const [country, setCountry] = useState('NG')

  const handleSubmitGemForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('action', 'nysForm')
    formData.append('fullname', fullname.value)
    formData.append('email', email.value)
    formData.append('country', country)
    formData.append('message', message.value)

    axios
      .post('/api/admin', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err))
  }

  useEffect(() => {
    const activeVideo = videosData.filter((vid) => vid.code === videoCode)
    setVideoInView(activeVideo[0])
  }, [videoCode])

  return (
    <>
      <MetaTags title="Watch Videos – InnerCity Mission HQ" />
      <div className="bg-white py-6">
        <div className="wrapper">
          <h3 className="sub-header max-w-md text-2xl font-semibold before:top-4 md:text-3xl">
            Watch Video
          </h3>
          <p>{videoInView?.title || 'No Video'}</p>
        </div>

        <div className="wrapper mt-6 grid grid-cols-12 gap-6">
          <div className="col-span-12 flex flex-col gap-4 md:col-span-7 lg:col-span-8">
            <VideoPlayer
              src={
                videoInView?.url ||
                'https://playlist.dacast.com/live/602498bd0ab279ef90d21c11e370e84f-live-ba817332-b74a-3b86-e4ae-0a059bdc404d/master.m3u8'
              }
              className="w-full !max-w-6xl md:!h-full"
            />

            <h4 className="ellipsis-2 text-xl font-bold uppercase md:text-2xl">
              {videoInView?.title || 'No Video'}
            </h4>
          </div>
          <div className="rounlg col-span-12 border-2 px-2 py-3 md:col-span-5 lg:col-span-4">
            <h3 className="text-balance text-lg font-semibold">Send a message to us</h3>
            <hr className="my-2.5" />
            <form
              onSubmit={handleSubmitGemForm}
              className="mt-6 flex flex-col gap-3 md:grid md:grid-cols-2"
            >
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
              <div className="col-span-2 flex flex-col">
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
              <div className="col-span-2 flex flex-col">
                <label className="text-sm font-semibold" htmlFor="message">
                  Message
                </label>
                <Input
                  placeholder="Write your message"
                  type="text-area"
                  required
                  state={message}
                  setState={setMessage}
                  name="message"
                />
              </div>

              <button type="submit" className="btn-primary col-span-2 mt-6">
                Share
              </button>
            </form>
          </div>
        </div>
      </div>

      <hr />
      <CtaSection />
    </>
  )
}
