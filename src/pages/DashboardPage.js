import React from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import styled from 'styled-components'

export default function DashboardPage() {
  return (
    <PageContainer>
      <Header titleText="Dashboard" />
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
