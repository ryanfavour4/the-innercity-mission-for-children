// import DonateSection from '@/components/donate-component'
import DonateSectionV2 from '@/components/donate-component-v2'
import { VideoCard } from '@/components/video-card'
import CtaSection from '@/layouts/cta-section'
import EventsSection from '@/layouts/events-section'

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
    <div className="bg-white px-2 py-14">
      <div className="container max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="md:max-w-md">
            <DonateSectionV2 />
          </div>
          <div className="w-full max-w-3xl md:ml-auto">
            <VideoCard className="" />
          </div>
        </div>
      </div>
    </div>
  )
}
