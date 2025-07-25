import Script from 'next/script'

type VideoCardProps = {
  videoUrl?: string
  iframe: boolean
  className?: string
}

export function VideoCard({
  videoUrl = 'https://player.vimeo.com/video/1049658542?h=70167c1e56',
  iframe,
  className,
}: VideoCardProps) {
  return (
    <div className={`${className} h-full w-full rounded-lg p-2`}>
      {iframe ? (
        <>
          <iframe
            className="relative mx-auto flex h-[250px] w-full !max-w-4xl flex-col items-center justify-center rounded-lg border-4 border-secondary bg-secondary md:h-[500px]"
            src={videoUrl}
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
