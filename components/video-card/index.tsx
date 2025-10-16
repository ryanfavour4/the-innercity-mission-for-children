import Script from 'next/script'

type VideoCardProps = {
  videoUrl?: string
  thumbNail?: string
  iframe: boolean
  className?: string
  classNameIframe?: string
}

export function VideoCard({
  videoUrl = 'https://player.vimeo.com/video/1127232588?h=e690936168',
  thumbNail = 'https://i.vimeocdn.com/video/2069904404-1063d9db1483b9fda92eae24141c3ddb6fa25159a1a765bab06975a5cafc4c9a-d?mw=1080&q=1080',
  iframe,
  className,
  classNameIframe,
}: VideoCardProps) {
  return (
    <div id="intro-video-section" className={`${className} h-full w-full rounded-lg px-0`}>
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
