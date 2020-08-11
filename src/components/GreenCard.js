import React from 'react'
import styled from 'styled-components'

export default function GreenCard() {
  return (
    <StyledCard>
      <h3>PS:</h3>
      <p>Leider gibt's für die App noch keine Tests!</p>
    </StyledCard>
  )
}

const StyledCard = styled.div`
  color: #ea5342;
  margin: 10px auto;
  padding: 10px;
  width: 350px;
  height: auto;
  border-radius: 5px;
  background: #2ad866;
  box-shadow: inset 7px 7px 14px #24b857, inset -7px -7px 14px #30f875;
`
