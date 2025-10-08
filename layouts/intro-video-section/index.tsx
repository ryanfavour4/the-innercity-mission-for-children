import React from 'react'
import { VideoCard } from '@/components/video-card'

function IntroVideoSection() {
  return (
    <div className="relative min-h-20 overflow-hidden bg-secondary md:py-10">
      <div className="wrapper flex flex-col items-center justify-center">
        <div className="mb-0 flex flex-col items-center justify-center gap-2 px-4 text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">— ICM SCHOOL MEALS —</h2>
          <p>Help a child learn by giving the gift of a daily meal.</p>
        </div>

        {/* VIDEO */}
        <VideoCard iframe={true} />
      </div>
    </div>
  )
}

export default IntroVideoSection
