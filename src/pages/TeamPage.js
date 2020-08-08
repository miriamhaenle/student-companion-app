import React from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Team from '../components/Team'

export default function TeamPage() {
  const teamOne = ['Mariuccia', 'Svenja', 'Franci', 'Miriam']
  const teamTwo = ['Stephanie', 'Annette', 'Sina', 'Sylvia']
  const teamThree = ['Dajana', 'Paul', 'Anna', 'Kathrin']

  return (
    <main>
      <Header titleText="Teams" />
      <Team teamHeadline="Firefighters" teamMembers={teamOne} />
      <Team teamHeadline="DevGirls" teamMembers={teamTwo} />
      <Team teamHeadline="Rainbowhead" teamMembers={teamThree} />

      <Navigation />
    </main>
  )
}
