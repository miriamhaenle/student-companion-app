import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Button from '../components/Button'
import EnergyChart from '../components/EnergyChart'

export default function EnergyPage() {
  return (
    <PageContainer>
      <Header titleText="Energy" />
      <EnergyChart />
      <Button text="25%" />
      <Button text="50%" />
      <Button text="75%" />
      <Button text="100%" />

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
