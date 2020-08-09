import React from 'react'
import styled from 'styled-components'

export default function JournalCard() {
  return (
    <StyledCard>
      <h3>What a day!</h3>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </p>
    </StyledCard>
  )
}

const StyledCard = styled.div`
  margin: 0 auto;
  padding: 10px;
  width: 350px;
  height: auto;
  border-radius: 5px;
  background: #ff69b4;
  box-shadow: inset 7px 7px 14px #d95999, inset -7px -7px 14px #ff79cf;
`
