import React from 'react'
import Header from '../components/Header'
import BuddyPair from '../components/BuddyPair'
import Navigation from '../components/Navigation'

export default function BuddyPairPage() {
  return (
    <>
      <Header titleText="Buddy Pairs" />
      <BuddyPair />
      <Navigation />
    </>
  )
}
