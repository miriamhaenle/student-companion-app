import React, { useState } from 'react'
import styled from 'styled-components'
import arrow from '../assets/down-arrow.svg'

export default function Team({ teamHeadline, teamMembers }) {
  const [showTeam, setShowTeam] = useState(false)
  return (
    <TeamContainer showTeam={showTeam}>
      <h3 onClick={openTeam}>
        <img src={arrow} />
        {teamHeadline}
      </h3>
      {showTeam ? (
        <section>
          {teamMembers.map((member) => (
            <TeamMember>{member}</TeamMember>
          ))}
        </section>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 375px;
  margin: 0 auto;

  img {
    position: absolute;
    left: 30%;
    width: 15px;
    height: 15px;
    margin: 0 10px;
    transform: ${(props) => (props.showTeam ? 'rotate(0)' : 'rotate(-90deg)')};
    transition: transform 0.3s ease-in-out;
  }

  h3 {
    font-weight: 500;
    text-align: start;
  }
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
