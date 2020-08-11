import React from 'react'
import styled from 'styled-components'

export default function JournalCard() {
  return (
    <StyledCard>
      <h3>Thank you!</h3>
      <p>
        Danke an Jerry, Andreas, Lene, Janny G., Robby J., Joe und Piers für die
        tolle Unterstüzung durch die Auf und Abs des Bootcamps!
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
