import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Button from '../components/Button'
import EnergyChart from '../components/EnergyChart'

export default function EnergyPage() {
  return (
    <main>
      <Header titleText="Energy" />
      <EnergyChart />
      <Navigation />
    </main>
  )
}
