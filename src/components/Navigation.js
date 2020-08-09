import React from 'react'
import styled from 'styled-components'
import * as ROUTES from '../lib/constants'
import { NavLink } from 'react-router-dom'
import home from '../assets/home.svg'
import buddy from '../assets/buddy.svg'
import team from '../assets/team.svg'
import energy from '../assets/energy.svg'
import journal from '../assets/journal.svg'

export default function Navigation() {
  return (
    <StyledNavigation>
      <ul>
        <li>
          <NavLink exact to={ROUTES.HOME} activeClassName="selected">
            <img src={home} alt="home" />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.BUDDY} activeClassName="selected">
            <img src={buddy} alt="buddy" />
            Buddy
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.TEAM} activeClassName="selected">
            <img src={team} alt="team" />
            Team
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.ENERGY} activeClassName="selected">
            <img src={energy} alt="energy" />
            Energy
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.JOURNAL} activeClassName="selected">
            <img src={journal} alt="journal" />
            Journal
          </NavLink>
        </li>
      </ul>
    </StyledNavigation>
  )
}

const StyledNavigation = styled.nav`
  position: fixed;
  z-index: 100;
  bottom: 10px;
  left: 0;
  width: 100%;

  ul {
    display: flex;
    justify-content: space-around;
    margin: 30px 0;
    padding: 0;
  }

  li {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    background: #ff69b4;
    box-shadow: 5px 5px 10px #d95999, -5px -5px 10px #ff79cf;
    list-style: none;

    .selected {
      border-radius: 5px;
      background: #ff69b4;
      box-shadow: inset 5px 5px 10px #d95999, inset -5px -5px 10px #ff79cf;
    }
  }

  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--seashell);
    font-size: 0.9rem;
  }

  img {
    width: 25px;
    height: 25px;
    margin-top: 2px;
  }
`
