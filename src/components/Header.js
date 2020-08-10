import React from 'react'
import styled from 'styled-components'
import Pokeball from '../components/Pokeball'

export default function Header({ titleText }) {
  return (
    <StyledHeader>
      <Pokeball />
      <p>{titleText}</p>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-start;
  margin: 0;
  padding: 10px 50px;
  font-family: var(--headlineFont);
  text-align: center;
  font-size: 2rem;

  p {
    margin: 0;
  }
`
