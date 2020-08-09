import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Button from '../components/Button'
import EnergyChart from '../components/EnergyChart'

export default function EnergyPage() {
  const [energyLevel, setEnergyLevel] = useState('')

  return (
    <PageContainer>
      <Header titleText="Energy" />
      <EnergyChart number={energyLevel} />
      <div>
        <Button text="25%" onClick={returnRandomNumber} />
        <Button text="50%" onClick={returnRandomNumber} />
        <Button text="75%" onClick={returnRandomNumber} />
        <Button text="100%" onClick={returnRandomNumber} />
      </div>
      <Navigation />
    </PageContainer>
  )

  function returnRandomNumber() {
    const newNumber = Math.floor(Math.random() * 100 + 1)
    setEnergyLevel(newNumber)
  }
}

const PageContainer = styled.main`
  overflow: scroll;
  ::after {
    display: block;
    height: 100px;
    content: '';
  }
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`
