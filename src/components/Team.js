import React, { useState } from 'react'
import styled from 'styled-components'
import arrow from '../assets/down-arrow.svg'

export default function Team({ teamHeadline, teamMembers, showTeamStatus }) {
  const [showTeam, setShowTeam] = useState(false || showTeamStatus)
  return (
    <TeamContainer showTeam={showTeam}>
      <img src={arrow} alt="" />

      <h3 onClick={openTeam}>{teamHeadline}</h3>
      {showTeam ? (
        <TeamSection>
          {teamMembers.map((member) => (
            <TeamMember key={member}>{member}</TeamMember>
          ))}
        </TeamSection>
      ) : (
        ''
      )}
    </TeamContainer>
  )

  function openTeam() {
    setShowTeam(!showTeam)
  }
}

const TeamContainer = styled.section`
  display: grid;
  grid-template-columns: 2fr 3fr;

  img {
    justify-self: end;
    align-self: center;
    width: 15px;
    height: 15px;
    margin: 0 10px;
    transform: ${(props) => (props.showTeam ? 'rotate(0)' : 'rotate(-90deg)')};
    transition: transform 0.3s ease-in-out;
  }

  h3 {
    justify-self: start;
    font-weight: 500;
  }
`

const TeamSection = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TeamMember = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0;
  height: 60px;
  width: 200px;
  border-radius: 6px;
  background: linear-gradient(145deg, #ff70c1, #e65fa2);
  box-shadow: 9px 9px 18px #d95999, -9px -9px 18px #ff79cf;
`
