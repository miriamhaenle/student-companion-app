import React from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import styled from 'styled-components'
import BuddyPair from '../components/BuddyPair'
import Team from '../components/Team'
import StarRating from '../components/StarRating'
import WeekEnergyChart from '../components/WeekEnergyChart'
import JournalCard from '../components/JournalCard'
import GreenCard from '../components/GreenCard'

export default function DashboardPage() {
  const teamOne = [
    'Jerry',
    'Andreas',
    'Lene',
    'Jan R.',
    'Jan G.',
    'Joe',
    'Piers',
  ]

  return (
    <PageContainer>
      <Header titleText="Dashboard" />
      <h2>Your code buddy</h2>
      <BuddyPair buddyOne="Frustration" buddyTwo="Euphoria" />

      <h2>Your team</h2>
      <Team
        teamHeadline="Coaches"
        teamMembers={teamOne}
        showTeamStatus="true"
      />

      <h2>Daily rating yesterday</h2>
      <StarRating editable={false} value="5" />
      <h2>This weeks energy</h2>
      <WeekEnergyChart />
      <h2>Camp journal</h2>
      <JournalCard />
      <GreenCard />
      <Navigation />
    </PageContainer>
  )
}

const PageContainer = styled.main`
  overflow: scroll;
  text-align: center;

  ::after {
    display: block;
    height: 100px;
    content: '';
  }
`
