import React, { useState } from 'react'
import styled from 'styled-components'

export default function AverageEnergyLevel({ averageEnergy }) {
  return (
    <section>
      <h2>Your average energy</h2>
      <EnergyElement>{averageEnergy}</EnergyElement>
    </section>
  )
}

const EnergyElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(145deg, #e65fa2, #ff70c1);
  box-shadow: 35px 35px 71px #d95999, -35px -35px 71px #ff79cf;
  font-size: 3rem;
`
