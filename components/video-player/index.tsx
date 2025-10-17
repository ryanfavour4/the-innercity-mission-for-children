'use client'
import { useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import PercentageBar from '@/components/percentage-bar'
import { formatTime } from '@/utils/format-time'
import thumbnail from '@/public/assets/images/video-thumbnail.jpg'
import Image, { StaticImageData } from 'next/image'
import {
  MuteIcon,
  PauseIcon,
  PlayIcon,
  SkipBackward10Icon,
  SkipForward10Icon,
  VolumeIcon,
} from '../svgs'

interface VideoPlayerProps {
  src: string
  autoplay?: boolean
  thumb?: StaticImageData | string
  className?: string
}

const VideoPlayer = ({ src, thumb = thumbnail, autoplay = false, className }: VideoPlayerProps) => {
  const [playing, setPlaying] = useState(autoplay)
  const playerRef = useRef<HTMLVideoElement>(null)
  const [isHovering, setIsHovering] = useState(true)
  const [progress, setProgress] = useState(0) // 0–1 fraction
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [showThumbnail, setShowThumbnail] = useState(true)

  const togglePlay = () => {
    setPlaying((prev) => !prev)
  }

  // Update progress as video plays
  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const el = e.target as HTMLVideoElement
    setDuration(el.duration)
    if (el && el.duration > 0) {
      setProgress(el.currentTime / el.duration)
    }
  }

  const handleUpdatePlayerCurrentTime = (percentage: number) => {
    if (!duration || !playerRef.current) return
    // convert percentage (0–100) into seconds
    const newTime = (percentage / 100) * duration
    // update the progress as well with percentage to fraction
    setProgress(percentage / 100)
    playerRef.current.currentTime = newTime
  }

  const handleJumpPlayerCurrentTime = (jumpBy: number) => {
    if (!playerRef.current || !jumpBy) return
    playerRef.current.currentTime = playerRef.current.currentTime + jumpBy
  }

  const handleVideoEnded = () => {
    setPlaying(false)
    setDuration(0)
    setProgress(0)
    setShowThumbnail(true)
  }

  const toggleMute = () => {
    if (!playerRef.current) return
    const currentVolume = playerRef.current.volume

    if (currentVolume > 0) {
      playerRef.current.volume = 0
      setVolume(0)
      setIsMuted(true)
    } else {
      playerRef.current.volume = 1
      setVolume(1)
      setIsMuted(false)
    }
  }

  return (
    <>
      <div
        className={`relative aspect-[1.5] w-full max-w-3xl overflow-hidden rounded-lg bg-black backdrop-filter md:aspect-[1.8] ${className}`}
      >
        {/* Video */}
        <Image
          alt="thumbnail"
          src={thumb}
          className={`absolute inset-0 z-[1] h-full w-full ${showThumbnail ? 'block' : 'hidden'}`}
          width={640}
          height={360}
        />
        <ReactPlayer
          ref={playerRef}
          src={src}
          // src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
          playing={playing}
          controls={false} // hide native controls
          muted={isMuted}
          loop={false}
          volume={volume}
          onPlay={() => setShowThumbnail(false)}
          width="100%"
          height="100%"
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleVideoEnded}
          onWaiting={(e) => console.log(e)}
          onWaitingCapture={(e) => console.log(e)}
          style={{ pointerEvents: 'none' }} // prevent click-through to Vimeo UI
          slot="media"
        />

        {/* controls overlay */}
        <div
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className={`absolute inset-0 z-10 bg-gradient-to-b from-dark/5 to-dark/95 text-light transition duration-500 ${isHovering ? 'opacity-100' : 'opacity-0'}`}
        >
          <div
            onClick={togglePlay}
            className="absolute inset-0 bottom-16 flex items-center justify-center"
          >
            <button className="btn-primary w-fit px-5 py-1">
              {playing ? (
                <PauseIcon className="size-9 text-4xl" />
              ) : (
                <PlayIcon className="size-9 text-4xl" />
              )}
            </button>
          </div>

          <div className="absolute bottom-0 h-16 w-full">
            <div className="mx-auto h-14 rounded-lg bg-white/30 px-2 py-1.5 backdrop-blur-sm md:w-11/12">
              <PercentageBar
                value={progress * 100}
                onChange={(val) => {
                  setProgress(val)
                  handleUpdatePlayerCurrentTime(val)
                }}
              />
              <div className="mt-1.5 flex items-center justify-between gap-x-8 gap-y-2 text-sm leading-tight md:flex-nowrap">
                <div className="flex w-full items-center justify-start gap-2">
                  <small className="">
                    {duration
                      ? `${formatTime(progress * duration) || '00:00'} / ${formatTime(duration) || '00:00'}`
                      : '00:00 / 00:00'}
                  </small>

                  <button
                    onClick={toggleMute}
                    className="rounded border border-light bg-light/25 p-1 text-light backdrop-blur active:scale-95"
                  >
                    {isMuted ? (
                      <MuteIcon className="size-4 text-4xl" />
                    ) : (
                      <VolumeIcon className="size-4 text-4xl" />
                    )}
                  </button>
                </div>

                <div className="flex w-full items-center justify-end gap-2">
                  <button
                    onClick={() => handleJumpPlayerCurrentTime(-10)}
                    className="rounded border border-light bg-light/25 p-1 text-light backdrop-blur active:scale-95"
                  >
                    <SkipBackward10Icon className="size-4 text-base" />
                  </button>
                  <button
                    onClick={togglePlay}
                    className="rounded border border-light bg-light/25 p-1 text-light backdrop-blur active:scale-95"
                  >
                    {playing ? (
                      <PauseIcon className="size-4 text-4xl" />
                    ) : (
                      <PlayIcon className="size-4 text-4xl" />
                    )}
                  </button>
                  <button
                    onClick={() => handleJumpPlayerCurrentTime(10)}
                    className="rounded border border-light bg-light/25 p-1 text-light backdrop-blur active:scale-95"
                  >
                    <SkipForward10Icon className="size-4 text-base" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VideoPlayer
