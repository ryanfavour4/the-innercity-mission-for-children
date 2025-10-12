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
    <div className="bg-white py-14">
      <div className="container">
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="md:max-w-md">
            <DonateSectionV2 />
          </div>
          <div className="w-full max-w-3xl md:ml-auto">
            <VideoCard
              className=""
              thumbNail="https://i.vimeocdn.com/video/2051672422-9eeae56bb17ce34f277a44ab6c3688ccd51f8278dda7673cfa8d412b54298cda-d?mw=800&mh=533&q=70"
              videoUrl="https://player.vimeo.com/video/1113227827?h=9ca3e574ed"
              iframe={true}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
