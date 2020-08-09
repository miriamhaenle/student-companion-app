import React, { useState } from 'react'
import styled from 'styled-components'
import StarRating from './StarRating'
import DailyJournal from './DailyJournal'
import Button from './Button'
import AverageEnergyLevel from './AverageEnergyLevel'

export default function Form() {
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StarRating></StarRating>
      <AverageEnergyLevel averageEnergy="75%" />
      <DailyJournal></DailyJournal>
      <Button text="Submit" />
    </StyledForm>
  )

  function handleSubmit(event) {
    event.prevent.Default()
  }
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`
