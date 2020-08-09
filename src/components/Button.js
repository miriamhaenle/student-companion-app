import React from 'react'
import styled from 'styled-components'

export default function Button({ text }) {
  return <StyledButton>{text}</StyledButton>
}

const StyledButton = styled.button`
  margin: 30px;
  width: 150px;
  height: 50px;
  color: var(--seashell);
  border: none;
  border-radius: 5px;
  background: linear-gradient(145deg, #ff70c1, #e65fa2);
  box-shadow: 10px 10px 19px #d95999, -10px -10px 19px #ff79cf;
`
