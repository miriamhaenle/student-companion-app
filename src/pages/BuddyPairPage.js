import React from 'react'
import Header from '../components/Header'
import BuddyPair from '../components/BuddyPair'
import Navigation from '../components/Navigation'

export default function BuddyPairPage() {
  return (
    <>
      <Header titleText="Buddy Pairs" />
      <BuddyPair buddyOne="Han Solo" buddyTwo="Chewbacca" />
      <BuddyPair buddyOne="Bonnie" buddyTwo="Clyde" />
      <BuddyPair buddyOne="Elwood" buddyTwo="Jake Blues" />
      <BuddyPair buddyOne="Thelma" buddyTwo="Louise" />
      <Navigation />
    </>
  )
}
