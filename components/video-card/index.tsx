import Script from "next/script";

type VideoCardProps = {
 videoUrl: string;
 iframe: boolean;
 className?: string;
};

export function VideoCard({
 videoUrl,
 iframe,
 className,
}: VideoCardProps) {
 return (
  <div className={`${className} rounded-lg bg-primary/10 p-2 w-full h-full`}>
   {iframe ? (
    <>
     <iframe
      width={"100%"}
      height={"100%"}
      src={videoUrl}
      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
      className="aspect-video h-full w-full"
     />
     <Script src="https://player.vimeo.com/api/player.js" />
    </>
   ) : (
    <video width="400" className="w-full rounded-md" controls>
     <source src={videoUrl} type="video/mp4" />
    </video>
   )}
  </div>
 );
}
