import Script from 'next/script'

type VideoCardProps = {
  videoUrl?: string
  thumbNail?: string
  iframe: boolean
  className?: string
  classNameIframe?: string
}

export function VideoCard({
  videoUrl = 'https://player.vimeo.com/video/1113227827?h=9ca3e574ed',
  thumbNail = 'https://i.vimeocdn.com/video/2051672422-9eeae56bb17ce34f277a44ab6c3688ccd51f8278dda7673cfa8d412b54298cda-d?mw=800&mh=533&q=70',
  iframe,
  className,
  classNameIframe,
}: VideoCardProps) {
  return (
    <div id="intro-video-section" className={`${className} h-full w-full rounded-lg px-2`}>
      {iframe ? (
        <>
          <iframe
            className={`${classNameIframe} relative mx-auto flex aspect-1 h-60 w-full !max-w-4xl flex-col items-center justify-center rounded-lg md:h-96`}
            src={videoUrl}
            style={{
              backgroundImage: `url(${thumbNail})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            data-src={`${videoUrl}&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
            allow="autoplay; transcript; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            width="100%"
            height="720"
            allowFullScreen
          >
            <Script src="https://player.vimeo.com/api/player.js"></Script>
          </iframe>
        </>
      ) : (
        <video width="400" className="w-full rounded-md" controls>
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}
    </div>
  )
}
