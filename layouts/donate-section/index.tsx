import useEmblaCarousel from 'embla-carousel-react'
import React, { useEffect, useState } from 'react'

export default function DonateSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel()
  const [activeSlide, setActiveSlide] = useState(1)

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', () => {
      const selected = emblaApi.selectedScrollSnap()
      setActiveSlide(selected + 1)
    })
  }, [emblaApi])

  const slides = [<DonateSlideOne key="slide-1" />, <DonateSlideTwo key="slide-2" />]

  return (
    <section>
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {/* SLIDE */}
          {slides.map((slide) => (
            <div key={slide.key} className="min-w-full flex-shrink-0 p-2">
              <div className="flex h-full w-full items-center justify-center">{slide}</div>
            </div>
          ))}
        </div>
        {/* indications */}
        <div className="mb-4 flex w-full items-center justify-center gap-2 p-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full ${activeSlide === i + 1 ? 'bg-primary' : 'bg-grey-100'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export function DonateSlideOne() {
  return <div>DonateSlide1</div>
}

export function DonateSlideTwo() {
  return <div>DonateSlide1</div>
}
