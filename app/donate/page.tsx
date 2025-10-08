import DonateSection from '@/components/donate-component'
import { VideoCard } from '@/components/video-card'
import CtaSection from '@/layouts/cta-section'
import EventsSection from '@/layouts/events-section'
import React from 'react'

export default function DonatePage() {
  return (
    <div>
      <VideoDonate />
      <CtaSection />
      <EventsSection />
    </div>
  )
}

function VideoDonate({}) {
  return (
    <div className="bg-white py-14">
      <div className="container">
        <div className="gap-6 md:grid md:grid-cols-12">
          <div className="md:col-span-5">
            <DonateSection />
          </div>
          <div className="h-96 md:col-span-7">
            <VideoCard
              className="h-96"
              videoUrl="https://player.vimeo.com/video/1113227827?h=9ca3e574ed&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              iframe={true}
            />
          </div>
        </div>
      </div>
    </div>
  )
}