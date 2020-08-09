import React from 'react'
import styled from 'styled-components'

export default function Header({ titleText }) {
  return <StyledHeader>{titleText}</StyledHeader>
}

const StyledHeader = styled.header`
  margin: 0;
  padding: 10px;
  font-family: var(--headlineFont);
  text-align: center;
  font-size: 2rem;
`
