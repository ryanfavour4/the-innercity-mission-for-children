'use client'
import Image from 'next/image' // or standard img
// import directorPose from '@/public/assets/poa/director-image.png'
// Import Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { formatDate } from '@/utils/format-date'

export type Testimonial = {
  id: number
  name: string
  country: string
  relation: string
  message: string
  image_url: string
  approved: boolean
  created_at: string
}

// Helper function to split the flat array into groups of 8
const chunkArray = (array: Testimonial[], chunkSize: number) => {
  const chunks = []
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize))
  }
  return chunks
}

export default function WishCarousel() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  // Split your data into batches of 8 cards per slide
  const [isMobile, setIsMobile] = useState(false)
  const [isTab, setIsTab] = useState(false)
  const wishBatches = chunkArray(testimonials, isMobile ? 2 : isTab ? 4 : 8)

  useEffect(() => {
    axios
      .get('/api/poa/testimonials')
      .then((res) => setTestimonials(res.data.data))
      .catch((err) => console.log(err))

    if (window) {
      // check for tab and mobile before defaulting to setting both to false
      setIsMobile(window.innerWidth < 768 ? true : false)
      setIsTab(window.innerWidth < 1024 && window.innerWidth >= 768 ? true : false)
    }
  }, [])

  console.log(wishBatches)

  return (
    <article className="container relative px-2 pb-24 pt-16">
      {/* SWIPER CONTAINER */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        className="w-full"
        navigation={{
          prevEl: '.custom-prev-btn',
          nextEl: '.custom-next-btn',
        }}
        pagination={{
          clickable: true,
          el: '.custom-pagination',
        }}
      >
        {wishBatches.map((batch, batchIdx) => (
          <SwiperSlide key={batchIdx}>
            {/* The Inner 4x2 Grid Layout */}
            <div
              className={`grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 lg:grid-cols-4`}
            >
              {batch.map((wish, idx) => (
                <figure
                  key={idx}
                  className="font-body flex flex-col items-center justify-center gap-2.5 border border-[#C9A84C] bg-light px-4 py-8 text-center md:max-w-xs md:px-8"
                >
                  <Image
                    alt="user"
                    src={wish.image_url}
                    width={50}
                    height={50}
                    className="aspect-1 w-14 rounded-full border border-[#C9A84C] object-cover"
                  />
                  <p className="mb-2 leading-normal">&ldquo;{wish.message}&rdquo;</p>
                  <h6 className="font-semibold text-[#4E061A]">{wish.name}</h6>
                  <p className="text-[#755B00]">{wish.country}</p>
                  <small className="text-[#877274]">
                    {formatDate(wish.created_at).commaDateFormat}
                  </small>
                </figure>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* --- CUSTOM NAVIGATION ARROWS (Placed on outer edges) --- */}
      <button className="custom-prev-btn absolute left-2 top-[50%] z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#4E061A] bg-white text-[#4E061A] transition-all hover:bg-[#4E061A] hover:text-white disabled:pointer-events-none disabled:opacity-30">
        <Icon icon="icon-park-solid:left-one" />
      </button>
      <button className="custom-next-btn absolute right-2 top-[50%] z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#4E061A] bg-white text-[#4E061A] transition-all hover:bg-[#4E061A] hover:text-white disabled:pointer-events-none disabled:opacity-30">
        <Icon icon="icon-park-solid:right-one" />
      </button>

      {/* --- CUSTOM PAGINATION DOTS (Placed at the bottom) --- */}
      <div className="custom-pagination absolute bottom-16 left-0 z-10 flex w-full justify-center gap-2" />

      {/* Custom Styles override for Swiper's default bullet styling */}
      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          background: #cccccc !important;
          opacity: 1;
          width: 10px;
          height: 10px;
          transition: all 0.3s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #4e061a !important;
          width: 10px;
          height: 10px;
        }
      `}</style>
    </article>
  )
}
