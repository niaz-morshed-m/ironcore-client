'use client'

import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedProducts from './components/FeaturedProducts'
import CategorySection from './components/CategorySection'
import NewArrivals from './components/NewArrivals'
import BuildHomeGym from './components/BuildHomeGym'
import SuccessStories from './components/SuccessStories'
import TrainingLab from './components/TrainingLab'
import ReadyToLevelUp from './components/ReadyToLevelUp'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import DarkModeToggle from './components/DarkModeToggle'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <FeaturedProducts />
      <CategorySection />
      <NewArrivals />
      <BuildHomeGym />
      <SuccessStories />
      <TrainingLab />
      <ReadyToLevelUp />
      <Newsletter />
      <Footer />
      <DarkModeToggle />
    </main>
  )
}