import Script from 'next/script'

type VideoCardProps = {
  videoUrl?: string
  thumbNail?: string
  iframe: boolean
  className?: string
  classNameIframe?: string
}
export function VideoCard({
  videoUrl = 'https://player.vimeo.com/video/1149214443?h=b55ee72fa5',
  thumbNail = 'https://i.vimeocdn.com/video/2099725266-da7a073efda7c43492a5800b65e1157462f55400da6c5eace645aa8ec74e21d0-d?mw=1080&q=1080',
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
