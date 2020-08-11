import React from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Team from '../components/Team'
import styled from 'styled-components'

export default function TeamPage() {
  const teamOne = ['Mariuccia', 'Svenja', 'Franci', 'Miriam']
  const teamTwo = ['Stephanie', 'Annette', 'Sina', 'Sylvia']
  const teamThree = ['Dajana', 'Paul', 'Anna', 'Kathrin', 'Martin']
  const teamFour = [
    'Jerry',
    'Andreas',
    'Lene',
    'Jan R.',
    'Jan G.',
    'Joe',
    'Pierce',
  ]

  return (
    <PageContainer>
      <Header titleText="Teams" />
      <Team teamHeadline="Coaches" teamMembers={teamFour} />

      <Team teamHeadline="Firefighters" teamMembers={teamOne} />
      <Team teamHeadline="DevGirls" teamMembers={teamTwo} />
      <Team teamHeadline="Rainbowhead" teamMembers={teamThree} />

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
