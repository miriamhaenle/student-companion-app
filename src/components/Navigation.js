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
  margin: 0;
  padding: 0;

  ul {
    display: flex;
    justify-content: space-around;
    margin: 30px 0;
    padding: 0;
  }

  li {
    border: 2px solid hotpink;
    list-style: none;
    padding: 8px;
  }

  a {
    width: 50px;
    height: 50px;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 35px;
    height: 35px;
  }
`
