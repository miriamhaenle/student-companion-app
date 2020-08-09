import React from 'react'
import Header from '../components/Header'
import BuddyPair from '../components/BuddyPair'
import Navigation from '../components/Navigation'
import styled from 'styled-components'

export default function BuddyPairPage() {
  return (
    <PageContainer>
      <Header titleText="Buddy Pairs" />
      <BuddyPair buddyOne="Han Solo" buddyTwo="Chewbacca" />
      <BuddyPair buddyOne="Bonnie" buddyTwo="Clyde" />
      <BuddyPair buddyOne="Elwood" buddyTwo="Jake Blues" />
      <BuddyPair buddyOne="Thelma" buddyTwo="Louise" />
      <Navigation />
    </PageContainer>
  )
}

const PageContainer = styled.main`
  overflow: scroll;
  ::after {
    display: block;
    height: 100px;
    content: '';
  }
`
