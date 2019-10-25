import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import 'styles/global.scss'

import SplashPage from 'pages/splash'
import LoginPage from 'pages/login'
import SwitchUserPage from 'pages/switch-user'
import HomePage from 'pages/home'

function App () {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={SplashPage} />
        <Route path='/login' exact component={LoginPage} />
        <Route path='/switch-user' exact component={SwitchUserPage} />
        <Route path='/home' exact component={HomePage} />
      </Switch>
    </Router>
  )
}

export default App
