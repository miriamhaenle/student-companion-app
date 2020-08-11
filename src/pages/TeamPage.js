import React from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Team from '../components/Team'
import styled from 'styled-components'

export default function TeamPage() {
  const teamOne = [
    'Jerry',
    'Andreas',
    'Lene',
    'Jan R.',
    'Jan G.',
    'Joe',
    'Piers',
  ]
  const teamTwo = ['Mariuccia', 'Svenja', 'Franci', 'Miriam']
  const teamThree = ['Stephanie', 'Annette', 'Sina', 'Sylvia']
  const teamFour = ['Dajana', 'Paul', 'Anna', 'Kathrin', 'Martin']

  return (
    <PageContainer>
      <Header titleText="Teams" />
      <Team teamHeadline="Coaches" teamMembers={teamOne} />

      <Team teamHeadline="Firefighters" teamMembers={teamTwo} />
      <Team teamHeadline="DevGirls" teamMembers={teamThree} />
      <Team teamHeadline="Rainbowhead" teamMembers={teamFour} />

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
