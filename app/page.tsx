import Image from 'next/image'
import HeroSection from './(home)/heroSection/heroSection'
import AboutSection from './(home)/aboutSection/aboutSection'
import EventTimelineSection from './(home)/eventTimelineSection/eventTimelineSection'
import AwardsSection from './(home)/awardsSection/awardsSection'
import ChaptersSection from './(home)/chaptersSection/chaptersSection'
import { Fragment } from 'react'
import AwardsSectionNew from './(home)/awardsSectionNew/page'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white justify-between scroll-smooth">
      <HeroSection />
      <AboutSection />
      <AwardsSectionNew />
      <EventTimelineSection />
      <ChaptersSection />
    </main>
  )
}
