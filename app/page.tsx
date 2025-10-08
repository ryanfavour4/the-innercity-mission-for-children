import HeroSection from '@/layouts/hero-section'
import IntroVideoSection from '@/layouts/intro-video-section'
import BillionMealCampaignSection from '@/layouts/bmc-section'
import MetricStatsSection from '@/layouts/metrics-stats-section'
import FundraiseWithUsSection from '@/layouts/fundraise-with-us-section'
import ExtraExternalSection from '@/layouts/extra-external-section'
import TopBlogSection from '@/layouts/top-blog-section'
import CtaSection from '@/layouts/cta-section'
import EventsSection from '@/layouts/events-section'

export default function Home() {
  return (
    <div className="">
      <HeroSection/>
      <IntroVideoSection />
      <BillionMealCampaignSection />
      <MetricStatsSection />
      <FundraiseWithUsSection />
      <ExtraExternalSection />
      <TopBlogSection />
      <CtaSection />
      <EventsSection />
    </div>
  )
}
