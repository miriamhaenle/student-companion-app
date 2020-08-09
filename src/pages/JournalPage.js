import React from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Form from '../components/Form'
import styled from 'styled-components'

export default function JournalPage() {
  return (
    <PageContainer>
      <Header titleText="Journal Page" />
      <Form />

      <Navigation />
    </PageContainer>
  )
}

const PageContainer = styled.main`
  overflow: scroll;
  ::after {
    display: block;
    height: 100px;
    content: '';
  }
`
