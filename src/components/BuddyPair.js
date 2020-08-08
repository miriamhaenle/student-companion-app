import React from 'react'
import styled from 'styled-components'

export default function BuddyPair() {
  return (
    <BuddyContainer>
      <CodyBuddy>Jan</CodyBuddy>
      <PlusIcon>+</PlusIcon>
      <CodyBuddy>Lene</CodyBuddy>
    </BuddyContainer>
  )
}

const BuddyContainer = styled.section`
  position: relative;
  display: flex;
  height: 160px;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
`

const CodyBuddy = styled.div`
  height: 80px;
  width: 200px;
  background: hotpink;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border-radius: 5px;
  margin: 2px 0;
`

const PlusIcon = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 2px dotted white;
  background: hotpink;
  color: white;
  font-size: 70px;
  position: absolute;
  top: 35%;
  left: 44%;
`
