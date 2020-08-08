import React from 'react'
import logo from './logo.svg'
import { Route, Switch } from 'react-router-dom'
import Dashboard from './pages/DashboardPage'
import BuddyPairPage from './pages/BuddyPairPage'
import TeamsPage from './pages/TeamPage'
import EnergyPage from './pages/EnergyPage'
import JournalPage from './pages/JournalPage'
import * as ROUTES from './lib/constants'

export default function App() {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME}>
        <Dashboard />
      </Route>
      <Route path={ROUTES.BUDDY}>
        <BuddyPairPage />
      </Route>
      <Route path={ROUTES.TEAM}>
        <TeamsPage />
      </Route>
      <Route path={ROUTES.ENERGY}>
        <EnergyPage />
      </Route>
      <Route path={ROUTES.JOURNAL}>
        <JournalPage />
      </Route>
    </Switch>
  )
}
