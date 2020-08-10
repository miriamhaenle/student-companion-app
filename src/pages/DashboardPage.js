import React from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import styled from 'styled-components'
import BuddyPair from '../components/BuddyPair'
import Team from '../components/Team'
import StarRating from '../components/StarRating'
import WeekEnergyChart from '../components/WeekEnergyChart'
import JournalCard from '../components/JournalCard'
import Pokeball from '../components/Pokeball'

export default function DashboardPage() {
  const teamOne = ['Mariuccia', 'Svenja', 'Franci', 'Miriam']

  return (
    <PageContainer>
      <Header titleText="Dashboard" />
      <h2>Your code buddy</h2>
      <BuddyPair buddyOne="Han Solo" buddyTwo="Chewbacca" />
      <h2>Your team</h2>
      <Team
        teamHeadline="Firefighters"
        teamMembers={teamOne}
        showTeamStatus="true"
      />
      <Pokeball />

      <h2>Daily rating yesterday</h2>
      <StarRating editable={false} value="5" />
      <h2>This weeks energy</h2>
      <WeekEnergyChart />
      <h2>Yesterdays journal</h2>
      <JournalCard />
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
