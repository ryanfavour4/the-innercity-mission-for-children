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
              thumbNail="https://i.vimeocdn.com/video/1919716639-ece272ce01e71688bf9f38e8ae005ee05f2016f35127ee072c2af755a29839cd-d?mw=1080&q=1080"
              videoUrl="https://player.vimeo.com/video/1003317911?h=cb2e7c8cf3"
              iframe={true}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
