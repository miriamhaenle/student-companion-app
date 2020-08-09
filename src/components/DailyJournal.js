import React, { useState } from 'react'
import styled from 'styled-components'

export default function DailyJournalForm() {
  return (
    <StyledSection>
      <h2>Daily Journal</h2>
      <label>
        <input placeholder="Describe your day in one word"></input>
      </label>
      <StyledDetails>
        <summary>Add more details</summary>
        <textarea placeholder="Add details here" />
      </StyledDetails>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  input {
    padding: 10px;
    color: var(--seashell);
    height: 40px;
    font-size: 1.1rem;
    width: 300px;

    border: none;
    border-radius: 5px;
    background: #ff69b4;
    box-shadow: inset 7px 7px 14px #d95999, inset -7px -7px 14px #ff79cf;

    ::placeholder {
      color: var(--seashell);
    }
  }
`

const StyledDetails = styled.details`
  font-size: 1.2rem;
  outline: none;
  padding: 10px 0;
  summary {
    padding: 10px;
  }
  textarea {
    padding: 10px;

    font-family: 'Raleway', sans-serif;
    font-size: 1.1rem;
    width: 300px;
    border: none;
    border-radius: 5px;
    background: #ff69b4;
    box-shadow: inset 7px 7px 14px #d95999, inset -7px -7px 14px #ff79cf;

    ::placeholder {
      color: var(--seashell);
    }
  }
`
