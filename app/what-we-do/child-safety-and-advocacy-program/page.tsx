import React from 'react'
import CtaSection from '@/layouts/cta-section'
import {
  Overview1Section,
  Overview2Section,
  Overview3Section,
  Overview4Section,
  Overview5Section,
  Overview6Section,
  PageHeroSection,
} from './sections'

export default function Page() {
  return (
    <main>
      <PageHeroSection />
      <Overview1Section />
      <Overview2Section />
      <Overview3Section />
      <Overview4Section />
      <Overview5Section />
      <Overview6Section />
      <CtaSection />
    </main>
  )
}
