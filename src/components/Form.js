import React from 'react'
import styled from 'styled-components'
import AverageEnergyLevel from './AverageEnergyLevel'
import Button from './Button'
import DailyJournal from './DailyJournal'
import StarRating from './StarRating'

export default function Form() {
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StarRating headline="Rate your day" editable={true} />
      <AverageEnergyLevel averageEnergy="75%" />
      <DailyJournal></DailyJournal>
      <Button text="Submit" />
    </StyledForm>
  )

  function handleSubmit(event) {
    event.preventDefault()
  }
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`
