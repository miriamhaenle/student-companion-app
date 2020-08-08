import React from 'react'
import styled from 'styled-components'

export default function BuddyPair({ buddyOne, buddyTwo }) {
  return (
    <BuddyContainer>
      <CodyBuddy>{buddyOne}</CodyBuddy>
      <PlusIcon>+</PlusIcon>
      <CodyBuddy>{buddyTwo}</CodyBuddy>
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
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin: 2px 0;
  border-radius: 5px;
  background: linear-gradient(145deg, #e65fa2, #ff70c1);
  box-shadow: 10px 10px 20px #d95999, -10px -10px 20px #ff79cf;
`

const PlusIcon = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 70px;
  position: absolute;
  top: 35%;
  left: 44%;
  color: var(--hotpink);
  border-radius: 50px;
  background: #f7ebe8;
  box-shadow: inset 7px 7px 13px #d2c8c5, inset -7px -7px 13px #ffffff;
`
