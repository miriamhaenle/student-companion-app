import React from 'react'
import styled from 'styled-components'

export default function Header({ titleText }) {
  return <StyledHeader>{titleText}</StyledHeader>
}

const StyledHeader = styled.header`
  margin: 0;
  background: lightpink;
  padding: 10px;
  color: hotpink;
  font-family: var(--headlineFont);
  text-align: center;
  font-size: 2rem;
`
