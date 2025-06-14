import React from 'react'
import Script from 'next/script'

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
          <iframe
            className="relative mx-auto flex h-[250px] w-full !max-w-4xl flex-col items-center justify-center rounded-lg border-4 border-dashed border-secondary bg-primary md:h-[500px]"
            src="https://player.vimeo.com/video/440604709?h=17c8c981dc"
            data-src="https://player.vimeo.com/video/440604709?h=17c8c981dc&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            allow="autoplay; transcript; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            width="1280"
            height="720"
            allowFullScreen
          >
            <Script src="https://player.vimeo.com/api/player.js"></Script>
          </iframe>
        </div>
      </div>
    </div>
  )
}

export default IntroVideoSection
