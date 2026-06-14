import Image from 'next/image'
import { useState } from 'react'

// 1. Define your categories exactly from the image
const TABS = ['Through the Years', 'Family & Friends', 'Ministry Moments', 'Special Celebrations']

// 2. Mock data for the gallery items
const GALLERY_ITEMS = [
  {
    id: 1,
    category: 'Through the Years',
    title: 'Elderly Portrait',
    imageUrl:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60',
  },
  {
    id: 2,
    category: 'Through the Years',
    title: 'Elderly Portrait',
    imageUrl:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60',
  },
  {
    id: 3,
    category: 'Through the Years',
    title: 'Letter Writing',
    imageUrl:
      'https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?w=600&auto=format&fit=crop&q=60',
  },
  {
    id: 4,
    category: 'Family & Friends',
    title: 'Dinner Party',
    imageUrl:
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&auto=format&fit=crop&q=60',
  },
  {
    id: 5,
    category: 'Family & Friends',
    title: 'Dinner Party',
    imageUrl:
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&auto=format&fit=crop&q=60',
  },
  {
    id: 6,
    category: 'Ministry Moments',
    title: 'Cathedral Glass',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60',
  },
  {
    id: 7,
    category: 'Special Celebrations',
    title: 'Table Banquet',
    imageUrl:
      'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&auto=format&fit=crop&q=60',
  },
  {
    id: 8,
    category: 'Special Celebrations',
    title: 'Table Banquet',
    imageUrl:
      'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&auto=format&fit=crop&q=60',
  },
  {
    id: 9,
    category: 'Special Celebrations',
    title: 'Candlelight',
    imageUrl:
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&auto=format&fit=crop&q=60',
  },
  {
    id: 10,
    category: 'Special Celebrations',
    title: 'Candlelight',
    imageUrl:
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&auto=format&fit=crop&q=60',
  },
]

export function TabbedGallery() {
  // Set the default active tab to the first item
  const [activeTab, setActiveTab] = useState(TABS[0])

  // Filter items based on selected tab
  const filteredItems = GALLERY_ITEMS.filter((item) => item.category === activeTab)

  return (
    <>
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center gap-3 text-center md:gap-y-7">
        <h3 className="font-playfair-display text-4xl text-[#310411] md:text-5xl">Gallery</h3>
        <p className="text-base italic text-dark md:text-xl">
          Moments That Speak Louder Than Words
        </p>
      </div>

      {/* Tabs Container */}
      <div className="mb-12 grid grid-cols-2 justify-center gap-3 md:flex md:flex-wrap">
        {TABS.map((tab) => {
          const isSelected = activeTab === tab
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`border px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                isSelected
                  ? 'border-[#310411] bg-[#310411] text-[#C9A84C] shadow-sm'
                  : 'border-[#310411]/30 bg-transparent text-[#310411] hover:bg-[#310411]/5'
              } `}
            >
              {tab}
            </button>
          )
        })}
      </div>

      {/* Gallery Grid */}
      {/* Used standard responsive grid columns; can easily be turned into a masonry layout later */}
      <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className={`bg-gray-100 group relative aspect-[4/5] overflow-hidden border border-[#C9A84C] transition-transform duration-300 hover:scale-[1.01]`}
          >
            <Image
              width={150}
              height={150}
              src={item.imageUrl}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />

            {/* Simple Overlay for Caption (Optional UI touch) */}
            <div className="absolute inset-0 flex items-end bg-black/20 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-sm font-medium text-white">{item.title}</p>
            </div>
          </div>
        ))}

        {/* Fallback state if a tab has no images */}
        {filteredItems.length === 0 && (
          <div className="col-span-full py-12 text-center italic text-gray-400">
            No images found in this category.
          </div>
        )}
      </div>
    </>
  )
}
