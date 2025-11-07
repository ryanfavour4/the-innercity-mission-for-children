import TopBlogSection from '@/layouts/top-blog-section'
import CtaSection from '@/layouts/cta-section'
import EventsSection from '@/layouts/events-section'
import HeroSection from '@/app/_section_home/hero-section'
import IntroVideoSection from '@/app/_section_home/intro-video-section'
import BillionMealCampaignSection from '@/app/_section_home/bmc-section'
import MetricStatsSection from '@/app/_section_home/metrics-stats-section'
import FundraiseWithUsSection from '@/app/_section_home/fundraise-with-us-section'
import VolunteerWithUs from '@/app/_section_home/volunteer-with-us'
import ExtraExternalSection from '@/app/_section_home/extra-external-section'
import TopNavbar from '@/layouts/topnavbar'
import Footer from '@/layouts/footer'

export default function Home() {
  return (
    <>
      <TopNavbar />
      <HeroSection />
      <IntroVideoSection />
      <BillionMealCampaignSection />
      <MetricStatsSection />
      <FundraiseWithUsSection />
      <VolunteerWithUs />
      <ExtraExternalSection />
      <TopBlogSection />
      <CtaSection />
      <EventsSection />
      <Footer />
    </>
  )
}
