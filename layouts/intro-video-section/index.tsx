import React from 'react'
import { VideoCard } from '@/components/video-card'

function IntroVideoSection() {
  return (
    <div className="relative min-h-20 overflow-hidden bg-light py-10">
      <div className="wrapper flex items-center justify-center">
        {/* /* BLUE HALF CIRCLE BACKDROP */}
        {/* <div className="absolute -mt-[60%] flex aspect-1 w-dvw flex-col items-center justify-center rounded-full bg-secondary" /> */}
        <div className="absolute flex aspect-1 w-dvw flex-col items-center justify-center bg-secondary" />
        <div className="relative z-10 flex w-full flex-col items-center justify-center text-textcolor">
          <div className="mb-16 flex flex-col items-center justify-center gap-2 px-4 text-center">
            <h2 className="text-2xl font-semibold md:text-3xl">— WORLD FOOD MONTH —</h2>
            <p>Spread Christmas joy with the InnerCity Mission&apos;s Send Portions campaign.</p>
          </div>

          {/* VIDEO */}
          <VideoCard iframe={true} />
        </div>
      </div>
    </div>
  )
}

export default IntroVideoSection
