import Image from 'next/image'
import HeroSection from './(home)/heroSection/heroSection'
import AboutSection from './(home)/aboutSection/aboutSection'
import EventTimelineSection from './(home)/eventTimelineSection/eventTimelineSection'
import AwardsSection from './(home)/awardsSection/awardsSection'
import ChaptersSection from './(home)/chaptersSection/chaptersSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeroSection />
      <AboutSection />
      <AwardsSection />
      <EventTimelineSection />
      <ChaptersSection />
    </main>
  )
}
